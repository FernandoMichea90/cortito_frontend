import axios from "axios";
import { HOST_API, USER_API, PASSWORD_API } from "@/config_global";

// Get user credentials from environment variables or configuration
const user = USER_API;
const password = PASSWORD_API;

// Get token from localStorage

var access_token:string|null=null;
try{

  access_token = localStorage.getItem('token');
}catch(e){
  console.log("access_token no definido")
}

// Create axios instance with baseURL and headers
export const api = axios.create({
  baseURL: HOST_API,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${access_token}`,
  },
});

// Define endpoints
export const endpoints = {
  // Endpoint to create short URL
  crearShortUrl: "/shorturl",
  //auth with google
  authwithgoogle:"/authgoogle"
};
