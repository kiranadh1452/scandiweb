import { fetchProductData } from "./fetchData.js";
import { massDelete } from "./btnHandler.js";

fetchProductData();

// Mass delete button handling
const massDelBtn = document.getElementById('mass-del');
massDelBtn.onclick = massDelete;
