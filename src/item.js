//Array to keep track of check-listed items
//Stores their id
let checkList = [];

/**
 * Function to convert the fetched individual item into more representable way
 * @param {Object} item - Object containing all the properties of one product
 * @return {String,Number} -String: Combined product details, Number: Product Id
 */
const itemCreation = (item) => {
  let sku = item.sku;
  let name = item.prname;
  let price = item.price;
  let pid = item.pid;
  let type = JSON.parse(item.type);
  let myStr = "";
  myStr += sku + "\n" + name + "\n$" + price+ "\n";

  for(let key of Object.keys(type)){
    myStr += key +"\n";
    let details = type[key];
    for(let key of Object.keys(details)){
      myStr += key +" : "+ details[key];
    }
  }
  return [myStr,pid];
}

/**
 * Function to show inidividual fetched item in the main page
 * @param {Array} dataArray - String representaion of a product and it's product id
 * @param {Node} container - Node in the DOM that'll include the product
 */
const itemPresentation = (dataArray, container) => {
  let str = dataArray[0];
  let itemId = dataArray[1];
  let newDiv = document.createElement('div');
  newDiv.classList.add('item');
  newDiv.innerText = str;

  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "delete-checkbox";
  checkbox.id = itemId;
  checkbox.addEventListener('click',checkboxClicked,false);

  newDiv.appendChild(checkbox);
  container.appendChild(newDiv);
}

/**
 * Function to handle the checkbox click event
 * @param {event} e - Click event
 */
const checkboxClicked = (e) => {
  let checkbox = e.target;
  let itemId = checkbox.id;

  if (checkbox.checked == true){
    checkList.push(parseInt(itemId));
  }

  else{
    const index = checkList.indexOf(itemId);

    if(index != -1){
      checkList.splice(index,1);
    }
  }

}

//Function to clear the checklist
const emptyCheckList = () => {
  checkList = [];
}

export {itemCreation, itemPresentation, emptyCheckList, checkList};