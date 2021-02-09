import axios from 'axios';

const baseUrl = "https://mockend.com/factedu/ui-app/";

export const getAllProducts = ()=>{
    return axios.get(baseUrl+'products');
}



