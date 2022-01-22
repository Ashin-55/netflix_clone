import axios from 'axios'

import {baseUrl} from './Constans/Constant'


const instance = axios.create({
    baseURL: baseUrl,
 });

 export default  instance