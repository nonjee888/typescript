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
