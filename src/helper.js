import axios from 'axios';

async function requester(url) {
    const auth = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrect=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    const authGlue = url.includes('?') ? '&' : '?';
    const response = await axios.get(`${url}${authGlue}${auth}`);
    return response.data;
};

export {requester};
