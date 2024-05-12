import axios from "axios";
import { HOST_API, USER_API, PASSWORD_API } from "@/config_global";
import { PATH_SHORT_URL as path } from "@/api/path";
import { json } from "stream/consumers";

// Get user credentials from environment variables or configuration
const user = USER_API;
const password = PASSWORD_API;



// varible local let isRefreshing

let isRefreshing = false

// Get token from localStorage

var access_token: string | null = null;
try {

  access_token = localStorage.getItem('token');
} catch (e) {
  console.log("access_token no definido")
}

// Create axios instance with baseURL and headers
const api = axios.create({
  baseURL: HOST_API,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${access_token}`,
  },
});


api.interceptors.request.use(
  async (config) => {
    console.log('paso por el interceptor');
    console.log(config);

    if (access_token) {
      if (!isRefreshing) {
        isRefreshing = true
        try {
          const response = await api.get(path.refreshToken(access_token));
          console.log('Éxito al refrescar el token');
          console.log(response);

          // Actualizar el token en los headers de la solicitud
          config.headers['Authorization'] = `Bearer ${response.data.access_token}`;
          console.log('no hay error');
        } catch (error) {
          console.log('Error  al refrescar el token');

          const currentPath = window.location.pathname;

          // tengo que enviar la ruta actual 
          const response= await api.get(path.authGoogle(currentPath))
          console.log("Ruta actual:"+ response.data);
          console.log('Error al refrescar el token');
          console.log(error);
          let url=response.data
          window.location.href=url

        }
        isRefreshing = false
      }
    }
    // Aquí puedes realizar modificaciones a la configuración de la solicitud
    // Por ejemplo, agregar encabezados comunes, token de autorización, etc.
    return config;
  },
  (error) => {
    // Manejar errores de solicitud
    return Promise.reject(error);
  }
);


export { api };