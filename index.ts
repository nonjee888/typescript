/*TS 문법정리*/

let 이름: string = "kim";
// 타입 지정시엔 string만 가능. 이름 = 123; --> 오류

let 사과: string[] = ["red", "green"];
// 글자로 된 array만 들어갈 수 있다

let 도시: { name?: string } = { name: "고양시" };
// object 타입 지정. ?는 name 속성이 들어올 수도 있고 아닐 수도 있다

let 전화번호: string | number = 123 || "번호 없음";
// 다양한 type (Union type) 숫자 또는 문자가 들어올 수 있다. (정하기 나름)

type Name = string | number;
let 성명: Name = 123;
// type 변수는 대문자로. 미리 Name이란 변수의 type을 지정할 수 있다 (Type alias)
// literal type이라 부름

function 함수(x: number): number {
  return x + 2;
}
// 함수에 type 지정이 가능하다 (파라미터, 리턴값 둘 다 타입 지정 가능)
// return 타입으로 void설정도 가능 --> return이 없는지 체크할 수 있는 타입

type Member = [number, boolean];
let john: Member = [123, true];
// array 순서를 포함해 어떤 자료가 들어올지 정확히 지정해 쓸 수 있는 --> tuple 타입
// e.g. 무조건 배열의 첫번째 자리엔 숫자, 두번째엔 boolean이 들어와야 해

type 멤버 = {
  [key: string]: string;
  // object에 타입 지정해야 할 속성이 너무 많을때,
  // 글자로 된 모든 oject속성의 타입은 string이야
  // 아직 어떤 속성이 들어갈지 몰라?
};
let Ann: 멤버 = { name: "kim" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
// class도 타입지정 가능
// 중괄호 내에 미리 name이란 변수 만들어야 constructor 안에서 this.name 이렇게 사용이 가능
// undefined, null 타입도 있다

let 회원들: string[] = ["Kim", "Lee"];
// 문자만 담긴 array만 가능

let 회원들2: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

//타입지정 원래 자동으로 됨...타입지정 문법 생략 가능하다

/* 예제 */
// 1. 이름, 나이, 출생지역

let 내이름: string = "노은지";
let 내나이: number = 35;
let 내고향: string = "제천";

// 2. 내가 좋아하는 곡, 가수이름을 object 자료형으로

let myMusic: { song: string; musician: string } = {
  song: "우리가 맞다는 대답을 할거예요",
  musician: "이강승",
};

// 3. 다음과 같은 자료의 타입 지정을 해보아라

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let 회원: number | string = 123;
// Union Type (타입 2개 이상 합친 새로운 타입)

let 회원님들: (number | string)[] = [1, "2", 3];
// 여러 타입이 들어간 array만들고 싶을땐 소괄호로 타입을 묶어주어야 함
// 그냥 number | string [] = 123 or ['kim', 'lee'] 이 뜻임

let 오브젝트: { a: string | number } = { a: 124 };

let 뭐야: any;
뭐야 = 123;
뭐야 = [];
// any는 타입실드 해제 문법. 쓰면 typescript 쓴 의미가 읍다 일반 JS 변수로 만들고 싶으면 쓰기

let 무명: unknown;
무명 = 123;
무명 = {};

let 변수1: string = 무명;
let 변수2: string = 뭐야;
// unknown 타입은 any와 비슷. 모든 자료형을 허용한다.
// any보다 조금 더 안전. 위와 같은 경우 변수1을 string으로 지정하고 무명(unknown)과 같다 하면 에러남.
// any는 에러가 안남. unknown은 number타입이 아니라서 연산이 안됨
// 타입스크립트는 간단한 수학연산도 타입이 맞아야 한다

let 나이: string | number;
나이 - 1;
// Union type에는 연산이 안됨

let 연세: unknown = 1;
연세 - 1;
// unknown타입도 연산 안됨

/* 예제 */
// 1. 다음 변수 4개에 타입을 지정해봅시다.

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// 2. 학교라는 변수에 타입 지정 해보기

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phill",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function 함수1(x: number): number {
  return x * 2;
}
// 함수는 타입 지정 2곳에서 가능 (파라미터, return)
// 파라미터의 타입지정은 파라미터 옆에 적고 return 우측의 값을 위한 타입지정은 함수명()옆에 적기
// 파라미터에 타입지정하면 필수 파라미터가 된다

function 함수2(x: number): void {
  1 + 1;
}
// return할 자료가 없는 함수의 타입으로 사용할때 void씀
// 이 함수에서 return 쓰면 에러 남

function 함수3(x: number | string): void {
  console.log(x + 1);
}
// 파라미터가 옵션일 경우엔 파라미터변수?: 타입
// 변수?: number는 변수: number | undefined와 같음
// console.log(x + 1)에서 에러가 나는 이유는 x가 number 타입, string 타입이 아닌 union타입이기 때문

