const gnb={
    d1: {
        text : "회사소개",
        href : "./company.html"
    },
    d2 : [
        {
            text : "CEO 인사말",
            href : "./CEO.html"
            },
        {
            text : "회사소개",
            href : "./company.html"
            }
    ]
    }

console.log(`<a href="${gnb.d2[0].href}">${gnb.d2[0].text}</a>`)

