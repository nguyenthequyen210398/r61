import axios from 'axios';

import { useEffect, useState } from 'react';



// get listAccount API
export const getLisDataAPI = (api, setDataRes) => {
    // return api("GET", "accounts/", null);
    const data = axios.get(api)
        .then((res) => { setDataRes(res.data) })
        .catch((er) => console.log(er, 'err'));

    return data;
};

export const getDataAPI = (api, id, setDataRes) => {
    // return api("GET", "accounts/", null);
    const data = axios.get(api + `${id}`)
        .then((res) => { setDataRes(res.data) })
        .catch((er) => console.log(er, 'err'));

    return data;
};

// Add New Account
export const addAccountNewAPI = (api, AccountNew) => {
    // return api("POST", "accounts/", AccountNew);
    const data = axios.post(api, AccountNew)

        .catch((er) => console.log(er, 'err'));

    return data;
};


// Delete Account
export const deleteAccountAPI = (id, api, setAccount) => {

    const item = axios.delete(api + `${id}`)
        .then((res) => getLisDataAPI(api, setAccount))
        .catch((err) => alert(err, 'da co loi xay ra !'));

    return item;
};


// Update Account
export const updateAccountAPI = (id, api, accountUpdate, setAccount) => {
    const item = axios.put(api + `${id}`, accountUpdate)
        .then((res) => getLisDataAPI(api, setAccount))
        .catch((err) => alert(err, 'da co loi xay ra !'))
    return item;
};

// customhook call api
export const useGetListDataAPI = (api) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getLisDataAPI(api, setData);
    }, []);

    return [data, setData];
};

