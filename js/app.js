function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin
    }
    else {
        return getPin()
    }
}

// function generateRandom(){
//     const random = Math.round(Math.random()*10000)
//     return random
// }

document.getElementById('btn-pin').addEventListener('click', function () {
    const pin = getPin()
    const pinField = document.getElementById('input-pin-field')
    pinField.value = pin
    const pinSuccessMessage = document.getElementById('pin-success')
    const pinFailedMessage = document.getElementById('pin-failed')
    pinSuccessMessage.style.display = 'none'
    pinFailedMessage.style.display = 'none'
})

document.getElementById('btn-number').addEventListener('click', function (event) {
    const number = event.target.innerText
    console.log(number);
    const typedNumberField = document.getElementById('typed-number-field')
    const oldTypedNumber = typedNumberField.value
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = oldTypedNumber.split('')
            digits.pop()
            const remainingDigits = digits.join('')
            typedNumberField.value = remainingDigits
        }
    }
    else {
        const newTypedNumber = oldTypedNumber + number
        typedNumberField.value = newTypedNumber
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const typedNumberField = document.getElementById('typed-number-field')
    const currentTypedNumber = typedNumberField.value

    typedNumberField.value = '';

    if (isNaN(currentTypedNumber) || currentTypedNumber === '') {
        alert('Please enter a number')
        return;
    }

    const pinField = document.getElementById('input-pin-field')
    const currentPin = pinField.value

    pinField.value = '';

    const pinSuccessMessage = document.getElementById('pin-success')
    const pinFailedMessage = document.getElementById('pin-failed')



    if (currentPin === currentTypedNumber) {
        pinSuccessMessage.style.display = 'block'
        pinFailedMessage.style.display = 'none'
    }
    else {
        pinFailedMessage.style.display = 'block'
        pinSuccessMessage.style.display = 'none'
    }


})