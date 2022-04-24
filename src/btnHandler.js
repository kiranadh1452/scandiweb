import { fetchProductData } from "./fetchData.js";
import {checkList, emptyCheckList} from './item.js';

//Function to mass-delete selected items
const massDelete = () => {

  if(checkList.length < 1){
    // no items have been selected
    return ;
  }
  
  let deleteId = checkList.join('-');
  customApi(deleteId);
  emptyCheckList();

  let items = document.querySelectorAll('.delete-checkbox');

  //removing check marks
  for(let item of items){
    item.checked = false;
  }

}

/**
 * Function to send asynchronous request to the server for deletion of one or more products
 * @param {String} deleteId - contains IDs of items to be deleted
 */
const customApi = (deleteId) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost/custom/scandi/deletion.php', true);

  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function (){
    if(xhr.status == 200){
      fetchProductData(); // reloads the data without refreshing the page
    }
    else{
      let msg = document.getElementById('response-container');
      msg.innerText = this.responseText; 
    }
  }

  let sendingData = "idCollection="+deleteId;
  xhr.send(sendingData);
}

export {massDelete};