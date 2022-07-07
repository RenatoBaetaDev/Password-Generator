const form = document.getElementById('form');
let inputs = [...document.getElementsByClassName("input")];
const rules = {
    'uppercaseLetters': 'ABCDEFGHIJKLMNOPQRSTUVZXW',
    'lowercaseLetters': 'abcdefghijklmnopqrstuvzxw',
    'numbers': '0123456789',
    'symbols': '~!@#$%^&*()_-+={[}]|\:;<,>.?/'
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function getRandomCharacter(string)
{
    return string.charAt(Math.floor(Math.random() * string.length));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const passwordSize = document.getElementById('passwordSize').value;
    let password = "";

    if (passwordSize == ''  || passwordSize <= 0) return;

    let passwordAlphabet = "";

    inputs = shuffle(inputs);

    for (let currentIndex = 0; currentIndex < inputs.length; currentIndex++) {
        if (password.length >= passwordSize) break;

        const input = inputs[currentIndex];
        if (!input.checked) continue;

        passwordAlphabet = passwordAlphabet.concat(rules[input.name]);

        password = password.concat(getRandomCharacter(rules[input.name]));

    }


    for (let index = 0; index < passwordSize - password.length; index++)
    {
        password = password.concat(getRandomCharacter(passwordAlphabet));
    }

    passwordInput = document.getElementById('password');
    passwordInput.value = password;
    // passwordInput.style.color = 'red';
    // console.log('password strength', zxcvbn(password));


})