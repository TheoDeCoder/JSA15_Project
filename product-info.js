import data from "./data.js"

let container = document.querySelector(".container");
let itemid = localStorage.getItem("detail")
data.forEach(item => {
    if(itemid==item.item_id) {
        container.innerHTML = ` <div class="column column1">
        <div class="column1-img-container">
          <img
            class="product-image"
            src="${item.image_url}"
            alt="ảnh"
          />
        </div>

        <div class="buy-btn-container">
          <form action="">
            <input type="button" value="Thêm vào giỏ hàng" />
          </form>
          <p class="buy-btn-p">Bạn chưa thêm sản phẩm vào giỏ hàng!</p>
        </div>
      </div>

      <div class="column column2">
        <div class="name-container">
          <h1>${item.name}</h1>
        </div>

        <div class="p">
          <p>${item.price.VND}</p>
        </div>

        <div class="p"> 
            <p>Số lượng hàng: ${item.in_stock}</p>
        </div>

        <div class="discount-container">
          <div class="discount-title">
            <h2>Khuyến Mãi</h2>
          </div>
          <div class="discount-content-container">
            <div class="discount-content-1">
              <p>1. Giảm thêm 350.000đ qua <label>VNpay</label></p>
              <p>
                2.Bảo hành tiêu chuẩn 18 tháng + bảo hành thay thế màn hình 6
                tháng
              </p>
            </div>
            <div class="discount-content-2">
              <p>
                * <label>Hotsales cuối tháng</label>: Giảm thêm
                <label>200.000đ</label> (đã giảm vào giá bán), áp dụng cùng
                khuyến mãi VNPAY.
              </p>
              <p>
                * <label>Hotsales cuối tháng</label> chỉ áp dụng mua tại cửa
                hàng hoặc thanh toán online 100%.
              </p>
            </div>
          </div>
        </div>
      </div>`
    }
})

const button = document.querySelector('input');
const paragraph = document.querySelector('.buy-btn-p');

button.addEventListener('click', updateButton);

function updateButton() {
    if (button.value === 'Thêm vào giỏ hàng') {
        button.value = 'Đã thêm vào giỏ hàng!'
        paragraph.textContent = 'Bạn đã thêm sản phẩm nào vào giỏ hàng thành công!';
        alert('Thêm vào giỏ hàng thành công')
        if (localStorage.getItem("cart")) {

        } else {
            let newarray = [];
            newarray.push()
        }
    }
    // } else {
    //     button.value = 'Thêm vào giỏ hàng'
    //     paragraph.textContent = 'Bạn chưa thêm sản phẩm vào giỏ hàng'
    // }
}