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




let mygnb2 = "";

for(let v in nav_data[0]){
    mygnb2 += nav_data[0][v];
}
console.log(mygnb2)
