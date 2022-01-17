import axios from 'axios';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyDq6zZeQCf2VsQqldiBtp8Y7NE2Wk_r8tM'
        // key: process.env.REACT_APP_YT_API_KEY
    }
});

export default request;