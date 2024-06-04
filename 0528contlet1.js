const myarr = [
    ["네이버", "http://www.naver.com"],
    ["다음", "http://www.daum.net"],
    ["구글", "http://www.google.com"]
]
console.log("첫번째 배열", myarr[0], typeof myarr[0], 
        "첫번째배열의 첫번째값", myarr[0][0], typeof myarr[0][0])
console.log(`<a href='${myarr[0][1]}'> ${myarr[0][0]}</>`)
console.log(`<a href='${myarr[1][1]}'> ${myarr[1][0]}</>`)
console.log(`<a href='${myarr[2][1]}'> ${myarr[2][0]}</>`)
