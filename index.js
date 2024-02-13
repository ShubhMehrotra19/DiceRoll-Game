const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];
const button = document.getElementById("button");
const subText = document.getElementById("sub-text");

alert("click the button for the dices to roll");

button.onclick = function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const imageName1 = "Dice" + randomNumber1 + ".png";
    const imageSource1 = "images/" + imageName1;
    image1.setAttribute("src", imageSource1);

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const imageName2 = "Dice" + randomNumber2 + ".png";
    const imageSource2 = "images/" + imageName2;
    image2.setAttribute("src", imageSource2);

    if (randomNumber1 > randomNumber2) {
        subText.innerText = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        subText.innerText = "Player 2 wins!";
    } else {
        subText.innerText = "Players draw!";
    }
};
