import data from "./data.js";

let table = document.querySelector("#table");
let cart = localStorage.getItem("cart");
let totalprice = 0;
cart = JSON.parse(cart);
cart.forEach((item) => {
  table.innerHTML += ` <tr>
        <td class="td_img"><img src="${item.image_url}"></td>
        <td class="td_name">${item.name}</td>
        <td class="td_stock">1</td>
        <td class="td_price">${item.price.VND} VND</td>
    </tr>
      `;
  totalprice += item.price.VND;
});
table.innerHTML += `<tr class="totalprice"> 
    <td colspan="3"> Tổng tiền: </td> <td> ${totalprice} VND</td>
</tr>`;



const button = document.querySelector('input');
const paragraph = document.querySelector('.buy-btn-p');

button.addEventListener('click', updateButton);
function updateButton() {
  if (button.value === 'Thanh toán') {
    alert('Thanh toán thành công')
    button.value = 'Đã thanh toán!'
    paragraph.textContent = 'Bạn đã thanh toán thành công'
  }

}

