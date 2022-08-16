async function addToCartFormHandler(event){
    event.preventDefault();

    // find the id of the cart where property "complete"=false
    // for userId that we get from session?


    // perform fetch request that posts information and creates a new CartItem
    const dish_id = //get dish_id from the id of the item that was clicked on, event.target.id
    // take name, price - get cart_id from the class=cart, and take the cart_id from there

    const response = await fetch("/api/cart", {
        method: "post",
        body: JSON.stringify({
            dish_id,
            name,
            price,
            cart_id,
        }),
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        console.log("success");
    } else {
        alert(response.statusText);
    }

}

document.querySelector(".add-to-cart").addEventListener("submit",addToCartFormHandler);