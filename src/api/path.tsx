import { path } from "@/utils/path";

const ROOT_PATH='/api'
const  ROOT_PATH_SHORT_URL='/api/shorturls';

const endpoints={
    authGoogle:'/authgoogle',
    refreshToken:'/refreshtoken'
}
export const PATH_SHORT_URL={
    // crear short url 
    crearRuta:()=>path(ROOT_PATH_SHORT_URL),
    // autentificacion google
    authGoogle(redirect_url: string | null = null) {
        let url = path(ROOT_PATH, endpoints.authGoogle);
        if (redirect_url) {
          url += `?view=0&redirect_url=${redirect_url}`;
        }
        return url;
      },
    // refresh token
    refreshToken:(access_token:string)=>path(ROOT_PATH,endpoints.refreshToken+'?token='+access_token),
    authwithgooleserver:()=>path(ROOT_PATH,'/authgoogle?view=TRUE')
    
}

export const PATH_LOCAL_HOST={
}