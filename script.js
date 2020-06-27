const userInput = document.querySelector('#container_input')
const computedResult = document.getElementById('container_result')
userInput.addEventListener("keyup", function(ec) {
    if (ec.keyCode !== 48 && ec.keyCode !== 49 && ec.keyCode !== 13 && ec.keyCode !== 8) {
        alert('Only 0 and 1 is allowed');
    }
    computedResult.innerText = parseInt(userInput.value, 2)
})