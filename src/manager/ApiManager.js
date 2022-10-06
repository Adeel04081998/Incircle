import React from 'react';
import Axios from './Axios';



export const postRequest = async (url, data, onSuccess = () => { }, onError = () => { }, headers = {},) => {

    try {
        let res = await Axios.post(url, data, headers,);
        // console.log("[ApiManager].postRequest.res", JSON.stringify(res));

        onSuccess(res);

    } catch (error) {
        // console.log("[ApiManager].postRequest.error", error);

        onError(error);
    } finally {

    }
};
export const getRequest = async (url, onSuccess = () => { }, onError = () => { }, headers = {}, showLoader = true) => {
    try {
        let res = await Axios.get(url, headers);
        // console.log("[ApiManager].getRequest.res", JSON.stringify(res));

        onSuccess(res);
    } catch (error) {
        // console.log("[ApiManager].getRequest.error", error);
        onError(error);

    }
};
