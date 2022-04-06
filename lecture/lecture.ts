const {body} = document;
let candidate: number[];
let array: number[] = [];

function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (let i = 0; i < 4; i++) {
        let chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
console.log(array);

let result = document.createElement('h1');
body.append(result);
let form = document.createElement('form');
document.body.append(form);
let input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
let button = document.createElement('button');
button.textContent = '입력';
form.append(button);

let wrongCount = 0;
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let answer = input.value;
    if (answer === array.join('')) {    //배열을 문자화
        result.textContent = '홈런이에요~~';
        input.value = '';
        input.focus();
        chooseNumber();
        wrongCount = 0;
    } else {    //strike, ball,
        let answerArray = answer.split('');
        let strike = 0;
        let ball = 0;
        wrongCount+=1;
        if (wrongCount > 10) {
            result.textContent = '글러먹어네요, 답은 ' + array.join('') +' 이에요';
            input.value = '';
            input.focus();
            chooseNumber();
            wrongCount = 0;
        } else {
            for (let i = 0; i <= 3; i++) {
                if(Number(array[i] == answerArray[i])){
                    console.log('strike!');
                    strike+=1;
                    input.value = '';
                } else if(array.indexOf(Number(answerArray)) > -1){
                    console.log('ball!');
                    ball+=1;
                    input.value = '';
                }
            }
            result.textContent = `strike=${strike}, ball=${ball}입니다`
        }


    }
})