/* 숙제 */

// 1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
function 함수4(이름?: string): void {
  if (이름) {
    console.log("안녕하세요 홍길동");
  } else {
    console.log("이름을 입력하세여");
  }
}

// 2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
function 함수5(x: number | string): number {
  return x.toString().length;
}

// 3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
function 함수6(월소득: number, 집보유: boolean, 매력: string): string | void {
  let score: number = 0;
  score += 월소득;
  if (집보유 == true) {
    score += 500;
  }
  if (매력 == "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(함수6(600, true, "상"));

function 함수7(x: number | string) {
  // union type일 경우 Type Narrowing써야 함
  // type narrowing이란 if문 등으로 타입을 하나로 정해주는 것

  if (typeof x === "string") {
    return x + 1;
  } else if (typeof x === "number") {
    return x - 1;
  } else {
    return 0;
  }
}
함수7(123);

function 함수8(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
    // if는 else{} 까지 써줘야 에러로부터 안전
  }
}
함수8(123);
/* Narrowing으로 판정해주는 문법들 */
// typeof
// in : 어떤 속성이 object에 있는지
// instanceof  : 이 오브젝트가 어떤 부모의 자식인지

function 함수9(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

함수9(123);
// assertion문법
// as 문법의 용도
// 1. Union type을 하나로 확정하고 싶을 때 (타입을 a를 b로 바꾸는건 X)
// 2. 무슨 타입이 들어올지 100% 확신할 때 쓰기 왜냐면 함수9에 문자가 들어와도 캐치하지 못함.
// 3. 그래서 남이 짠 코드 수정할 때, 왜 타입에러가 나는지 모르겠을 때...등 비상용으로 자주 쓴다
// 4. 옛날 as문법은

let 이름표: number = 124;

(이름 as string) + 1; // 현재문법
<string>이름 + 1; // 옛날문법

// 이렇게 쓰였었지만 html과 js가 함께 쓰이는 리액트에서는 html태그와 헷갈리기 땜시 as키워드를 주로 씀
// 5. 이럴때 유용하게 쓰임

type Person = {
  name: string;
};
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"Kim"}');

/* 숙제 */

// 숙제1. 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

function cleaner(x: (number | string)[]) {
  const array = x.map((i: number | string) => Number(i));
  console.log(array);
}
cleaner([1, "2", 3]);

// 숙제2. 다음과 같은 함수를 만들어보십시오.
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.

// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.

// (동작예시)
// 만들함수( { subject : 'math' } )  //이 경우 'math'를 return
// 만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다

function subject(x: { subject: string | string[] }) {
  if (Array.isArray(x.subject) === true) {
    console.log(x.subject[x.subject.length - 1]);
    return x.subject[x.subject.length - 1];
  } else if (x.subject === "string") {
    console.log(x.subject);
    return x.subject;
  } else {
    return "없으";
  }
}
subject({ subject: ["math", "science"] });
subject({ subject: "math" });
console.log(subject({ hello: "hi" }));

// type alias (type 변수) 만드는 법
// 타입이 이렇게 길고 복잡할때 변수에 담아 쓰기 type 키워드 써서 & readonly
//type변수는 대문자로 써요

type AnimalType = string | number | undefined;
let 동물: AnimalType = 123;

type AnimalType2 = { name: string; age: number };
let 동물2: AnimalType2 = { name: "kim", age: 20 };

// const 변수는 재할당이 불가능
const 출생지역 = "seoul";
출생지역 = "busan";

// cosnt 변수라도 object 자료수정 가능
const 출생지역2 = { region: "seoul" };
출생지역2.region = "busan";

// readonly로 name을 지정해주면 object 자료수정이 불가
type GirlFriend = {
  readonly name?: string;
};

const 여친: GirlFriend = {
  name: "엠버",
};

여친.name = "은지";
// 타입스크립트 에러는 에디터&터미널에서만 존재한다. 자바스크립트에서는 에러 안나는 경우도 있다.
// object속성에서도 ?사용 가능

type YourName = string;
type Age = number;
type Person2 = YourName | Age;
// type 변수는 union type으로 합치기가 가능

type PositionX = { x: number };
type PositionY = { y: number };

// &연산자로 object type합치기 (type alias extend)
type NewType = PositionX & PositionY;
let position: NewType = { x: 10, y: 20 };

// 같은 이름의 type변수 재정의 불가능
type PositionX = { x: string };

/* 숙제 */

// 숙제 1) 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈

type MyType = { color?: string; size: number; readonly position: number[] };

let 테스트용: MyType = {
  //   color: "blue",
  size: 123,
  position: [1, 2, 3],
};

// 숙제 2) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type Data = {
  name: string;
  phone: number;
  email: string;
};
const data: Data = {
  name: "eunji",
  phone: 123,
  email: "nah234@gmail.com",
};

