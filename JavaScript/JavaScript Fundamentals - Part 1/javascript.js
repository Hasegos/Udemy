
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

// 코딩 챌린지
 // 어떻게 만들든 결과가 같다면 큰문제가 안됨.
 // No.1

 // const massMark =  78;
 // const heghitMark = 1.69;
 // const massJohn =  92; 
 // const heghitJohn = 1.95;

 const massMark =  95;
 const heghitMark = 1.88;
 const massJohn =  85; 
 const heghitJohn = 1.76;


 const BMIMark = massMark / (heghitMark ** 2);
 const BMIJohn = massJohn / (heghitJohn ** 2);


 let markHigherBMI = BMIMark > BMIJohn;
 console.log(BMIMark,BMIJohn, markHigherBMI);
