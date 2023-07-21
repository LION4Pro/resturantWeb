const CartList = document.querySelector(".cart-list")
const items = document.querySelector(".items")
const menupng = document.querySelector(".menupng")
const CartTotal = document.querySelector(".cart-total")
const cart = document.querySelector(".cart")
const drinkBtn = document.querySelector(".drink")
const fastfoodBtn = document.querySelector(".fastfood")
const breakfastBtn = document.querySelector(".breakfast")
const foodItem = document.querySelectorAll(".food-item")
const foodBtn = document.querySelector('#food')
const allfoods = document.querySelector('.allfoods')
const CartForm = document.querySelector("#cart-form")

let cartItems = []

function addItem(name , price){

    const item = {

        name,
        price,
        quantity: 1
    }

    for(let i = 0 ; i < cartItems.length ; i++){

        if(cartItems[i].name === name){
            cartItems[i].quantity++
            showCart()
            return
        }
    }

    cartItems.push(item)
    showCart()
}

function removeItem(name) {

    for(let i = 0 ; i < cartItems.length ; i++){

        if(cartItems[i].name === name){
            cartItems[i].quantity--
            if(cartItems[i].quantity === 0){
                cartItems.splice(i , 1)
            }

            break
        }
    }

    showCart()
}

function showCart(){

    cart.style.display = "block"
    CartList.innerHTML = ""
    let total = 0

    const cartItemsInput = document.createElement("input")
    cartItemsInput.type = "hidden"
    cartItemsInput.name = "food"
    CartForm.appendChild(cartItemsInput)

    for(let i = 0 ; i < cartItems.length ; i++){

        const item = cartItems[i]
        const itemPrice = item.price * item.quantity
        total += itemPrice

        const cartItem = document.createElement("input")
        const closeItem = document.createElement("img")
        closeItem.src = "image/close.png"
        closeItem.classList.add("removeItem")
        closeItem.addEventListener("click", function(){

            removeItem(item.name)
        })

        cartItem.value = `${item.quantity} x ${item.name} - ${item.price}$`
        cartItem.name = "food"
        CartList.appendChild(closeItem)
        CartList.appendChild(cartItem)

        cartItemsInput.value += `${item.quantity} x ${item.name} - ${item.price}`
    }

    CartTotal.value = `${total}$`
}

const addToCartButtons = document.querySelectorAll(".add-to-cart")
for(let i = 0 ; i < addToCartButtons.length ; i++){

    const button = addToCartButtons[i]
    const name = button.getAttribute("data-name")
    const price = parseInt(button.getAttribute("data-price"))
    button.addEventListener("click", function(){

        addItem(name , price)
    })
}

const headerH1 = document.querySelector("h1")
window.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop > 10){

        headerH1.style.fontSize = "2em"
        headerH1.style.transition = "0.4s"
    }

    else {

        headerH1.style.fontSize = "3em"
    }
})

menupng.addEventListener("click", function(){

    if(items.style.display == "none"){

        items.style.display = "block"
        menupng.src = "image/closemenu.png"
    }

    else {

        items.style.display = "none"
        menupng.src = "image/menu.png"
    }
})

fastfoodBtn.addEventListener("click", function(){

    foodItem.forEach(item => {

        if(item.classList.contains('fastfood')){

            item.style.display = "block"
        }

        else {

            item.style.display = "none"
        }
    })
})

drinkBtn.addEventListener("click", function(){

    foodItem.forEach(item => {

        if(item.classList.contains('drink')){

            item.style.display = "block"
        }

        else {

            item.style.display = "none"
        }
    })
})

foodBtn.addEventListener("click", function(){

    foodItem.forEach(item => {

        if(item.classList.contains('food')){

            item.style.display = "block"
        }

        else {

            item.style.display = "none"
        }
    })
})

breakfastBtn.addEventListener("click", function(){

    foodItem.forEach(item => {

        if(item.classList.contains('breakfast')){

            item.style.display = "block"
        }

        else {

            item.style.display = "none"
        }
    })
})

allfoods.addEventListener("click", function(){

    foodItem.forEach(item => {

        if(item.classList.contains('food-item')){

            item.style.display = "block"
        }

        else {

            item.style.display = "none"
        }
    })
})

document.addEventListener("DOMContentLoaded", function(){

    const found = document.querySelector(".notFound")
    const myInput = document.querySelector("#myInput")
    myInput.addEventListener("keyup", function(){
        const value = this.value.toLowerCase()
        const foods = document.querySelectorAll(".food")
        foods.forEach(function(food){
           const foodText = food.textContent.toLowerCase()
           if(foodText.indexOf(value) > -1){

            food.style.display = ""
           }

           else {

            food.style.display = "none"
           }
        })
    })
})
