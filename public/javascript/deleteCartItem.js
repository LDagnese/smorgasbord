async function deleteFromCartHandler(event) {
    event.preventDefault();
    if (event.target.className === "delete") {
        const id = event.target.id;
        console.log(id);
        const response = await fetch(`/api/cart/delete/${id}`, {
            method: "delete",
            // body: JSON.stringify({
            //     id
            // }),
            // headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            console.log("success");
            // document.location.replace("/api/cart");
        } else {
            alert(response.statusText);
        }

        console.log("it got here");
        const replaceCart = await fetch("/api/cart", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        if (replaceCart.ok) {
            console.log("success");
            document.location.replace("/api/cart");
        } else {
            alert(replaceCart.statusText);
        }
    }
}

document.body.addEventListener("click", deleteFromCartHandler);
