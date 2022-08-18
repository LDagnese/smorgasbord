async function deleteFromCartHandler(event) {
    event.preventDefault();
    if (event.target.className === "delete") {
        const id = event.target.id;

        const response = await fetch(`/api/cart/delete/${id}`, {
            method: "delete",
            // body: JSON.stringify({
            //     id
            // }),
            // headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            console.log("success");
            window.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.body.addEventListener("click", deleteFromCartHandler);
