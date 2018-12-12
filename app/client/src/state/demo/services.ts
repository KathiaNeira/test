import axios from 'axios';

export const serviceDemo = {
    async getData() {
        try {
            const { data } = await axios.get('http://localhost:3000/comments');
            console.log('data', data)
            if (data.error){
                throw new Error();
            }
            return data
        } catch(e) {
            throw new Error(e.message);
        }
    }
}