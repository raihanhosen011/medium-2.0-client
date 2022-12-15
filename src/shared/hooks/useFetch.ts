import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";


// ------------- AXIOS BASE --------------
const axiosBase = axios.create({
    baseURL: process.env.server_url,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer`
    },
  });
  


// -------------- GET DATA ----------------
export const useGet = ( path: string, key: string ) => {

    async function fetched() { return await axiosBase.get(path) }

    const { data, isLoading: loading, isError: error, isSuccess: success } = useQuery([key], fetched)
    
    return { data: data?.data , loading, error, success }
}


// -------------- POST DATA ----------------
export const usePost = ( path: string, key: string ) => {

    async function fetched() { return await axiosBase.post(path) }

    const { data, isLoading: loading, isError: error, isSuccess: success, mutate } = useMutation([key], fetched)

    return { data: data?.data , loading, error, success, mutate }
}


// // -------------- PATCH DATA ----------------
// export const usePatch = ( path: string, key: string, post ?: any ) => {

//     async function fetched() {
//         const res = await axios.patch(`${process.env.server_url}${path}`, post, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             }
//         });

//         return res; 
//     }

//     const { data, isLoading: loading, isError: error, isSuccess: success } = useQuery([key], fetched)
    
//     return { data: data?.data , loading, error, success }
// }


// // -------------- PUT DATA ----------------
// export const usePut = ( path: string, key: string, post ?: any ) => {

//     async function fetched() {
//         const res = await axios.put(`${process.env.server_url}${path}`, post, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             }
//         });

//         return res; 
//     }

//     const { data, isLoading: loading, isError: error, isSuccess: success } = useQuery([key], fetched)
    
//     return { data: data?.data , loading, error, success }
// }


// // -------------- DELETE DATA ----------------
// export const useDelete = ( path: string, key: string ) => {

//     async function fetched() {
//         const res = await axios.delete(`${process.env.server_url}${path}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             }
//         });

//         return res; 
//     }

//     const { data, isLoading: loading, isError: error, isSuccess: success } = useQuery([key], fetched)
    
//     return { data: data?.data , loading, error, success }
// }