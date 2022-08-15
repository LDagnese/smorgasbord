async function restaurantSelectHandler(event) {
    event.preventDefault();

    // take the id of the restaurant from the id of the restaurant-card we clicked on.
    const id = event.target.id;

    const response = await fetch(`/api/restaurant/${id}`, {
        method: "GET",
        // body: JSON.stringify({
        //     id
        // }),
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        console.log("success");
    } else {
        alert(response.statusText);
    }
}

// add functionality where when a user clicks on the page, if the item has a class of "restaurant-card",
// then it takes the id and uses that as the restaurant id to display the specific restaurant

document
    .querySelector(".restaurant-card")
    .addEventListener("click", restaurantSelectHandler);
