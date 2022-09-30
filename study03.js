console.log("----- 함수 사용하기 -----");

function sum(num1, num2) {
        const result = num1 + num2;
    console.log(`두 수의 덧셈은 ${result}`);
}

// sum();
sum(50,20);




// 함수의 4가지 형태
//  1. 매개변수 X, 반환값 X
function add1() {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(`두 수의 덧셈은 : ${c}`);
}

//  2. 매개변수 O, 반환값 X
function add2(a, b) {
    const c = a + b;
    console.log(`두 수의 덧셈은 : ${c}`);
}

//  3. 매개변수 X, 반환값 O
function add3() {
    const a = 10;
    const b = 20;
    const c = a + b;
    return c;
}

//  4. 매개변수 O, 반환값 O
function add4(a, b) {
    const c = a + b;
    return c;
}

console.log("--------------------");

// var btn = document.getElementById("aa");
// btn.addEventListener("click",function(){
//     alert("aaaa");
// });


// 익명함수 : 이름이 없어서 호출(실행) 불가한 함수.
//          매개변수로 함수를 사용 시 사용 (콜백함수)
//          변수에 익명함수를 대입하여 변수명으로 익명함수를 호출 할 수 있음
const noname = function () {
    const a = 10;
    const b = 20;
    console.log(`두 수의 합은 ${a + b}`);
};

noname();

// 즉시 실행 함수(일회용 함수) : 프로그램 실행 시 단 한번만 실행해야 하는 부분을 실행하기 위해 사용
//         (function (){값}())
(function() {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);
}());








// 문제 6) 문제 3의 소스코드를 함수를 사용하는 방식으로 수정
//  1. 사용자 입력부분을 함수로 생성. quiz6Input
//  2. 계산부분을 함수로 생성 quiz6Cal

function quiz6Input() {
    let num = prompt("몇 까지 3의 배수를 찾을까요?");
    num = Number(num);
    return num;
}

let num = quiz6Input();

function quiz6Cal(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if ((i % 3) == 0) {
            console.log(i);
            count++;
        }
    }
    console.log(`${num}까지의 3의 배수 개수 : ${count}`);
}

quiz6Cal(num);





// 문제 7) 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하세요
//  1. money, coffee, price의 초기값을 설정하는 함수 생성 quiz7Setup
//  2. 커피 판매부분을 함수로 생성 quiz7CoffeeSale

function quiz7Setup() {
    let money = prompt("소지 금액을 입력해 주세요");
    money = Number(money);
    return money;
}

let money = quiz7Setup();


function quiz7CoffeeSale(money) {
    const price = 300;
    let coffee = 10;
    while (true) {
        console.log("커피를 주문합니다.");
        money = money - price;
        // price 변수를 설정하지 않고 money -= 300; 사용하는 방법도 있음
        if (coffee == 0) {
            console.log("커피가 다 팔렸습니다.");
            console.log("영업을 종료합니다.");
            break;
        } else if (money < 0) {
            console.log("돈이 부족합니다.");
            break;
        } else {
            coffee--;
            console.log(`커피 한 잔을 판매합니다.`);
            console.log(`남은 커피 ${coffee}잔`);
        }
    }
}

quiz7CoffeeSale(money);

// 문제 8) 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요
//  1. 입금부분 함수로 생성 quiz8InMoney
//  2. 예금확인 부분 함수로 생성 quiz8Check
//  3. 출금부분 함수로 생성 quiz8OutputMoney
//
let asset = 10000;




function quiz8InMoney() {
    let income = prompt("입금할 금액");
    income = Number(income);
    if (isNaN(income)) {
        console.log("잘못된 입력입니다.");
    }
    else {
        asset = asset + income;
        console.log(`입금한 금액 : ${income}원 \n입금 후 잔고 : ${asset}원`);
    }
}



function quiz8Check() {
    console.log(`현재 보유하고 계신 금액은 ${asset}원 입니다.`);
}



function quiz8OutputMoney() {
    let spending = prompt("출금할 금액");
    spending = Number(spending);

    if (isNaN(spending)) {
        console.log("잘못된 입력입니다.");
    }
    else {
        if (asset > spending) {
            asset = asset - spending;
            console.log(`${spending}원 출금합니다.`);
        } else {
            console.log(`출금액이 잔액보다 많습니다. ${asset}원 출금합니다.`);
            asset = 0;
        }
        console.log(`출금 후 잔액 : ${asset}원`);
    }
}



function bank() {
    alert(`안녕하세요 java505 은행입니다.`);
    while (true) {
        const text = prompt(`1. 입금 | 2. 예금확인 | 3. 출금 | 0. 종료`);

        if (text == '종료' || text == '0') {
            console.log("이용해주셔서 감사합니다.");
            break;
        }
        else if (text == '입금' || text == '1') {
            quiz8InMoney();
        }

        else if (text == '예금확인' || text == '2') {
            quiz8Check();
        }

        else if (text == '출금' || text == '3'){
            quiz8OutputMoney();
        }
    }
}

bank();







