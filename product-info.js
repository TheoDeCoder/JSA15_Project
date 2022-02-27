console.log('hello')
const button = document.querySelector('input');
const paragraph = document.querySelector('.buy-btn-p');

button.addEventListener('click', updateButton);

function updateButton() {
    if (button.value === 'Thêm vào giỏ hàng') {
        button.value = 'Đã thêm vào giỏ hàng!'
        paragraph.textContent = 'Bạn đã thêm sản phẩm nào vào giỏ hàng thành công!';
        alert('Thêm vào giỏ hàng thành công')
    }
    // } else {
    //     button.value = 'Thêm vào giỏ hàng'
    //     paragraph.textContent = 'Bạn chưa thêm sản phẩm vào giỏ hàng'
    // }
}