import axios from "axios";


// const axiosClient = axios.create({
//     baseURL: "http://localhost:9090/api/v1/",
//     headers: {
//         "content-type": "application/json",
//     },
// });



// export const api = async (method, endpoint, payload) => {
//     try {
//         const response = await axiosClient(endpoint, { method: method, data: payload });
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const apiAccount = `http://localhost:9090/api/v1/accounts/`;

export const apiDepartment = `http://localhost:9090/api/v1/departments/`

export const apiPosition = `http://localhost:9090/api/v1/possitions/`