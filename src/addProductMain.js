import {typeObj, loadTypeForm, saveForm, clearForm} from './formDesign.js';

// By default, no type is selected for product-type-selector
let tagSel = document.getElementById('productType');
tagSel.selectedIndex = -1;

// Dyamically load form whenever the type is changed
tagSel.onchange = () => {
  const option = tagSel.value;
  let myOption = typeObj[option];
  loadTypeForm(myOption);
}

// Handling `Cancel` button
document.getElementById('cancel-form').onclick = () => {
  clearForm();
  window.location.assign('../index.html');
}

// Handling `Save` button
document.getElementById('save-form').onclick = saveForm;
