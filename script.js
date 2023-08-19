const input = document.querySelector('input');
const result = document.querySelector('span');

const letterCounter  = () => {
    const inputValue = input.value;
    let count = 0;

    for(let i = 0; i < inputValue.length; i++){
        count += 1;
    }
    result.textContent = count;
}

input.addEventListener('keyup', letterCounter);