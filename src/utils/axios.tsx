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
   
    if (access_token) {
      if (!isRefreshing) {
        isRefreshing = true
        try {
          const response = await api.get(path.refreshToken(access_token));
        
          // Actualizar el token en los headers de la solicitud
          config.headers['Authorization'] = `Bearer ${response.data.token}`;
          localStorage.setItem("token", JSON.stringify(response.data.token));
        } catch (error) {
           console.log('Error  al refrescar el token');

          const currentPath = window.location.pathname;

          // tengo que enviar la ruta actual 
          const response= await api.get(path.authGoogle(currentPath))
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