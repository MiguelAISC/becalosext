const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');

const handleChange = () =>{
    lenghtCounter.textContent = inputRange.value;
}

const generatePassword = (passwordLenght) =>{
    let result = '';
    let characters = '';

    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowecase = document.querySelector('#lowercase').checked;
    const userNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;


    if(useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


    if(useLowecase) characters += 'abcdefghijklmnopqrstuvwxyz';


    if(userNumbers) characters += '0123456789';

    if(useSymbols) characters += '!@$#$%*';


    if(characters === ''){
        passwordHeading.textContent = 'Selecciona al menos una opcion';
        return '';
    }

    for( let i=0; i < passwordLenght; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    
    }
    console.log(result)
    return result;
};


const PrintPassword = (event) => {
    event.preventDefault();

    const password = generatePassword(inputRange.value);
    if(password){
        passwordHeading.textContent = password;
    }
};

inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword);