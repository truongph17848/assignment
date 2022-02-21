let cart = [];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
}

export const addToCart = (newProduct, next) => {
    const existProduct = cart.find(item => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct)
    } else {
        existProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    next();
}
export const increaseQuantity = (id, next) => {
    cart.find(item => item.id === (Number(id))).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}
export const decreaseQuantity = (id, next) => {
    const currentProduct = cart.find(item => item.id === Number(id));
    currentProduct.quantity--;

    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Ban có chắc chắn muốn xóa không?");
        if (confirm) {
            cart = cart.filter(item => item.id !== Number(id));
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next()
}
export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Ban có chắc chắn muốn xóa không?");
    if (confirm) {
        cart = cart.filter(item => item.id !== Number(id));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next()
}