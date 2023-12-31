
// 콘솔창에서 한 내용
/*    Hello Wordl! 
> alert("hello World")
<- undefined
> let js = 'amazing'
<- undefined
> if(js === 'amazing') alert("JavaScript is Fun")
<- undefined
> js = 'boring'
<- 'boring'
> if(js === 'amazing') alert("JavaScript is Fun")
<- undefined
> 40 + 8 + 23 - 10
<- 61
*/

 // 코딩 연습
{
  // #섹션 2번 : 8 ~ 9번 (값과 변수 개념)
  /*
	 데이터 조각 : 값 -> 변수에 저장후 사용 가능(재사용 또한)
	 변수 : 상자 개념에 개체를 담는다, 숫자 시작, 기호 넣기 , 각 언어에 지정된 키워드 쓰기  등안됨 
	 언어에 지정된 키워드 사용시 $ 표시해서 사용 가능 
	 변수 쓸대 관례 : 고정 값은 대문자로 작성 , 낙타 표기법(첫단어를 제외한 다음 단어의 첫글자는 대문자로 표현)


	 let js = 'amazing';
	 if(js === 'amazing')
	 alert('JavaScript is Fun!');

	 40 + 8 + 23 - 10;
	 console.log(40 + 8 + 23 - 10);
	 console.log("Jonas");
	 console.log(23);

	 let firstName = "Jonas";
	 console.log(firstName); 
	 console.log(firstName);
	 console.log(firstName);


	 let jonas_matilda = "JM";
	 let $funtion = 27;

	 let preson = "jonas";
	 let PI = "3.1415";


		 직관적이게 변수 선언
	 let myFristJob = "Programer";
	 let myCurrentJob = "Teacher";

	 let job1 = "Programer";
	 let job2 = "Teacher";
   */	 

  // #섹션 2 : 11번 (데이터 타입)
  /* 
	 데이터 7개 타입


	1. Number : 부동 소수점 숫자  (let age = 23;)
	2. String :  문자열  (let fristName = 'Jonas;)
	3. Boolean : 참 / 거짓   (let  fullAge =  true);
	4. Undefined : 정의 되지 않은 (let children;)
	5. Null : 빈 값 
	6. Symbol : 바꿀수 없는 고유값 지정
	7. BigInt : 너무 큰 정수 표현

  

 let javascriptIsFun = true;
 console.log(javascriptIsFun);

 console.log(typeof true);
 console.log(typeof javascriptIsFun);
 console.log(typeof 23);
 console.log(typeof "Jonas");


 javascriptIsFun = 'Yes';
 console.log(typeof javascriptIsFun);

 let year;
 console.log(year);
 console.log(typeof year);


 year = 1991;
 console.log(typeof year);
 console.log(typeof null);


 let gae = 30;
 age = 31;

	 const : 변수 재선언 x
 const brithYear = 1991;
  brithYear = 1998;
  const job;

 var job = 'programer';
 job = 'teacher';

	 변수는 항상 선언해야함.
 lastName = 'Schmedtmann';
 console.log(lastName);
  */  

  // #섹션 2 : 13 ~ 14번 (연산 개념)
  /*
		Math operation
	 const now = 2037;
	 const ageJonas = now - 1991;
	 const ageSarah = now - 2020;
	 console.log(ageJonas, ageSarah);

	   2 ** 3 means 2 to the power of 3  2 * 2 *2
	 console.log(ageJonas * 2 , ageJonas / 10, 2 ** 3);

	 const fristName = 'Jonas';
	 const lastName = 'Schmedtmann';
	 console.log(fristName +" "+ lastName);

		Assaginment  operations
	 let x = 10 + 5; // 15
	 x += 10; // x = x + 10 = 25
	 x *= 4; // x = x * 4 = 100
	 x++; // x = x + 1
	 x--; // x = x - 1
	 x--; // x = x - 1
	 console.log(x);

		Comperation operations
	 console.log(ageJonas > ageSarah); // >, <, >=, <=
	 console.log(ageSarah >= 18);

	 const isFullAge = ageSarah >= 18;

	 console.log(now - 1991 > now - 2019);
	  // MDN 웹 문법 찾아 볼수있음
	 const now = 2037;
	 const ageJonas = now - 1991;
	 const ageSarah = now - 2018;

	 console.log(now - 1991 > now - 2019);

	 console.log(25 - 10 - 5);

	 let x,y;
	 x = y =  25 - 10 - 5; // x = y = 10,  x = 10
	 console.log(x,y);

	 const averageAge = (ageJonas + ageSarah) / 2;
	 console.log(ageJonas, ageSarah, averageAge)
  */

  //  #섹션 2 : 17번 (문자열 구성)
  /*	
	   템플릿 문자열 -> EXSi에서 많이 사용하는 기능
	   template literal 사용으로 간편하게 작성가능
	   `` 백스틱 이용해서 하는데 큰따옴표, 작은 따옴표 사용 불가능
	   백스틱 사용안할시 /n/ <- 줄바꿈  `` 사용시 엔터 쳐서 줄바꿈해주면 된다.
	 const firstName = 'jonas';
	 const job = 'teacher';
	 const birthYear = 1991;
	 const year = 2037;
	 const jonas = "I'm " + firstName +  ', a ' +  (year - birthYear) + ' years old ' + job + '!'
	 console.log(jonas);


	 const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; 
	 console.log(jonasNew);

	 console.log(`Just a regular string...`);

	 console.log(' String with\n\
	 multiple\n\
	 lines' );
	 console.log(`String
	 multiple
	 lines`)
  */

  // #섹션 2 : 18번 (if & else 구성과 작동원리)
  /*
	const age = 15; 

	 if(age >= 18){
		console.log(`Sarah can start driving License`);	 
	}
	 else{
		 const yearsLeft = 18 - age;
		 console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `);
	}
	 
    ctrl 구조
	 if(조건이 참일 때) {

	 }
	 else 거짓일때 {

	 }
	 const birthYear = 2012;
	 let century;
	 if(birthYear <= 2000){
		  century = 20;
	 }
	 else{
		  century = 21;
	 }
	 console.log(century);
  */

  // #섹션 2 : 20 ~ 21번  (형식 변환 과 형식 강압)
  /*  


	   type conversion (형식 변환)
	   Number() : 숫자 형식으로 변환
	   String() ; 문자 형식으로 변환
	   Boolean() : 참과 거짓으로 변환

	 const inputYear = '1991';
	 console.log(Number(inputYear), inputYear);
	 console.log(Number(inputYear) + 18);

	 console.log(Number('Jonas'));
	 console.log(typeof NaN);

	  console.log(String(23), 23);
	  
	  

	  type coercion (강압 형식)
	  + 를 사용해 자동으로 타입에 맞게 끔 변환
	  - 를 사용시 + 기능의 반대 형식을 촉발

	 console.log('I am ' + 23 + ' years old');
	 console.log('I am ' + '23' + ' years old');
	 console.log('23' - '10'- 3);
	 console.log('23' / '2');

	 let n = '1' + 1; // '11'
	 n = n - 1; 
	 console.log(n);
 


     5 falsy values : 0, '', undefined, null, NaN
	 5개 거짓 값들


	 console.log(Boolean(0));
	 console.log(Boolean(undefined));
	 console.log(Boolean('Jonas'));
	 console.log(Boolean({}));
	 console.log(Boolean(''));


	let money = 100;
	if(money){
	 console.log("Don't spend it all :)");	 
	}
	else{
	 console.log("You should get a job");	 
	}

	let height = 0;
	if(height){
	 console.log('YaY! Height is defined')
	}
	else {
	 console.log('Height is undefined')
	}
  */

  // #섹션 2 : 22번 (== vs === / if ,else if ,else)
  /*
	  === : 강압 형식 적용 x  , ==  : 강압 형식 적용 o
	  형식 변환을 사용하더라도 삼중 등호를 써라. 
	  코드의 오류가 떴을 때 찾기가 더쉽다.
	  아니라는것을 표현  : !== :엄격 버전  != : 느슨 버전 (엄격 버전을 사용해라.)
	  
	 const age = '18';
	 if(age === 18) console.log('You just became an adult :D (strict)');

	 if(age == 18) console.log('You just became an adult :D (lose)');

	 const favorite = Number(prompt("What's your favoirote number?"));

	 console.log(favorite);
	 console.log(typeof favorite);


	if(favorite === 23){ // 22 === 23 -> False
	 console.log('Cool! 23 is an amazing number');
	}
	else if(favorite === 7){ 
	 console.log('7 is also a cool number');
	}
	else if(favorite === 9){ 
	 console.log('9 is also a cool number');
	}
	else{ 
	 console.log('Number is not 23 or 7');
	}
	
	 if(favorite !== 23) console.log('Why not 23?');
	 
  */ 

  // #섹션 2 : 23번 (논리 연산자)
  /*
    and  vs or vs not 
	
	and의 경우(&&) : 모두가 참일때 즉, 어떤것이든 몇개든 모두가 참일 때만 참 (그 예외로는 거짓)
	
	or의 경우(||) : 모두가 거짓일때 즉,어떤것이든 몇개든 모두가 거짓일 때만 거짓 (그 예외로는 참)
	
	not의 경우(!) : true 라는값을 false로, false라는 값을 true로 뒤집을 때 사용

 
	 const hasDriversLicense = true; // A
	 const hasGoodVision = true; // B

	 console.log(hasDriversLicense && hasGoodVision);
	 console.log(hasDriversLicense || hasGoodVision);
	 console.log(!hasDriversLicense);



	if(hasDriversLicense && hasGoodVision){
	 console.log('Sarah is able to drive!');
	}
	else{
	 console.log('Someone else should drive....');
	}

	const isTired = false; // C
	console.log(hasDriversLicense && hasGoodVision && isTired);


	if(hasDriversLicense && hasGoodVision && !isTired){
	 console.log('Sarah is able to drive!');
	}
	else{
	 console.log('Someone else should drive....');
 	} 
  */

  // #섹션 2 : 26번 (switch)
  /*
	default : 모든 조건들이 충족이 안됐을 때 마지막 기본 값
	break : 조건에 따라  실행을 하고 그다음 조건문에 있는 실행을 안시키기 위해 끄기
	단, 만약 break 안걸면 뒤에 조건 상관없이 실행함.break 걸려있는 곳까지
	가독성을 위해 switch 구문 사용하기도 함으로 if구문 뿐만아니라 switch구문이 있다는걸 알기
	switch(조건) {
		case 조건 : 
		  실행 ...
	    break;	  
		  .
		  . 반복
		  .
		  .
		  
		  
		default : 
		  실행
	}
 
	 const day = 'friday';
	
	
    	switch 구문
	
	
	switch(day){
	 case 'monday': // day === 'monday'
		console.log('Plan course structure');
		console.log('Go to coding meetup');
		break;
	 case 'tuesday': 
		console.log('Prepare theory videos');
		break;
	 case 'wednesday':
	 case 'thursday': 
		console.log('Write code examples');
		 break;
	 case 'friday':
		console.log('Record videos');	 
		break;
	 case 'saturday':
	 case 'sunday':
		console.log('Enjoy the weekend :D');
		break; 
	 default : 
		 console.log('Not a valid day!');
	}




	         if구문
	
	
	if(day === 'monday'){
	 console.log('Plan course structure');
	 console.log('Go to coding meetup');
	}
	else if(day === 'tuesday'){
	 console.log('Prepare theory videos');
	}
	else if(day === 'wednesday' || day === 'thursday'){
	 console.log('Write code examples');
	}
	else if(day === 'friday'){
	 console.log('Record videos');
	}
	else if(day === 'saturday' || day === 'sunday'){
	 console.log('Enjoy the weekend :D');
	}
	else{
	 console.log('Not a valid day!');
	}
  */

  // #섹션 2 : 27번 (식 과 문)
  /*
	식 : 값(가치)을/를 만들어내는 코드 단위
	문 : 무엇가를 수행하는 코드 단위
	문은 식을 기대하는데 문에다가 문을 넣을순 없다 
	아래 예제 처럼) ${조건문} 이런형태는 말이안된다.
	
	
	const me = 'Jonas' < 식 
	
	if(23 > 10){    < 문
		
	}
	가치 = 식 , 가치를 어떻게 사용하냐 = 문
	
	3 + 4
	1991
	true && false && !false
	if(23 > 10){
	 const str = '23 is bigger';
	}

	const me = 'Jonas';
	console.log(`I'm ${2037 - 1991} years old ${if(조건){내용}}`)
	console.log(`I'm ${2037 - 1991} years old ${me}`);
  */  

  // #섹션 2 : 28번 (삼항 연산자) ? 참 : 거짓
  /*
	그전에 오류났던 ${if(){}} 에서 if(){} 는 표현(수행하는 단위)이라 오류
	지금 쓰는 ${age >= 18 ? 'wine' : 'water'} 는  식(가치 창출)이라 오류 x


	const age = 23;
	age >= 18 ? console.log('I like to dirnk wine') :  
	console.log('I like to dirnk water');

	const drink = age >= 18 ? 'wine' : 'water';
	console.log(drink);

	let drink2;
	if(age >= 18){
	 drink2 = 'wine';	 
	}
	else{
	 drink2 = 'water';
	}
	console.log(drink2);

	console.log(`I'm like to drink ${age >= 18 ? 'wine' : 'water'}`);
  */
	
	
	
}

