const text = "Building a future in Cybersecurity.";

let index = 0;

function typeEffect() {

    const typingElement = document.querySelector(".typing-text");

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 70);
    }
}

window.onload = typeEffect;