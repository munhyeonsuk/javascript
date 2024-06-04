
import hd_yys from "./navi.json/"

window.onload = function(){
    let navitag = "";

    for(x in hd_yys.gnb){
        navitag += `<li class='${hd_yys.gnb[x].cls[0]}'>
        <a href='${hd_yys.gnb[x].href}' class='${hd_yys.gnb[x].cls[1]}'>
        ${hd_yys.gnb[x].Text}
        </a>`;

        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `<ul>`;
        for(j in hd_yys.gnb[x].gnb_ul_li){
            navitag +=`<li>
            <a href='${hd_yys.gnb[x].gnb_ul_li[j].href}'>
                 ${hd_yys.gnb[x].gnb_ul_li[j].Text}
            </a>
            </li>`
        }
        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `</ul>`
        navitag += `</li>`
    }
    document.querySelector("#gnb").innerHTML = navitag;
}