// 코딩 챌린지
{
 // 어떻게 만들든 결과가 같다면 큰문제가 안됨.


  // NO.1 Challenge (간단한 연산과 비교)
  /*	 
		#case : 1
	  const massMark =  78;
	 const heghitMark = 1.69;
	 const massJohn =  92; 
	 const heghitJohn = 1.95;

		#case : 2
	 const massMark =  95;
	 const heghitMark = 1.88;
	 const massJohn =  85; 
	 const heghitJohn = 1.76;


	 const BMIMark = massMark / (heghitMark ** 2);
	 const BMIJohn = massJohn / (heghitJohn ** 2);


	 let markHigherBMI = BMIMark > BMIJohn;
	 console.log(BMIMark,BMIJohn, markHigherBMI); 
  */


  // NO.2 Challenge(`   `) template literal 통과~~~~
  /*
	 const massMark = 78;
	 const heightMark = 1.69;
	 const massJohn = 92;
	 const heightJohn = 1.95;

	 const BMIMark = massMark / (heightMark * heightMark);
	 const BMIJohn = massJohn / (heightJohn * heightJohn);

	 if(BMIMark > BMIJohn){
		 console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
	 }
	 else{
		 console.log(`Mark's BMI ${BMIJohn} is higher than John's ${BMIMark}!`);
	 }
  */


  // NO.3 Challenge(if , else if , else) 통과~~~~
  /*
 
 const scoreDolphins = (96 + 108 + 89) / 3;
 const scoreKoalas =  (88 + 91 + 110) / 3;

 if(scoreKoalas > scoreDolphins){
 console.log("Koalas win the trophy");
 }
 else if(scoreKoalas < scoreDolphins){
 console.log("Dolphins win the trophy ");
 }
 else {
 console.log("Both win the trophy");
 }

 // BONUS 1


 const scoreDolphins = (97 + 112+ 80) / 3;
 const scoreKoalas =  (109 + 95 + 50) / 3;
 console.log(scoreKoalas,scoreDolphins);

 if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
	 console.log("Koalas win the trophy");
 }
 else if(scoreKoalas < scoreDolphins && scoreDolphins >= 100){
	 console.log("Dolphins win the trophy ");
 }
 else if(scoreDolphins === scoreKoalas && scoreDolphins>= 100 && scoreKoalas >= 100){
	 console.log("Both win the trophy");
 }
 else {
	 console.log("No one wins the trophy");
 }
  */ 


  // NO.4 Challenge(식 과 문) 
  /*	
	let tip = 0;
	const bill = 275;
	
	if(bill >= 50 && bill <= 300){
		tip = bill * 0.15;
		console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
	}
	else{
		tip = bill * 0.2;
		console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
	}
	
	// 또다른 방법 (삼항 연산자 사용시)
	const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;	
	console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
  */
	
}