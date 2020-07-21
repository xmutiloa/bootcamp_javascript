import Axios from 'axios';

const urlSaleTypeList = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () => Axios.get(urlSaleTypeList).then(response => response.data);

const urlEquipmentsList = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () => Axios.get(urlEquipmentsList).then(response => response.data);

const urlProvincesList = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () => Axios.get(urlProvincesList).then(response => response.data);

const urlAddProperty = `${process.env.BASE_API_URL}/properties`;

export const insertProperty = property => Axios.post(urlAddProperty, property).then(({data}) => data);