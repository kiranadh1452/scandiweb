import {isValidPosNum, isValidText} from './utils.js';

// Object containing product descriptors
let typeObj = {
  "DVD":[["Size","MB"]],
  "Book":[["Weight","Kg"]],
  "Furniture":[["Height","cm"],["Width","cm"],["Length","cm"]]
};

//Function to clear all fields of the Add product form
const clearForm = () => {
  const fieldNodes = document.querySelectorAll('#product_form .validate-required');

  for(let node of fieldNodes){
    node.value = '';
  }

  document.getElementById('productType').selectedIndex = -1;
}

/**
 * Function to dynamically update the form based on type of product choosed
 * @param {String} myOpt - Type of product (DVD, Book, Furniture)
 */
const loadTypeForm = (myOpt) => {
  const parentDiv = document.getElementById('type-form');
  parentDiv.innerHTML = ``;

  for(let el of myOpt){
    const heading = el[0];

    const title = document.createElement('p');
    title.innerText = `\n${heading} (${el[1]}) `;
    title.className = `type-title`;
    
    const ipField = document.createElement('input');
    ipField.id = heading.toLowerCase();
    ipField.type = 'number';
    ipField.className =`validate-required type-attribute`;

    parentDiv.appendChild(title);
    parentDiv.appendChild(ipField);
  }
}

/**
 * Function to validate whether the data filled up in the form is acceptable or not
 * @return {[boolean,string]} true | false : is form valid , message 
 */
const isFormValid = () => {

  const validationRequiredNodes = document.querySelectorAll('.validate-required');
  for(let node of validationRequiredNodes){

    let valid = false;

    if(node.type == "text"){
      valid = isValidText(node.value);
      if(!valid) return [false,'Please, submit required data'];
    }

    if(node.type == "number"){
      if(Number.isNaN(node.valueAsNumber)) return [false,'Please, submit required data'];

      valid = isValidPosNum(node.valueAsNumber);

      if(!valid) return [false,'Please, provide the data of indicated type'];

    }
  }

  if(document.getElementById('productType').selectedIndex < 0){
    return [false, 'Select a type for the product first'];
  }

  return [true,"Correct Data"];

}

// Function to inititate the product creation
const saveForm = () => {
  const response = isFormValid();

  if(! response[0]){
    showUpdateOnPage(response[1]);
   
    return ;
  }
  const newProductData = stringifyProductData();
  ajaxCall(newProductData);
}

/**
 * Function to display the information regarding product addition in main page
 */
const showUpdateOnPage = (message) => {
  const responseContainer = document.getElementById("response-container");
  responseContainer.innerHTML = message;
}

/**
 * Function to convert the collected form data for a product into a string
 * @return {String} product information
 */
const stringifyProductData = () => {
  const sku = document.getElementById('sku').value;
  const name = document.getElementById('name').value;
  const type = document.getElementById('productType').value;
  const price = document.getElementById('price').valueAsNumber;

  const inputNodes = document.querySelectorAll('.type-attribute');
  
  const typeAttributeArray = [];

  for(let node of inputNodes){
    typeAttributeArray.push(node.valueAsNumber);
  }

  const finalArray = [sku,name,price,type,typeAttributeArray];
  const newProductDataAsString = finalArray.join('***');

  return newProductDataAsString;
}

/**
 * Function to make a AJAX call to remote server for product storage
 */
const ajaxCall = (data) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://scandiweb-kiranadh.000webhostapp.com/addProduct.php', true);

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function (){
    if(xhr.status == 200){
      showUpdateOnPage('Sucessfully added new product');
      // console.log(this.responseText);
      window.location.replace("../index.html");
    }
    else{
      showUpdateOnPage(`Couldn't complete your request at the moment`);
    }
  }
  let sendingData = "newProduct="+data;
  xhr.send(sendingData);
  clearForm();
}

export {typeObj, loadTypeForm, saveForm, clearForm};
