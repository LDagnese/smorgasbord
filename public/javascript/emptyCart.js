async function emptyCartNow(event) {
    event.preventDefault();

    const response = await fetch("/api/cart/empty", {
        method: "delete",
        // body: JSON.stringify({
        //     id
        // }),
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        console.log("success");
        window.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector("#order-now").addEventListener("click", emptyCartNow);
