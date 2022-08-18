async function addToCartFormHandler(event) {
    if (event.target.className.slice(0, 11) === "add-to-cart") {
        event.preventDefault();

        // perform fetch request that posts information and creates a new CartItem
        const dish_id = event.target.id; //get dish_id from the id of the item that was clicked on, event.target.id
        // take name, price - get cart_id from the class=cart, and take the cart_id from there
        const name = document.querySelector(`#name-${dish_id}`).innerText;
        console.log(name);
        const price = document
            .querySelector(`#price-${dish_id}`)
            .className.slice(6);

        const response = await fetch("/api/cart", {
            method: "post",
            body: JSON.stringify({
                dish_id,
                name,
                price,
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            console.log("success");
        } else {
            alert(response.statusText);
        }
    } else {
        return;
    }
}

document.body.addEventListener("click", addToCartFormHandler);
