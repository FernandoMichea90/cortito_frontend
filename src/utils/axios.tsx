import axios from "axios";
import { HOST_API,USER_API,PASSWORD_API } from "@/config_global";




let user = USER_API;
let password = PASSWORD_API;



export const api = axios.create({
  baseURL: HOST_API,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic " + btoa(`${user}:${password}`),
  },
});


export const endpoints = {
//crear shroturl
 crearShortUrl: "/shorturl",
};