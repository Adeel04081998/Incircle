import Axios from 'axios';
import constants from '../res/constants';

Axios.interceptors.request.use((config) => { 
    // console.log("config=>>>>>.", config.auth);

    try {

        config.baseURL = constants.url


    } catch (error) {

    }
    finally {
        // console.log("[axios].config", config)


        return config;
    }

})
Axios.interceptors.response.use(
    async (response) => {
        // console.log("[axios].response", response)
        try {

        }
        catch (error) {
            // console.log("[axios].response.catch.error", error)
        }
        finally {
            return response
        }
    },
    async (error) => {
        try {

        } catch (error) {
            // console.log("[axios].response.error.catch.error", error)

        } finally {
            return Promise.reject(error.response ? error.response : error);
        }
    });

export default Axios