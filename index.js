const numDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numDrumButton; i++) {
    const handleClick = () => {
        var audio;
        if (i === 0) {
            audio = new Audio('./sounds/tom-1.mp3');
        } else if (i === 1) {
            audio = new Audio('./sounds/tom-2.mp3');
        } else if (i === 2) {
            audio = new Audio('./sounds/tom-3.mp3');
        } else if (i === 3) {
            audio = new Audio('./sounds/tom-4.mp3');
        } else if (i === 4) {
            audio = new Audio('./sounds/crash.mp3');
        } else if (i === 5) {
            audio = new Audio('./sounds/kick-bass.mp3');
        } else if (i === 6) {
            audio = new Audio('./sounds/snare.mp3');
        } 
    
        audio.play();
    }
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
};

// How to capture key code
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// });


// document.addEventListener("keypress", function(event) {
//     // Check if the pressed key's code is "KeyW"
//     if (event.code === "KeyW") {
//         // Create an Audio object and play the sound file
//         audio = new Audio('./sounds/tom-1.mp3');
//         audio.play();
//     } else if (event.code === "KeyA") {
//         // Create an Audio object and play the sound file
//         audio = new Audio('./sounds/tom-2.mp3');
//         audio.play();
//     } else if (event.code === "KeyS") {
//         // Create an Audio object and play the sound file
//         audio = new Audio('./sounds/tom-3.mp3');
//         audio.play();
//     } else if (event.code === "KeyD") {
//         // Create an Audio object and play the sound file
//         audio = new Audio('./sounds/tom-4.mp3');
//         audio.play();
//     } else if (event.code === "KeyJ") {
//         // Create an Audio object and play the sound file
//         audio = new Audio('./sounds/crash.mp3');
//         audio.play();
//     } else if (event.code === "KeyK") {
//         // Create an Audio object and play the sound file
//         audio = new Audio('./sounds/kick-bass.mp3');
//         audio.play();
//     } else if (event.code === "KeyL") {
//         // Create an Audio object and play the sound file
//         audio = new Audio('./sounds/snare.mp3');
//         audio.play();
//     }
// });



document.addEventListener("keypress", function(event) {
    // Define an object that maps key codes to sound file paths
    const keySoundMap = {
        KeyW: './sounds/tom-1.mp3',
        KeyA: './sounds/tom-2.mp3',
        KeyS: './sounds/tom-3.mp3',
        KeyD: './sounds/tom-4.mp3',
        KeyJ: './sounds/crash.mp3',
        KeyK: './sounds/kick-bass.mp3',
        KeyL: './sounds/snare.mp3',
    };

    // Check if the pressed key's code exists in the map
    if (keySoundMap.hasOwnProperty(event.code)) {
        // Create an Audio object and play the corresponding sound
        const audio = new Audio(keySoundMap[event.code]);
        audio.play();
    }
});