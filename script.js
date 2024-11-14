// Write your JavaScipt code below this line.

const mainTitle = document.getElementById("main-title");
mainTitle.textContent = "Welcome to Our Cat Adoption Center";

const description = document.getElementById("description");
description.textContent = "Find your purrfect companion!";

const cat1Button = document
  .getElementById("cat-1-button")
  .addEventListener("click", () => {
    const whisk = document.getElementById("cat-1");
    alert("You've adopted your new Friend!!!");
    whisk.remove();
  });

  const cat2Button = document
  .getElementById("cat-2-button")
  .addEventListener("click", () => {
    const daisy = document.getElementById("cat-2");
    alert("You've adopted your new Friend!!!");
    daisy.remove();
  });

  const cat3Button = document
  .getElementById("cat-3-button")
  .addEventListener("click", () => {
    const terry = document.getElementById("cat-3");
    alert("You've adopted your new Friend!!!");
    terry.remove();
  });

