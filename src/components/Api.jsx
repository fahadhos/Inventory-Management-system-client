import axios from 'axios';
 
const Api = () => {

    const http = axios.create({
        baseURL:"http://localhost:8000/api/",
        
        headers:{
            'Content-Type': 'application/json'
        }
    })
    return (
      http
    );
};

export default Api;