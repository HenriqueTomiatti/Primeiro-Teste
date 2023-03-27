let currentNumberWrapper = document.getElementById("currentNumber");
let count = 0;

function increment() {
    if (count <= 14) {
        count++;
        currentNumberWrapper.innerHTML = count;
    }

    if (count >= 0){
        currentNumberWrapper.classList.remove("negative");
    }
}

function decrement() {
    if (count > -10) {
        count--;
        currentNumberWrapper.innerHTML = count;
    } 

    if (count < 0){
        currentNumberWrapper.classList.add("negative");
    }
}

