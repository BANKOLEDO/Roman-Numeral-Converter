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