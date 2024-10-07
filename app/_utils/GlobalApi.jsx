const{default:axios}=require('axios');

const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_URL;
const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
})

const searchCategory=()=>axiosClient.get('/categories?populate=*');
const getDoctor=()=>axiosClient.get('/doctors?populate=*');
const getDoctorByCategory=(category)=>axiosClient.get('/doctors?filters[categories][Name][$in]='+category+"&populate=*"); 

// const getDoctorBYCategory=(category)=>axiosClient.get(`/doctors?filters[categories][Name][$in]='+category+"&populate=*"`);
export default {
    searchCategory,
    getDoctor,
    getDoctorByCategory
}