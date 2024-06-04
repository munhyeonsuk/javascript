// let meg = "";


// for(let i=0; i<10; i++){
// meg += "나 \"열번\" 나오게 해줘 \n";
// }

// console.log(meg)

const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./company.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./board.html"
    },
    {
        gnb_li_a : "인트라넷",
        gnb_li_href : "./intro.html"
    }
]

// //오브젝트 접근법
// console.log(nav_data[1].gnb_li_a);
// console.log(nav_data[1]["gnb_li_a"]);


// let mygnb = ""

// for(let liea=0; liea<nav_data.length; liea++){
//     mygnb += nav_data[liea].gnb_li_a;
// }

// console.log(mygnb)





// let mygnb2 = "";

// for(let v in nav_data){
//     //console.log("forin문처리 : ", v);
//     mygnb2 += `${nav_data[v].gnb_li_a}\n`;
// }
// console.log(mygnb2)


let mygnb2 = ""
for(let v in nav_data){
    mygnb2 += nav_data[v].gnb_li_a;
}

console.log(mygnb2)


// document.getElementsByClassName("gnb").length;
// document.querySelectorAll(".gnb").length;
