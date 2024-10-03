    <style>
        .cart-item{
            border-bottom: 1px solid#dee2e6;
            padding:  10px 0;
        }
        .cart-item-child {
            border-bottom: none;
        }
        .cart-header,.cart-item{
            display:flex;
            align-items: center;
        }
        .cart-header>div,.cart-item>div{
            flex:1;
            text-align: center;
        }
        .cart-header{
            font-weight: bold;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
        }
    </style>


<script>let totalAmount=0;
function addToCart(product,price){
    const cartItems = document.getElementById('cartItem');
    const existingItem = cartItems.querySelector('.cart-item[data-product=${product}]');
    const priceFloat = parseFloat(price)ว
    if(existingItem){
        const quantityinput = existingItem.querySelector('.quantity-input');
        const quantity =parselInt(quantityinput.value)+1;
        quantityinput.value = quantity;
        const Subtotal =priceFloat* quantity;
        existingItem.querySelector('.subtotal').textContent = '$${subtotal.toFixed(2)}';
    }
}
document.querySelectorAll('.add-to-cart').forEach(button)=>{
    button.addEventListener('click,function()'{
        const product = this.getAttribute('data-product');
        const price= this.getAttribute('data-price');
        addToCart(product,price);
        const productModal=bootstrap.Modal.getinstance(document.getElementById('productModal'));
        productModal.hide();
    });
});

</script>