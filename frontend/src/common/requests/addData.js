import axios from "axios";

const addData = async (body) => {
    try {
        const response = await axios.post('http://localhost:8000/create', body, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch(err) {
        console.log('Une erreur est survenue : ', err)
    }
}

export default addData;