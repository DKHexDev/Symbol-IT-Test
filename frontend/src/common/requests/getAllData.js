import axios from "axios";

const getAllData = async () => {
    try {
        const response = await axios.get('http://localhost:8000/all', {
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

export default getAllData;