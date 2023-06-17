import axios from "axios";
export const host = "http://localhost:5000";
export const productsData = async()=>{
  //const products = await axios.get("https://fakestoreapiserver.reactbd.com/products")
  const products = await axios.get("http://localhost:5000/products")
  return products;
}



