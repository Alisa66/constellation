
import axios from "axios";
import { JUHE_KEY} from '../config'
function axiosGet(options){
    // console.log(JUHE_KEY);
    axios(options.url+'&key='+JUHE_KEY)
       .then((res)=>{
           options.success(res)
       })
       .catch((err)=>{
           options.error(err)
       })

}

export { axiosGet }