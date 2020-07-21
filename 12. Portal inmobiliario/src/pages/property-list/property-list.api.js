import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = queryParams => Axios.get(`${url}?${queryParams}`).then(response => response.data);

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () => Axios.get(saleTypeListUrl).then(response => response.data);

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () => Axios.get(provinceListUrl).then(response => response.data);


