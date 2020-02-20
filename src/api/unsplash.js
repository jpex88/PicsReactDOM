import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6d98252def516782eadd96eac313fcd160d3e7d6b6f512df71e61420fb59442a'
    }
});