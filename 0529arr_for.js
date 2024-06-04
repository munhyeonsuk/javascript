console.log("한번만 실행되지");

for(var i = 1; i < 5; i++){
    console.log("나는 다섯번실행되지");
}

let count = 10;
    count += 100;
    count += 1; //111
    ++count; //112
    count++; //112

console.log(count); //113


//곱하기
let multy = 10;
    multy = multy * 3; // multy *= 3
console.log(multy);

//나누기
let division = 10;
division = division / 3; // multy /= 3
console.log(division);

//문자연삭식 (결합연산자)
let mystudy = "리액트";
    mystudy = "리액트" + "뷰" ; //mystudy =+ "뷰" 
console.log(mystudy);

//중간에 형변환. 한번 커진 형은 작아질 수 없음(하려면 개발자 도구 필요)
let startjs = 10;
    startjs += 10; //20
    startjs += "원"; //20원 (한번 문자가 결합하면 이어주기만 함)
    startjs += 100;
    startjs += 100; // 20원100100
console.log(startjs);