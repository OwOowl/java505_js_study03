// 문제 3) p 511 마무리문제 2번


let num = prompt("몇 까지 3의 배수를 찾을까요?");
num = Number(num);
let count = 0;
for(let i = 1; i <= num; i++) {
    if ((i % 3) == 0) {
        console.log(i);
        count++;
    }
}
console.log(`${num}까지의 3의 배수 개수 : ${count}`);


console.log();



// 문제 4) 커피 자판기 프로그램 작성
//  1. 사용자가 가지고 있는 금액 입력받기
//  2. 커피 1잔의 금액은 300원
//  3. 자판기에 들어있는 커피의 양은 10개
//  4. 커피를 판매할 때마다 1개의 커피 소모
//  5. 소지 금액 부족시 "돈이 부족합니다" 출력
//  6. 커피가 부족할 경우 '커피가 다팔렸습니다' 출력
//  7. 커피 판매시 '커피 한 잔을 판매합니다'와 재고량 출력
//      ex)커피 한잔을 판매합니다.
//         남은 커피 00잔

let money = prompt("소지 금액을 입력해 주세요");
money = Number(money);
const price = 300;
let coffee = 10;


while(true) {
    console.log("커피를 주문합니다.");
    money = money - price;
    // price 변수를 설정하지 않고 money -= 300; 사용하는 방법도 있음
    if (coffee == 0) {
        console.log("커피가 다 팔렸습니다.");
        console.log("영업을 종료합니다.");
        break;
    }
    else if (money < 0) {
        console.log("돈이 부족합니다.");
        break;
    }
    else{
        coffee--;
            console.log(`커피 한 잔을 판매합니다.`);
            console.log(`남은 커피 ${coffee}잔`);
    }
}


console.log();




// 문제 5) 은행 프로그램 작성
//  1. 프로그램 시작시 안내 메세지와 메뉴출력
//      ex) 안녕하세요 java505 은행입니다.
//      ex) 1. 입금 2. 예금확인 3. 출금 0. 종효
//  2. 메뉴를 선택하면 해당 기능 실행
//  3. 메뉴는 기능을 실행 후 계속 출력
//  4. 0 실행 시 '프로그램을 종료합니다' 출력
//  5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
//  6. 2 실행 시 기존에 저장된 금액 출력
//  7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
//  8. 기존 금액보다 큰 금액 출금 시 기존 금액을 0으로 만들고 모든 금액 출금

let asset = 10000;

alert(`안녕하세요 java505 은행입니다.`);

while (true) {
    console.log("1. 입금 | 2. 예금확인 | 3. 출금 | 0. 종료");

    const text = prompt(`1. 입금 | 2. 예금확인 | 3. 출금 | 0. 종료`);
    if (text == '종료' || text == '0') {
        console.log("이용해주셔서 감사합니다.");
        break;
    }
    else if (text == '입금' || text == '1') {
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
    else if (text == '예금확인' || text == '2') {
        console.log(`현재 보유하고 계신 금액은 ${asset}원 입니다.`);
    }
    else if (text == '출금' || text == '3'){
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
}




