import { path } from "@/utils/path";

const ROOT_PATH='/api'
const  ROOT_PATH_SHORT_URL='/api/shorturls';

const endpoints={
    authGoogle:'/authgoogle',
}
export const PATH_SHORT_URL={
    crearRuta:()=>path(ROOT_PATH_SHORT_URL),
    authGoogle:()=>path(ROOT_PATH,endpoints.authGoogle)
}