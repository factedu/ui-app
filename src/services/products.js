import axios from axios;

const baseUrl = "";

const getAllProducts = ()=>{
    return axios.get(baseUrl);
}

