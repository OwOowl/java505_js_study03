console.log("----- while문 사용하기 -----");

// 카운트 변수 선언

// while (조건식) {
//     반복 실행 될 소스코드
//     카운트 변수 증감식
// }

let count = 1;

while (count < 11) {
    console.log(count);
    count++;
}

console.log();

let dan = 5;
count = 1;

while (count <10) {
    console.log(`${dan} * ${count} = ${dan * count}`);
    count++;
}

console.log();



// 문제 1) 구구단 전체 출력을 while문을 사용하여 출력하세요
dan = 2;

while (dan < 10) {
    count = 1;
    console.log(`\n-----  ${dan}단 -----\n`)
    while (count < 10) {
        console.log(`${dan} * ${count} = ${dan * count}`);
        count++;
    }
    dan++;
}




console.log("\n----- for문 사용하기 -----\n");

let sum = 0;

for (let i = 0; i <= 5; i++) {
    sum = i + sum;
    console.log(sum);
}

console.log();




const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log();




// 문제 2) 배열 arr1을 이용하여 1~10까지의 총합을 구하는 프로그램을 for문을 사용하여 작성

sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
}
console.log(`배열 arr1의 총합 :  ${sum}`);

console.log();






console.log("\n----- break, continue 사용하기 -----\n");

for (let i = 0; i < 10; i++) {
    if (i ==5) {
        break;
    }
    else {
        console.log(`현재 i의 값 : ${i}`);
    }
}

console.log();


for (let i = 0; i < 10; i++) {
    if (i ==5) {
        continue;
    }
    else {
        console.log(`현재 i의 값 : ${i}`);
    }
}

console.log();

for (let i= 0; i< 10; i++) {
    if (i == 5) {
        break;
    }

    for (let j = 0; j < 10; j++) {
        if (j == 5){
            break;
        }
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log();


