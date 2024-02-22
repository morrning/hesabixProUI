//axios
import axios from "axios";
//hesabx configs
import config from "../hesabix.conf"

//configure axios
axios.defaults.headers.common['X-AUTH-TOKEN'] = localStorage.getItem('X-AUTH-TOKEN');
axios.defaults.baseURL = config.apiUrl;
export default (axios)
