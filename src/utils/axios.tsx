import axios from "axios";
import { HOST_API } from "@/config_global";


export const api = axios.create({
  baseURL: HOST_API,
  headers: {
    "Content-Type": "application/json",
  },
});