
const nav_btn = document.querySelector('#nav_btn')
        const sub = document.querySelector('#sub')
        const close = document.querySelector('#close')
        const header = document.querySelector('header')
        const headerHeight = header.getBoundingClientRect().height;
        console.log(nav_btn, sub, close, header)
        // 서브메뉴 위에서 내려오는 효과
        sub.style.transform = 'translateY(-100%)'
        sub.style.transtion = 'transform 1s ease'
        nav_btn.addEventListener('click',function(){
        sub.style.transform = 'translateY(0)'
        })
        close.addEventListener('click',function(e){
            e.preventDefault();
            sub.style.transform = 'translateY(-100%)'
        })
        // 헤더메뉴 마우스 스크롤시 블랙적용
        window.addEventListener("scroll", () => {
            if (window.scrollY > headerHeight) {
            header.setAttribute("style", "background: #000;");
        } else {
            header.setAttribute("style", "background: transparent;");
        }
    });
    
    


        // sns, family 글상자 토글버튼 //
        const sns_wrap = document.querySelector('.sns_wrap')
        const family_wrap = document.querySelector('.family_wrap')
        const sns = document.querySelector('.sns')
        const sns_btn = document.querySelector('.sns_btn')
        const family_btn = document.querySelector('.family_btn')
        const family = document.querySelector('.family')
        const active = document.querySelectorAll('.active')
        console.log(sns_wrap, family_wrap, sns, family, sns_btn, active)
        // sns_wrap.style.display = 'none'
        // sns_btn.addEventListener('click',function(){
        //     sns_wrap.classList.toggle('active')
        // })
        // family_btn.addEventListener('click',function(){
        //     family_wrap.classList.toggle('active')
        // })
        $(document).ready(function() {
            $('.family_btn').click(function() {
            $('.family_wrap').slideToggle(500);
            });
        });
        $(document).ready(function() {
            $('.sns_btn').click(function() {
            $('.sns_wrap').slideToggle(500)
            });
            });
            
        $(document).ready(function() {
            $('#check_btn').click(function() {
            $('.menubars').slideToggle(500);
            });
        });




        // 모바일 서브메뉴 토글
        const btn = document.querySelectorAll('.sub_contents_title')
        const list = document.querySelectorAll('.text_list')
        const tab = document.querySelectorAll('.sub_contents_title2')
        const see = document.querySelectorAll('.sub_contents_title2>ul')
        console.log(btn, list, tab, see)
        for (let i=0; i < btn.length; i++) {
            btn[i].addEventListener('click', ()=> {
                list[i].classList.toggle('active');
            });
        }
        for (let i=0; i < tab.length; i++) {
            tab[i].addEventListener('click', ()=> {
                see[i].classList.toggle('active');
            });
        }
        // btn.forEach(btn => { 
            //     btn.addEventListener ("click", function() {
        //         list.forEach(function(list){
        //         list.classList.toggle('active')
        //     });
        // })
        // })
        
        

    
    // // 모바일 서브메뉴 토글 슬라이드
    // $(document).ready(function(){
	// 	// $(".sub_contents ul.text_list").hide();
	// 	$(".sub_contents ul li").click(function(){
	// 		$("ul",this).slideToggle("fast");
	// 	});
	// });

    // $(document).ready(function(){
	// 	// $(".sub_contents2 ul").hide();
	// 	$(".sub_contents2 ul li").click(function(){
	// 		$("ul",this).slideToggle("fast");
	// 	});
	// });


    // a태그 눌렀을때 맨위로 가는거 막는 제이쿼리
    // $("a").click(function(e){
    //     e.preventDefault();
    // });
