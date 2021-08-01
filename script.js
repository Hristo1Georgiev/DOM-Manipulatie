// Get button / elements.
const seenAnimalBtns = document.querySelectorAll(".big-five-button");
const deleteFirstAnimalBtn = document.getElementById("remove-first-item-button");
const deleteAllAnimalsBtns = document.getElementById("remove-all-button");
const newSeenAnimal = document.getElementById("spotted-animals-list");

// Function to add animlas to spotted list/ create new li.
seenAnimalBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const newLi = document.createElement("li");
        newLi.classList.add = "spotted-animals-list-item";
        newSeenAnimal.appendChild(newLi);
        newLi.innerText = button.innerHTML;
    });
});

// Function to delete spotted animals from the list
const removeFirstitem = document.getElementById("remove-first-item-button");
removeFirstitem.addEventListener("click", function () {
    const newSeenAnimal = document.getElementById("spotted-animals-list");
    newSeenAnimal.firstElementChild.remove(deleteFirstAnimalBtn);
});

// Function to delete the list spotted animals from the list
const removeAll = document.getElementById("remove-all-button");
removeAll.addEventListener("click", function () {
    while (newSeenAnimal.children.length > 0) {
        newSeenAnimal.firstChild.remove(deleteAllAnimalsBtns);
    };
});
