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

   // #섹션 3 : 39번    Array(데이터 조각) 배열
   /*

	const : 가치만 불변할뿐이다.  그래서 배열안에 있는 내용을 바꿔도 문제가 없다.
	배열은 원초적인 값이 아니다. 배열 전체를 건드릴순 없다

	1. 함수 호출은 가치를 창출하기 때문에 배열안에 사용해도 무방하다.
	2. 배열의 공간 시작은 항상 0이다.
	3. 배열에 서로다른 타입이 사용 가능하다.
	4. 배열에 특정 공간 지정없이 함수의 매개변수에 넣어버리면 문자열이 되어버린다.
	5. 사용법 : 변수 =  [....] or 변수 = new Array(....)
	
	const friend1 = 'Michael';
	const friend2 = 'Steven';
	const friend3 = 'Peter';

	const friends = ['Michael','Steven','Peter'];
	console.log(friends);


	const years = new Array(1991,1984,2008,2020);

	console.log(friends[0]);
	console.log(friends[2]);


	console.log(friends.length);
	console.log(friends[friends.length - 1]);

	friends[2] = 'Jay';
	console.log(friends);
	friends = ['Bob','Alice'];

	const firstName = 'Jonas';
	const jonas =[firstName, 'Schmedtmann',2037 - 1991,'teacher',friends];
	console.log(jonas);
	console.log(jonas.length);



	const  calcAge = function(birthYear){	 
		 return 2037 - birthYear;
	}

	const years = [1990,1957,2002,2010,2018];

	const age1 =  (calcAge(years[0]));
	const age2 =  (calcAge(years[1]));
	const age3 =  (calcAge(years[years.length - 1]));
	console.log(age1, age2, age3);

	const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years.length - 1)];
	console.log(ages);
   */

   // #섹션 3 : 40번   Array function(문자열 관련 함수)
   /*
        push 함수 - 마지막 추가 / unshift 함수 - 맨앞에 추가 (요소 추가) 
        pop 함수 - 마지막 삭제   / shift 함수 - 맨앞 삭제
        indexOf 함수 - 배열 요소 위치 찾기
        includes 함수 - 포함하는지 / 안하는지 (참과 거짓)

        friends.push(...)  추가를 하는 함수를 보열줄 땐 길이를 보여줌
	    friends.pop(...)  지우는 함수를 보여줄 땐 지운 내용을 보여줌

   
	const friends = ['Michael','Steven','Peter'];

	const newLength = friends.push('Jay');

	console.log(friends);
	console.log(newLength);  추가는 길이

	friends.unshift('John');
	console.log(friends);


	friends.pop();  // 삭제는 삭제된 요소 확인
	const popperd = friends.pop();
	console.log(popperd);
	console.log(friends);

	friends.shift();
	console.log(friends);


	console.log(friends.indexOf('Steven'));
	console.log(friends.indexOf('Bob'));

	friends.push(23);
	console.log(friends.includes('Steven'));
	console.log(friends.includes('BOb'));
	console.log(friends.includes(23));

	if(friends.includes('Steven')){
		console.log('You have a friend called Peter');
	}

   */

   // #섹션 3 : 42번  객체 (key : value)
   /*
		객체 : 키(key)과 값(value)으로 구성된 프로퍼티(property)들의 집합
		property : 속성 (다른 값과 연결되어있을 때 사용)
		{ 키 : 값 } 리터럴 구문
		객체 vs 배열 : 위치로 참조하기때문에 배열에서는 순서가 중요하다 
		             반면 객체는 키 자체 주소에서 가져오기에 상관없다		
		
		const jonas = {
			fristName : 'Jonas',
			lastName : 'Schmedtmann',
			age : 2037 - 1991,
			job : 'teacher',
			friends : ['Michael','Peter', 'Steven']	
		};
   */

   // #섹션 3 : 43번 Dot vs Bracket Notation(.  과  [] 차이)
   /*
   
      .(Dot) : 1. 실제 최종 속성 이름을 말해야함.(계산된 속성 이름이 아니라.)
		       2. 속성 이름을 먼저 계산하는 경우를 제외한 경우 사용
			   3. 사용해서 실제 최종 속성 키 와 값 지정가능
	   [] : 1. 속성 이름을 먼저 계산할 때 사용	        
   
	const jonas = {
	
		fristName : 'Jonas',
		lastName : 'Schmedtmann',
		age : 2037 - 1991,
		job : 'teacher',
		friends : ['Michael','Peter', 'Steven']	
	};

	console.log(jonas);
	console.log(jonas.lastName);
	console.log(jonas['lastName']);

	const nameKey ='Name';
	
	
	console.log(jonas['frist' + nameKey]);
	console.log(jonas['last' + nameKey]);
	
	console.log(jonas.'last' + nameKey);
	
	   
     밑 예제 경우는 interestedIn 이라는 실제 속성 값이 없기에 . 사용 불가능
	 []를 사용해서 interestedIn 값으로 변환 시켜서 사용가능
	 
	const interestedIn = prompt(`What do you want to know about Jonas? 
	Choos between fristName,lastName,age,job,and friends`);    

	if(jonas[interestedIn]){
	  console.log(jonas[interestedIn]);	
	}
	else{
	  console.log(`Wrong request!  Choos between fristName,lastName,age,job,and friends`);
	}

	jonas.location = 'Portugal';
	jonas['twitter'] = '@jonasschmedtman';
	console.log(jonas);


	       Challenge  도전 과제
	   
	"Jonas has 3 friends, and his best friend is called Michael"  <- 이거와 같이  콘솔 출력

	console.log(`${jonas.fristName} has ${jonas.friends.length} friends, and his best friend is called  ${jonas.friends[0]}`);

   */

