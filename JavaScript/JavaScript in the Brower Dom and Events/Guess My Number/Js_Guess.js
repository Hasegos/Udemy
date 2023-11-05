// 1. 랜덤 수를 정하기
// 2. 랜덤수랑 입력값이 맞는지 확인
// 3. 확인후 조건 실행
'use strict'

let randomNumber = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let highscroe = 0;


// 요소
const number = document.querySelector('.number');
const High = document.querySelector('.highscroe');
const Score = document.querySelector('.score');

// textContent vs innerText : 전자는 공백까지 포함해서 가져오고 후자는 공백을 제거해서 가져옴
const display = function (message){
	document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
	const inputNmuber = Number(document.querySelector('.guess').value);
	
	// 수가 존재하지 않는 경우
	if(!inputNmuber){
		alert('값을 입력해주세요');
	}
	else if(inputNmuber === randomNumber){
		display('Correct Number!');
		number.textContent = inputNmuber;
		if(score > highscroe){
			highscroe = score;
			High.textContent = highscroe;
		}
	}
	else if(inputNmuber !== randomNumber){
		if(score > 1){
			inputNmuber > randomNumber ? display('To high!'): display('Too low');
			score--;	
			Score.textContent = score;
		}
		else{
			Score.textContent = 0;
			display('You lose the game!');	
		}	
	}	
});



document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	highscore = 0;
	
	display('Start guessing...');
	number.textContent = '?';
	Score.textContent = score;
	High.textContent = highscore;
    document.querySelector('.guess').value = '';
});