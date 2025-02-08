const text =
    "Dear LOVE, \n\nMy feelings for you run so deep, and I promise to be yours forever. \nOn this Propose Day, I ask you to let me know if you accept my heartfelt proposal. \nYou mean the world to me, and I miss you every single moment. \n\nI will love you forever ❤️ .....................";

const paragraph = text.split("");
let i = 0;

// Use the latest uploaded audio file
const music = new Audio("Ishq Wala Love - Student Of The Year 320 Kbps.mp3");
music.loop = true; // Ensure music plays continuously
music.volume = 1.0; // Set volume to full

function dashOut(arr) {
    if (i < arr.length) {
        document.querySelector(".textCont").textContent += arr[i];
        i++;
        setTimeout(function () {
            dashOut(arr);
        }, interval(arr[i]));
    }
}

function interval(letter) {
    if (letter === ";" || letter === "." || letter === ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}

function openEnvelope() {
    const envelope = document.querySelector(".envelope");
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");

    flap.style.transform = "rotateX(180deg)"; // Open the envelope smoothly
    setTimeout(() => {
        envelope.style.transform = "scale(0.5)"; // Shrink before hiding
    }, 300);
    setTimeout(() => {
        envelope.style.display = "none"; // Hide the envelope
        letter.style.display = "block"; // Show the letter

        // 🔥 Start the new music (ensuring user interaction)
        music.play().catch(error => {
            console.error("Playback error:", error);
        });

        dashOut(paragraph); // Start the typewriter effect
    }, 1000);
}


