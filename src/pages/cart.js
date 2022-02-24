import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import Header from "../components/header";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return `
        ${Header.render()}
            <table border-spacing: 5px; style="width: 100%";>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    ${cart.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td data-id="${item.price}">${item.price}</td>
                            <td>
                                <input type="number" value="${item.quantity}" class="border border-gray-500"/>
                                <button data-id="${item.id}" class="bg-green-500 text-white btn btn-increase mr-2 px-2">Thêm</button>
                                <button data-id="${item.id}" class="bg-orange-500 text-white btn btn-decrease mr-2 px-2">Giảm</button>
                            </td>
                            <td>
                            <button data-id="${item.id}" class="bg-red-500 text-white btn btn-remove mr-2 px-2"> <img src="https://khanhnguyen.vn/wp-content/uploads/2019/11/remove.png" alt="" width=45px height="45px">  </button>
                            </td>
                        </tr>
                    `).join("")}
                    
                </tbody>
   
            <br>
            <br>
            <br>
            <br>
            <br>



            
        `
    },
    afterRender() {
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                if (btn.classList.contains('btn-increase')) {
                    increaseQuantity(id, () => reRender(CartPage, "#app"))
                } else if (btn.classList.contains('btn-decrease')) {
                    decreaseQuantity(id, () => reRender(CartPage, "#app"))
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Bạn đã xóa sản phẩm thành công");
                    })
                }
            })
        })
    }
}
export default CartPage;