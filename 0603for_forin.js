// let count = "";
// for(var i =0; i<4; i++){
//     count +=`<li>`;
//     count +=`<a href=''>${i}번 대메뉴</a>\n`;
//     count +=`<ul>`;
//     for(var j=0; j<5; j++){
//         count +=`<li>${j}번 소메뉴</li>\n`;
//     }
//     count +=`</ul>`;
//     count +=`</li>\n`;
// }



const yo = ["월", "화","수","목", "금", "토", "일"];

let count = "";
for(var i =1; i<5; i++){  

    count +=`${i}주\n`;

    for(j in yo){
        count +=` ${yo[j]}요일 `;
    }
    count +=`${i}마침\n`;

}

console.log(count)