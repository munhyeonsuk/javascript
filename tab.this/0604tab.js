window.onload = function(){
    const tabbtn = document.querySelectorAll("#tab li");
    // li들 저장
  
  
    tabbtn.forEach(function(ele, idx){
      //li들 각각 명령선언
         
          ele.addEventListener('click', function(){
              //li가 클릭되었을때 처리될 명령
  
              const hrefValue = this.querySelector('a').getAttribute('href');
              //this는 클릭한 li이기 때문에 그 안의 a태그를 먼저 선택하고 
              //그 속성 href의 값을 가져와서 hrefValue에 저장한다.
              const targetele = document.querySelector(hrefValue);
              //href값과 일치하는 객체 저장
            
  
              const t_sibligns =  document.querySelectorAll(".content > div");
              //컨텐츠들 모두
  
              t_sibligns.forEach(function(ele, idx){
                   ele.classList.add("d-none");
                   //일단 모두 숨긴다.
              })
              targetele.classList.remove('d-none');
              //그리고 클릭a링크와 동일한 객체만 보여준다.
  
              const siblings = this.parentElement.children;
              // 나의 부모의 자식들(html object) -> 노드객체 -> forEach사용불가
              for (let sibling of siblings) {
                  sibling.classList.remove('on');
                  //일단 모든 li on빼서 빨강색없앤다.
              }
             
              this.classList.add('on');
              //클랙 객체만 on클래스 추가해서 빨강색으로 노출한다.
          })
    })
  }
