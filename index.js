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
