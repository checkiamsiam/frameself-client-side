import axios from "axios";

const reqToServer = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  // headers: {'Authorization': 'foobar'}
});


export default reqToServer