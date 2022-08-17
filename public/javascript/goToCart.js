async function goToCartHandler(event) {
    event.preventDefault();

    // have to send the cart information to the cart page, for when you're opening it.
    const response = await fetch("/api/cart", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        console.log("success");
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".cart").addEventListener("click", goToCartHandler);