//  객체 속성에 함수를 사용할 수 있다. 다만, 식이아니라 표현으로 해야한다
//  항상 객체 자체를 참조하는 걸 주로 하자 하드 코딩하지말고
// 14분 59초
const jonas = {
	
	fristName : 'Jonas',
	lastName : 'Schmedtmann',
	brithYear : 1991,
	job : 'teacher',
	friends : ['Michael','Peter', 'Steven'],	
	hasDriversLicense: true,
	
	// calcAge: function(birthYear){
	// 	return 2037 - birthYear;
	// }
	
	// calcAge: function(){
	// 	// console.log(this);
	// 	return 2037 - this.brithYear;
	// }
	
	calcAge: function(){
		this.age = 2037 - this.brithYear;
		return this.age;
	}
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


 // 코딩 챌린지


 // No.1 Challenge (함수 사용)

/*
   주어진 문제에서 실수 한 부분들 : 승리 조건 체크 x , 입력 인수값 체크 x

	const calcAverage = (num1,num2,num3) => (num1 + num2 + num3) / 3;

	let scoreDolphins = calcAverage(44,23,71);
	let scoreKoalas = calcAverage(65,54,49);

	//  방식 1 : 함수 선언으로 문제를 풀어내기
	
	function checkWinner_1(avgDolphins,avgKoalas ){	 
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
	checkWinner_1(scoreDolphins,scoreKoalas);

	 // 방식 2 : 함수 식을 사용해서 문제를 풀어내기
	    
	const checkWinner_2 = function(avgDolphins,avgKoalas){
	 if(avgDolphins >= avgKoalas * 2){
	  console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);	 
	  }
	else if(avgDolphins >= avgKoalas * 2){
	 console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);	 
	 }
	 else {
	 console.log(`No team wins...`);	
	 }
	}

	 checkWinner_2(scoreDolphins,scoreKoalas);


	scoreDolphins = calcAverage(85,54,41);
	scoreKoalas = calcAverage(23,34,27);  
	checkWinner_2(scoreDolphins,scoreKoalas);
*/

 // No.2 Challenge (배열 사용)

/*

	실수 했던 부분들 : bills 선언 조건, totals 변수 내용을 bills로 대체한 것.

	let bills = [125,555,44];	
	
	
	방법 1
	const calcTip =function (bill){
		return bill >= 50 && bill <= 300 ? bill *0.15 : bill * 0.2;	

		or
		
		if(bill >= 50 && bill <=300){
			return bill * 0.15;
		}
		else{
			return bill * 0.2;
		}
	}
	const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];
	const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];



	방법 2
	function calcTip(bill){
	
	
		return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
		or
		
		
		if(bill >= 50 && bill <=300){
			return bill * 0.15;
		}
		else{
			return bill * 0.2;
		}
	}

	const tips = [calcTip(bills[0]),calcTip(bills[0]),calcTip(bills[0])];
    const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];




	방법 3
	const calcTip = bill  => {bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2};

	const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
	const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

	console.log(tips,bills);
	console.log(total);
	
*/

	
	