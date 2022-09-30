console.log("----- 전역변수/지역변수 -----");

// 전역변수 : 프로그램 전체에서 접근 가능한 변수
// 지역변수 : 코드블럭 내에서 선언되고 사용, 삭제되는 변수

let gValue = 100;
console.log(`전역변수 : ${gValue}`);

// 전역변수를 함수 안에서 사용하는 것은 문제가 없음
function func1() {
    console.log(`함수 func1에서 사용한 gValue : ${gValue}`);
}

func1();

// 지역변수는 함수(코드블럭)안에서 선언하고 사용하는것은 문제가 없음
function func2() {
    let lValue = 10;
    console.log(`함수 func2에서 사용한 lValue : ${lValue}`);
}

func2();

// 지역변수를 함수(코드블럭) 밖에서 호출하는 것은 불가능
// 지역변수는 해당 함수(코드블럭)이 종료되면 메모리에서 삭제됨
// console.log(`함수 밖에서 사용한 lValue : ${lValue}`);


function func3() {
    let lValue = 10;
    let gValue = 20;
    console.log(`함수 func3에서 사용한 lValue : ${lValue}`);
// 함수안에서 지역변수 선언 시 전역변수와 동일한 이름을 사용하면 지역변수가 우선순위를 가짐
    console.log(`함수 func3에서 사용한 gValue : ${gValue}`);
}

func3();
// 특정 함수 안에서 전역변수와 같은 이름의 지역변수를 선언했더라도 해당 함수 밖에서는
// 지역변수를 사용할 수 없으므로 전역변수가 사용됨
console.log(`함수 밖에서 사용한 gValue : ${gValue}`);