// 숙제 3) 다음을 만족하는 type alias를 만드세여
// 1. 숙제2와 같은데 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자여부 속성은 true/false만 들어올수있다
// 3. 멋있게 숙제 2에서 만든 type alias를 재활용 해 봅시다

type newData = {
  name: string;
  phone: number;
  email: string;
  minor: boolean;
};

const newOne = {
  name: "웅",
  phone: 111,
  email: "1212@ddd.com",
  minor: false,
};

// literal types
let 이름2: 123;
이름2 = 123;

function 함수10(a: "hello"): 1 | 0 {}
함수10("hello");

// 리터럴타입은 볁수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성 기능

function 함수11(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  let array: ("가위" | "바위" | "보")[] = [];
  array.push(x);
  return array;
}
함수11("가위");
함수11("바위");

// literal type의 문제점
var 자료 = {
  name: "kim",
} as const;
// console.log(자료.name)은 "kim"이 나온다. 그런데 아래 내함수(자료.name)은 에러를 뱉어낸다
function 내함수(a: "kim") {}
내함수(자료.name);
// 오ㅐ냐면 "kim"이란 자료가 아닌 "kim"이라는 타입만 들어올 수 있기 때문
// 해결방법
// 1. object 만들 때 타입을 잘 정해
// 2. as 문법

// 3. as const 문법
// var 자료에 as const를 뒤에 붙이면
// 1) 타입을 object의 value로 바꿔준다
// 2) object안에 있는 모든 속성을 readonly로 바꿔준다(변경하면 에러나게)
// object를 잠그고 싶으면 as const를 사용하쟈

/* 함수 type 지정하기 */
type 함수타입 = (a: string) => number;
// 1. 함수타입은 () => {} 모양으로

let 함수12: 함수타입 = function (a) {
  return 10;
};
// 2. 함수표현식에만 type alias 사용가능

/* 퀴즈 */
// 1. object안의 함수 타입지정은 어떻게?
type 회원정보 = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let 회원정보: 회원정보 = {
  name: "kim",
  age: 20,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("ddong");
  },
};

회원정보.plusOne(3);
회원정보.changeName();

// 2. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

type cutZero = (a: string) => string;

let cutZero: cutZero = (a) => {
  return a.replace("0", "");
};

console.log(cutZero("012223"));

type removeDash = (a: string) => number;
let removeDash: removeDash = (a) => {
  let dashremoved = a.replace("-", "");
  return parseFloat(dashremoved);
};

console.log(removeDash("-4dkdkd222k123123"));

// 타입스크립트로 HTML 변경과 조작할때 주의점
let 제목 = document.querySelector("#title");
if (제목 instanceof HTMLElement) {
  제목.innerHTML = "반가워요";
}

console.log(제목);

// HTML 조작시 narrowing 방법 5개
// 1. if(제목 != null){}
// 2. if(제목 instanceof HTMLElement){}  <-- 가장 많이 쓰임
// 3. let 제목 = document.querySelector("#title") as Element; //비상시, 100%확신할 때만 씀.
// 4. if(제목?.innerHTML != undefined){} <-- 제목에 innerHTML이 있으면 출력해주고 없으면 undefined (optional chaning)
// 5. tsconfig.json 에서 strict모드 false로 바꿈 <-- typescript 안쓰겠다는 것임

// <a>태그의 href 속성 바꾸기
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}
// HTMLHeadingElement, HTMLButtonElement, HTMLAnchorElement 등 Heading, Button 등의 태그를 describe 하기 위한 Element 타입들이 있음
// HTMLAnchorElement는 href, style, class 이런거 쓸 수 있음

// 타입스크립트에서 eventListener 부착하기
let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {});
// 버튼?. 도 narrowing <-- 버튼에 addEventListener 가능하면 해주고 아니면 undefined

/* 숙제 */
// 1. 버튼을 누르면 이미지를 바꾸기
// html안 이미지를 new.jpg로 바꾸고 싶다면?
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}

// 2. 바꾸고 싶은 요소가 많을 때
// <a>태그 href속성을 전부 kakao.com으로 바꿔보기

let 링크2 = document.querySelectorAll(".naver");
링크2.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

// for 반복문 쓸 경우
// let 링크2 = document.querySelectorAll(".naver");
// for (let i = 0; i < 3; i++) {
//   let a = 링크2[i];
//   if (a instanceof HTMLAnchorElement) {
//     a.href = "https://kakao.com";
//   }
// }
