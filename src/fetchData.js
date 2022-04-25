import { itemCreation, itemPresentation } from "./item.js";

const container = document.getElementById('body-container');

//Function to fetch the product data using fetch api
//Product data is available in a remote server 
const fetchProductData = async () => {
  container.innerText = ""; // to clear the product listing
  const response = await fetch('https://scandiweb-kiranadh.000webhostapp.com/');
  const jsonData = await response.json();
  console.log(jsonData);
  callMeNow(jsonData);
}

/**
 * Function to handle the fetched data from server
 * @param {Object} datas - Object containing all the products and their details
 */
const callMeNow = (datas) => {
  for(let data of datas){
    let currItemData = itemCreation(data);
    itemPresentation(currItemData, container);
  }
}

export {fetchProductData};