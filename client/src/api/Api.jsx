import axios from "axios";

export const productsData = async()=>{
  const localHost = await axios.get( 'http://localhost:5000/products')
  // const products = await axios.get("https://fakestoreapiserver.reactbd.com/products")
  return localHost;
}



