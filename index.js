// const keySoundMap = {
//     KeyW: {
//         sound: './sounds/tom-1.mp3',
//         className: 'w',
//     },
//     KeyA: {
//         sound: './sounds/tom-2.mp3',
//         className: 'a',
//     },
//     KeyS: {
//         sound: './sounds/tom-3.mp3',
//         className: 's',
//     },
//     KeyD: {
//         sound: './sounds/tom-4.mp3',
//         className: 'd',
//     },
//     KeyJ: {
//         sound: './sounds/crash.mp3',
//         className: 'j',
//     },
//     KeyK: {
//         sound: './sounds/kick-bass.mp3',
//         className: 'k',
//     },
//     KeyL: {
//         sound: './sounds/snare.mp3',
//         className: 'l',
//     },
// };

// const numDrumButtons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         var audio;
//         switch (i) {
//             case 0:
//                 audio = new Audio('./sounds/tom-1.mp3');
//                 break;
//             case 1:
//                 audio = new Audio('./sounds/tom-2.mp3');
//                 break;
//             case 2:
//                 audio = new Audio('./sounds/tom-3.mp3');
//                 break;
//             case 3:
//                 audio = new Audio('./sounds/tom-4.mp3');
//                 break;
//             case 4:
//                 audio = new Audio('./sounds/crash.mp3');
//                 break;
//             case 5:
//                 audio = new Audio('./sounds/kick-bass.mp3');
//                 break;
//             case 6:
//                 audio = new Audio('./sounds/snare.mp3');
//                 break;
//             default:
//                 audio = new Audio('');
//                 break;
//         }
//         audio.play();
//     });
// };



// // Define the buttonAnimation function
// function buttonAnimation(currentKey) {
//     var activeButtons = document.querySelectorAll("." + currentKey);

//     // Check if any elements were found
//     if (activeButtons.length > 0) {
//         // Add the "pressed" class to each found element
//         activeButtons.forEach(function(activeButton) {
//             activeButton.classList.add("pressed");

//             // Remove the "pressed" class after a delay
//             setTimeout(function() {
//                 activeButton.classList.remove("pressed");
//             }, 100);
//         });
//     }
// }

// // Function to play audio based on key or button click
// function playAudio(soundPath) {
//     var audio = new Audio(soundPath);
//     audio.play();
// }

// // Add event listeners to drum buttons
// const drumButtons = document.querySelectorAll(".drum");

// drumButtons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         var buttonKey = this.textContent;
//         var soundPath = keySoundMap.buttonKey;
//         playAudio(soundPath);
//         buttonAnimation(buttonKey);
//     });
// });



// document.addEventListener("keypress", function(event) {

//     if (keySoundMap.hasOwnProperty(event.code)) {
//         var soundPath = keySoundMap[event.code].sound;
//         var className = keySoundMap[event.code].className;
//         playAudio(soundPath);

//         buttonAnimation(className);
//     }
// });


// AFTER REWORK

const keySoundMap = {
    KeyW: {
        sound: './sounds/tom-1.mp3',
        className: 'w',
    },
    KeyA: {
        sound: './sounds/tom-2.mp3',
        className: 'a',
    },
    KeyS: {
        sound: './sounds/tom-3.mp3',
        className: 's',
    },
    KeyD: {
        sound: './sounds/tom-4.mp3',
        className: 'd',
    },
    KeyJ: {
        sound: './sounds/crash.mp3',
        className: 'j',
    },
    KeyK: {
        sound: './sounds/kick-bass.mp3',
        className: 'k',
    },
    KeyL: {
        sound: './sounds/snare.mp3',
        className: 'l',
    },
};

// Function to create audio elements and play sounds
function playSound(soundPath) {
    const audio = new Audio(soundPath);
    audio.play();
}

// Function to handle button animations
function animateButton(currentKey) {
    const activeButtons = document.querySelectorAll("." + currentKey);
    activeButtons.forEach((activeButton) => {
        activeButton.classList.add("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    });
}

// Add event listeners to drum buttons
const drumButtons = document.querySelectorAll(".drum");
drumButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const buttonKey = this.textContent;
        const soundPath = keySoundMap["Key" + buttonKey.toUpperCase()].sound;
        playSound(soundPath);
        animateButton(buttonKey);
    });
});

// Add event listener for key presses
document.addEventListener("keydown", function(event) {
    const soundPath = keySoundMap[event.code]?.sound;
    if (soundPath) {
        const className = keySoundMap[event.code]?.className;
        playSound(soundPath);
        animateButton(className);
    }
});
