/*TS 문법정리*/
var 이름 = "kim";
// 타입 지정시엔 string만 가능. 이름 = 123; --> 오류
var 사과 = ["red", "green"];
// 글자로 된 array만 들어갈 수 있다
var 도시 = { name: "고양시" };
// object 타입 지정. ?는 name 속성이 들어올 수도 있고 아닐 수도 있다
var 전화번호 = 123 || "번호 없음";
var 성명 = 123;
// type 변수는 대문자로. 미리 Name이란 변수의 type을 지정할 수 있다 (Type alias)
// literal type이라 부름
function 함수(x) {
    return x + 2;
}
var john = [123, true];
var Ann = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// class도 타입지정 가능
// 중괄호 내에 미리 name이란 변수 만들어야 constructor 안에서 this.name 이렇게 사용이 가능
// undefined, null 타입도 있다
var 회원들 = ["Kim", "Lee"];
// 문자만 담긴 array만 가능
var 회원들2 = {
    member1: "kim",
    member2: "park",
};
//타입지정 원래 자동으로 됨...타입지정 문법 생략 가능하다
/* 예제 */
// 1. 이름, 나이, 출생지역
var 내이름 = "노은지";
var 내나이 = 35;
var 내고향 = "제천";
// 2. 내가 좋아하는 곡, 가수이름을 object 자료형으로
var myMusic = {
    song: "우리가 맞다는 대답을 할거예요",
    musician: "이강승",
};
// 3. 다음과 같은 자료의 타입 지정을 해보아라
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var 회원 = 123;
// Union Type (타입 2개 이상 합친 새로운 타입)
var 회원님들 = [1, "2", 3];
// 여러 타입이 들어간 array만들고 싶을땐 소괄호로 타입을 묶어주어야 함
// 그냥 number | string [] = 123 or ['kim', 'lee'] 이 뜻임
var 오브젝트 = { a: 124 };
var 뭐야;
뭐야 = 123;
뭐야 = [];
// any는 타입실드 해제 문법. 쓰면 typescript 쓴 의미가 읍다 일반 JS 변수로 만들고 싶으면 쓰기
var 무명;
무명 = 123;
무명 = {};
var 변수1 = 무명;
var 변수2 = 뭐야;
// unknown 타입은 any와 비슷. 모든 자료형을 허용한다.
// any보다 조금 더 안전. 위와 같은 경우 변수1을 string으로 지정하고 무명(unknown)과 같다 하면 에러남.
// any는 에러가 안남. unknown은 number타입이 아니라서 연산이 안됨
// 타입스크립트는 간단한 수학연산도 타입이 맞아야 한다
var 나이;
나이 - 1;
// Union type에는 연산이 안됨
var 연세 = 1;
연세 - 1;
// unknown타입도 연산 안됨
/* 예제 */
// 1. 다음 변수 4개에 타입을 지정해봅시다.
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 2. 학교라는 변수에 타입 지정 해보기
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phill",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function 함수1(x) {
    return x * 2;
}
// 함수는 타입 지정 2곳에서 가능 (파라미터, return)
// 파라미터의 타입지정은 파라미터 옆에 적고 return 우측의 값을 위한 타입지정은 함수명()옆에 적기
// 파라미터에 타입지정하면 필수 파라미터가 된다
function 함수2(x) {
    1 + 1;
}
// return할 자료가 없는 함수의 타입으로 사용할때 void씀
// 이 함수에서 return 쓰면 에러 남
function 함수3(x) {
    console.log(x + 1);
}
// 파라미터가 옵션일 경우엔 파라미터변수?: 타입
// 변수?: number는 변수: number | undefined와 같음
// console.log(x + 1)에서 에러가 나는 이유는 x가 number 타입, string 타입이 아닌 union타입이기 때문
/* 숙제 */
// 1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
function 함수4(이름) {
    if (이름) {
        console.log("안녕하세요 홍길동");
    }
    else {
        console.log("이름을 입력하세여");
    }
}
// 2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
function 함수5(x) {
    return x.toString().length;
}
// 3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
function 함수6(월소득, 집보유, 매력) {
    var score = 0;
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
function 함수7(x) {
    // union type일 경우 Type Narrowing써야 함
    // type narrowing이란 if문 등으로 타입을 하나로 정해주는 것
    if (typeof x === "string") {
        return x + 1;
    }
    else if (typeof x === "number") {
        return x - 1;
    }
    else {
        return 0;
    }
}
함수7(123);
function 함수8(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
        // if는 else{} 까지 써줘야 에러로부터 안전
    }
}
함수8(123);
/* Narrowing으로 판정해주는 문법들 */
// typeof
// in : 어떤 속성이 object에 있는지
// instanceof  : 이 오브젝트가 어떤 부모의 자식인지
function 함수9(x) {
    var array = [];
    array[0] = x;
}
함수9(123);
// assertion문법
// as 문법의 용도
// 1. Union type을 하나로 확정하고 싶을 때 (타입을 a를 b로 바꾸는건 X)
// 2. 무슨 타입이 들어올지 100% 확신할 때 쓰기 왜냐면 함수9에 문자가 들어와도 캐치하지 못함.
// 3. 그래서 남이 짠 코드 수정할 때, 왜 타입에러가 나는지 모르겠을 때...등 비상용으로 자주 쓴다
// 4. 옛날 as문법은
var 이름표 = 124;
이름 + 1; // 현재문법
이름 + 1; // 옛날문법
function 변환기(data) {
    return JSON.parse(data);
}
var jake = 변환기('{"name":"Kim"}');
/* 숙제 */
// 숙제1. 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function cleaner(x) {
    var array = x.map(function (i) { return Number(i); });
    console.log(array);
}
cleaner([1, "2", 3]);
// 숙제2. 다음과 같은 함수를 만들어보십시오.
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
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
function subject(x) {
    if (Array.isArray(x.subject) === true) {
        console.log(x.subject[x.subject.length - 1]);
        return x.subject[x.subject.length - 1];
    }
    else {
        console.log(x.subject);
        return x.subject;
    }
}
subject({ subject: ["math", "science"] });
subject({ subject: "math" });
console.log(subject({ hello: "hi" }));
