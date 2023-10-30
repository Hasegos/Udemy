// 엄격모드 사용시 모든 코드들 중에 제일위에 있어야함.
// 사용시 1. 특정 작업 금지 2. 눈에 보이는 오류 만들기
'use strict'; 


 // #섹션 3번 : 32번  use strict (엄격 모드 사용)
/*
	 엄격모드 사용시 : 개발자가 의도치 않은 실수를 할수있는 환경을
	 피할수있게 해준다.
	 
	 1. 오류는 아니지만 미래에 오류가 발생할 수 있도록 변경한다.
	 2. 최적화 처리를 어렵게 만드는것을 수정한다.
	 3. 미래의 ECMAscript로 정의 될 예정 구문을 금지한다.Ex) private, if, interface
	 
	 let hasDriversLicense = false;
	 const passTest = true;

	 if(passTest)hasDriverLicense = true;
	 if(hasDriversLicense) console.log('I can drive :D');

	 const interface = 'Audio';
	 const private = 534;
	 const if = 23;
*/

//여기서 부터 작성 바람
 // #섹션 3번 : 33번 function() 함수
/*
	 함수를 사용하는 이유 : 코드 덩어리를 재사용을 위해. 여기 
	 function logger(){
		 console.log('My name is Jonas');
	 }
	 calling / running / invoking function
	 logger(23);
	 logger();
	 logger();

	   일반적인 함수 구조 
	   
	   
	함수  함수이름(매개변수o or x){
		
	   내용	 
		.
		.
		.
		.
		return ...  /    return x (반환 값 존재 여부)
	}
	 또는 내장된 함수가 있다  Ex) console.log()



	   함수      함수이름      (매개변수)
	 function fruitProcessor(apples, oranges){ 
	 
		 console.log(apples,oranges);
		 
		  매개 변수를 이용해서 juice 라는 곳에 템플릿 리터럴 사용해 저장
		 const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
		 
		 fruitProcessor 함수를 juice라는 값으로 대체한다.
		 return juice;  
	 }

	 매개변수로 숫자값인 5 와 0 을 받고 해당 리턴값을 applejuice 저장 (캡처)
	 const applejuice  = fruitProcessor(5,0);
	 
	 저장후 사용
	 console.log(applejuice);
	 or 그 반환 값 자체를 사용
	 console.log(fruitProcessor(5,0));

	 const appleOrangJuice = fruitProcessor(2,4);

	 console.log(appleOrangJuice);
	 const num = Number('23');
*/ 