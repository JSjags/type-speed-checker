const timer = document.querySelector(".timer > p");
const inputBox = document.querySelector(".type-sample_input")
const errorsBox = document.querySelector(".errors > p")
const wpmBox = document.querySelector(".wpm > p")

const sample = document.querySelector(".type-sample")

function handleTimer() {   
    document.removeEventListener("keypress", handleTimer)

    const timerValue = setInterval(() => {
        const timerInt = parseInt(timer.textContent)

        if (parseInt(timer.textContent) === 1) {
            clearInterval(timerValue)
        }

        timer.textContent = timerInt - 1
    }, 1000);
}

function handleInput() {
    const sampleText = sample.textContent
    const inputVal = inputBox.value;
    let newText = sampleText.split("")
    let wpmVal = Math.round((inputVal.length / 5) / 1)
    let errors = 0
    let finalText

    if (inputVal.length > sampleText.length) {
        return
    }
    for (let i = 0; i < inputVal.length; i++) {
        const element = inputVal[i];

        if (element === sampleText[i]) {
            newText[i] = `<span class="correct">${element}</span>`
        } else {
            errors += 1
            if (newText[i] === " ") {
                newText[i] = `<span class="wrong-space">${sampleText[i]}</span>`
            } else {
                newText[i] = `<span class="wrong">${sampleText[i]}</span>`
            }
        }
    }
    finalText = newText.join("")
    console.log(finalText)
    sample.innerHTML = finalText
    errorsBox.textContent = errors
    wpmBox.textContent = wpmVal
}

document.addEventListener("keypress", handleTimer)
inputBox.addEventListener("input", handleInput)