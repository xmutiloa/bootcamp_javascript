import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getProperty = id => Axios.get(`${url}/${id}`).then(({ data }) => data);

const urlEquipments = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments= id => Axios.get(urlEquipments).then(({ data }) => data);

const urlContact = `${process.env.BASE_API_URL}/contact`;

export const insertContact = contact => Axios.post(urlContact, contact).then(response => {
    return response.data;
})