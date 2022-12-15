import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";


// ------------- AXIOS BASE --------------
const axiosBase = axios.create({
  baseURL: `${process.env.server_url}`,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer`
  },
});


// -------------- GET DATA ----------------
export const useGet = ( path: string, key: string ) => {
    async function fetched() { return await axiosBase.get(path) }
    return useQuery([key], fetched)    
}


// -------------- POST DATA ----------------
export const usePost = ( path: string, key: string ) => {
    async function fetched(post: any) { return await axiosBase.post(path, post) }
    return useMutation([key], fetched)
}


// -------------- POST DATA ----------------
export const usePut = ( path: string, key: string ) => {
    async function fetched(post: any) { return await axiosBase.put(path, post) }
    return useMutation([key], fetched)
}


// -------------- POST DATA ----------------
export const usePatch = ( path: string, key: string ) => {
    async function fetched(post: any) { return await axiosBase.patch(path, post) }
    return useMutation([key], fetched)
}