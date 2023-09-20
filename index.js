const numDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numDrumButton; i++) {
    const handleClick = () => {
        alert("I got clicked!");
    }
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
};

