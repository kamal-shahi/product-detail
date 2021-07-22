import axios from "axios";

const p_url = 'http://139.59.53.101/api/products/products/60f910548965be0019aef388';
async function fetchSingleProduct(){
    try{
        const { data } = await axios.get(p_url);
        return { data }
    }catch(e){
        return { error: e.toString() }
    }
}

export {
    fetchSingleProduct
}