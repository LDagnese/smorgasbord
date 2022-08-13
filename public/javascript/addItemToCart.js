async function addToCartFormHandler(event){
    event.preventDefault();

    // find the id of the cart where property "complete"=false
    // for userId that we get from session?


    // perform fetch request that posts information and creates a new CartItem

}

document.querySelector(".add-to-cart").addEventListener("submit",addToCartFormHandler);