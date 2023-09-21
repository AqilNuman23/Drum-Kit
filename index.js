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

