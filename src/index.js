import { fetchProductData } from "./fetchData.js";
import { massDelete } from "./btnHandler.js";

fetchProductData();

// Mass delete button handling
const massDelBtn = document.getElementById('delete-product-btn');
massDelBtn.onclick = massDelete;
