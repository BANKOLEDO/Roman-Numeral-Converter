# Roman Numeral Converter

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [What I Learned](#what-i-learned)

## Introduction
The Roman Numeral Converter is a web application that allows users to convert decimal numbers (from 1 to 3999) into Roman numerals. This project demonstrates the use of HTML, CSS, and JavaScript to create a simple, interactive tool.

## Features
- Convert decimal numbers to Roman numerals
- Simple and intuitive user interface
- Validation for input numbers (1-3999)
- Responsive design for various screen sizes

## Screenshots

Desktop View

![](./images/Macbook-Air-127.0.0.1%20(2).png)

Mobile View

![](./images/iPhone-13-PRO-127.0.0.1%20(1).png)

## Technologies Used
- HTML
- CSS
- JavaScript

## What I Learned

### HTML Form Handling
I learned how to create a simple form to take user input and handle form submission using JavaScript.
```html
<form action="">
    <div class="input">
        <label for="number" class="label">Enter a Number:</label>
        <input type="number" name="number" id="number">
    </div>
    <button id="convert-btn">Convert</button>
</form>
```

### JavaScript Event Handling
I learned how to handle button clicks and prevent default form submission behavior to manage the application logic.
```javascript
document.getElementById('convert-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const numberInput = document.getElementById('number').value;
    const output = document.getElementById('output');
    const outputContainer = document.getElementById('output-container')
    const number = parseInt(numberInput, 10);

    if (isNaN(numberInput) || numberInput === "") {
        output.innerText = "Please enter a valid number";
        outputContainer.style.backgroundColor = "red"
        output.style.color = "black"
        return;
    } else if (number < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        outputContainer.style.backgroundColor = "red"
        output.style.color = "black"
        return;
    } else if (number >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        outputContainer.style.backgroundColor = "red"
        output.style.color = "black"
        return;
    } else {
        output.innerText = convertToRoman(number);
        outputContainer.style.backgroundColor = "rgb(6, 78, 78)"
        output.style.color = "rgb(167, 86, 20)"
    } 
});
```

### JavaScript Logic for Conversion
I learned how to implement the logic to convert a decimal number to a Roman numeral using a lookup array and a loop.
```javascript
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let roman = '';
    for (const item of romanNumerals) {
        while (num >= item.value) {
            roman += item.numeral;
            num -= item.value;
        }
    }
    return roman;
}
```

### CSS Styling
I learned how to use CSS to style the form and output elements, including setting colors, margins, and layout properties.
```css
#input-container, #output-container{
    margin: 0.5rem 0;
    width: 20rem;
    padding: 2rem;
    background-color: rgb(6, 78, 78);
    border: 2px solid black;
}

.label {
    font-size: 2rem;
    color: rgb(167, 86, 20);
    font-weight: 900;
}

#number {
    background-color: rgba(39, 218, 158, 0.281);
    margin: 1rem 0;
    width: 13rem;
    height: 4rem;
    padding: 0 0 0 0.5rem;
    border: 2px solid black;
    color: rgb(167, 86, 20);
    font-size: 3rem;
}

#convert-btn {
    width: 13rem;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 600;
    color: rgb(167, 86, 20);
}
```
