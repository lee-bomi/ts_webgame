var body = document.body;
var candidate;
var array = [];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i++) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
console.log(array);
var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var wrongCount = 0;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === array.join('')) { //배열을 문자화
        result.textContent = '홈런이에요~~';
        input.value = '';
        input.focus();
        chooseNumber();
        wrongCount = 0;
    }
    else { //strike, ball,
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongCount += 1;
        if (wrongCount > 10) {
            result.textContent = '글러먹어네요, 답은 ' + array.join('') + ' 이에요';
            input.value = '';
            input.focus();
            chooseNumber();
            wrongCount = 0;
        }
        else {
            for (var i = 0; i <= 3; i++) {
                if (Number(array[i] == answerArray[i])) {
                    console.log('strike!');
                    strike += 1;
                    input.value = '';
                }
                else if (array.indexOf(Number(answerArray)) > -1) {
                    console.log('ball!');
                    ball += 1;
                    input.value = '';
                }
            }
            result.textContent = "strike=".concat(strike, ", ball=").concat(ball, "\uC785\uB2C8\uB2E4");
        }
    }
});
