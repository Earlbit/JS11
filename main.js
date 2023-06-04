let descriptionParagraph = document.getElementById("description");

let showButton = document.querySelector("#showButton");

showButton.onclick = function() {
    descriptionParagraph.textContent = "This is the product description.";
};
