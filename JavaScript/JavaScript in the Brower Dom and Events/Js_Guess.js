// 1. 랜덤 수를 정하기
// 2. 랜덤수랑 입력값이 맞는지 확인
// 3. 확인후 조건 실행
const number = document.getElementById("number");	
const btnCheck = document.getElementById("btn check");
const randomNumber = Math.trunc(Math.random()*20) + 1;
const inputNumber = ()	=>{	return number.value; }



  	
btnCheck.onclick = function (){
	
	if(inputNumber > randomNumber){
		
	}
	else if(inputNumber < randomNumber){
		
	}
}

