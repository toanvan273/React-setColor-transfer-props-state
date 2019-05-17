import axios from 'axios'
import * as Config from './../constants/Config'



export default function callImageApi (endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${Config.IMAGE_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}
