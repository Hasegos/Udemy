// 엄격모드 사용시 모든 코드들 중에 제일위에 있어야함.
// 사용시 1. 특정 작업 금지 2. 눈에 보이는 오류 만들기
'use strict'; 

 // 코딩 연습

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

   // #섹션 3번 : 33번 function() 함수
   /*
	함수를 사용하는 이유 : 같은 작업을 여러 곳에 반복할때, 함수를 만들어
	필요할떄마다 사용하기 편하다.
	추가로 1.가독성) 이름만 보고 어떤기능인지 알 수 있다 2. 모듈화) 유지보수나 버그 발생시 편함.
	
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

   // #섹션 3 : 34번 function Declarations(함수 선언) vs function  Expressions(함수 식)
   /* 
	        함수는 그저 값이다.

	         선언식 vs 표현식 
	 
	 선언식 : 호출이 가능하다. 표현식 : 불가능하다.
	
	function Declarations (함수 선언식) -> 함수 선언
	const age1 = calcAge1(1991);

	function calcAge1(birthYear){	 ;
	 return 2037 - birthYear;
	}

	function Expressions (함수 표현식) -> 함수 식	
	
         Anonymous function (익명 함수)

                    ↓        
        function(매개변수){
	          .
	          .
              .	
	    return 값  o   or 값 x
	    }



	const  calcAge2 = function(birthYear) {
	 return 2037 - birthYear;
	}
	const age2 = calcAge2(1991);
	console.log(age1,age2);
   */

   // #섹션 3 : 35번 Arrow Function(화살표 함수)
   /* 

         Arrow function  
              ↓
	  
  매개변수 / (매개변수, 매개변수) => 반환 값   /  코드가 있을 경우 { 내용   return 값}
	
            방식 1
 const calcAge3 = brithYear => 2037 - brithYear;
 const age3 = calcAge3(1991);
 console.log(age3); 
 
 
             방식 2
 const yearsUntilRetirement = birthYear => {
 const age = 2037 - birthYear;
 const retirement = 65 - age;
 return retirement;
 }
 
 console.log(yearsUntilRetirement(1991));

 
             방식 3
 const yearsUntilRetirement = (birthYear , firstName) => {
	 const age = 2037 - birthYear;
	 const retirement = 65 - age;
	 return `${firstName} retires in ${retirement} years`;
 }
 
 console.log(yearsUntilRetirement(1991, 'Jonas'));
 console.log(yearsUntilRetirement(1980, 'Bob'));
 
   */

   // #섹션 3 : 36번 함수(함수 호출)
   /*

    함수안에 여러 함수를 호출 할수있고, 빈번하게 일어난다.
    
	쓰는 이유 : 만약 함수로 따로 기능을 안만들었으면 전체르 바꿔야하는 대참사가 일어날수있기 떄문이다.

	function cutFruitPieces(fruit) {
	 return fruit * 3;
	}

	function fruitProcessor(apples, oranges){	 
	 const applePieces = cutFruitPieces(apples);
	 const orangePieces = cutFruitPieces(oranges);
	 const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;	 
	 return juice;  
	}
	console.log(fruitProcessor(2,3));
   */

   // #섹션 3 : 37번 함수 내용 정리
   /*
    1. 함수를 쓰는 방법 (1. 함수 선언  2. 함수 식  3. 화살표 함수)
	2. 매개변수 의미 -> 입력받은 값을 이름을 대체할 뿐
	3. 매개변수에 따른 함수 호출 -> 매개변수 개수 / 타입에 맞는 함수를 호출
	4. 함수 안에 함수를 호출 할수있다. ->  function 이름(매개변수){ function 이름(매개변수){}} 
	   이유 : 기능을 따로만들어서 사용하기위해
    5. return -> 사용시 그 함수를 값으로 반환 후 종료 or 그냥 종료


	const calcAge = function (birthYear) {
	 return 2037 - birthYear;
	}

	const yearsUntilRetirement = function (birthYear , firstName)  {
	  const age = calcAge(birthYear);
	  const retirement = 65 - age;	 

	  if(retirement > 0){
	  console.log(`${firstName} retires in ${retirement} years`);	 
	  return retirement;
	  }
	  
	  else{
	  console.log(`${firstName} has already retired`);
	  return -1;   
	  } 
	  
	  
	 return retirement;
	}
	console.log(yearsUntilRetirement(1991,'Jonas'));
	console.log(yearsUntilRetirement(1950,'Mike'));
   */




 // 코딩 챌린지


 // No.1 Challenge
// 실수 한부분 : 예제 점수 제대로 안넣음 , 승리조건 충족 안봄

 const calcAverage = (num1,num2,num3) => (num1 + num2 + num3) / 3;
 
 const scoreDolphins = calcAverage(44,23,71);
 const scoreKoalas = calcAverage(65,54,49);
 
 	   
 function checkWinner(avgDolphins,avgKoalas ){	 
	if(avgDolphins >= avgKoalas * 2){
	  return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	}
	else if(avgDolphins * 2 <= avgKoalas) {
	  return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	}
	else{
      return console.log(`No team wins...`);		
	}
 }
 checkWinner(scoreDolphins,scoreKoalas);
	   