
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
    
    
        const video01 = document.querySelector('#video01')
        const video02 = document.querySelector('#video02')
        const play = document.querySelector('.play')
        const pause = document.querySelector('.pause')
        const play_bar01 = document.querySelector('.play_bar01')
        const play_bar02 = document.querySelector('.play_bar02')
        
        console.log(video01, video02, play, pause, play_bar01, play_bar02)
        // 비디오 플레이 포즈
        play.style.display = 'none'
        pause.addEventListener('click',function(){
            play.style.display = 'flex'
            pause.style.display = 'none'
            video01.pause();
            video02.pause();
        })
        play.addEventListener('click',function(){
            pause.style.display = 'flex'
            play.style.display = 'none'
            video01.play();
            video02.play();
        })
        video02.style.display = 'none';
        play_bar01.addEventListener('click',function(){
            video02.style.display = 'none';
            video01.style.display = 'block';
        })
        play_bar02.addEventListener('click',function(){
            video01.style.display = 'none';
            video02.style.display = 'block'
        })


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
        
        // 스크롤 내리면 snb 고정메뉴 불러오기
        const snb = document.querySelector('.snb')
        const category1 = document.querySelector('.category1')
        console.log(snb, category1)
        window.addEventListener("scroll", () => {
            if (window.scrollY > '500') {   // 스크롤Y 위치 값
            snb.setAttribute("style", "display: flex");
        } else {
            snb.setAttribute("style", "display: none;");
        }
    });
        const up_btn = document.querySelector('.up_btn')
        const down_btn = document.querySelector('.down_btn')
        console.log(up_btn, down_btn)
        up_btn.addEventListener('click',function(e){
            e.preventDefault();
            window.scrollTo(0,0);
        })
        down_btn.addEventListener('click',function(e){
            e.preventDefault();
            window.scrollTo(0,document.body.scrollHeight);
        })

        // 숫자 애니메이션 //
        

        const counter = (counterElement, max) => {
            let now = max;
        
            const handle = setInterval(() => {
                counterElement.innerHTML = Math.ceil(max - now).toLocaleString();
        
                if (now < 1) {
                    clearInterval(handle);
                }
        
                const step = now / 10;
                now -= step;
            }, 50);
        };
        
        window.onload = () => {
            const counters = document.querySelectorAll('.count-num');
            const maxValues = [6250, 50, 1.7, 6250, 5135, 6520, 6020];
        
            counters.forEach((counterElement, index) => {
                setTimeout(() => counter(counterElement, maxValues[index]), 0);
            });
        };
        // 스크롤 이벤트
const startCountersOnScroll = () => {
    const category5 = document.querySelector('.category5');
    const category5OffsetTop = category5.offsetTop;
    let started = false;

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY >= category5OffsetTop && !started) {
            const counters = document.querySelectorAll('.count-num');
            const maxValues = [6250, 50, 1.7, 6250, 5135, 6520, 6020];
            counters.forEach((counterElement, index) => {
                setTimeout(() => counter(counterElement, maxValues[index]), 0);
            });
            started = true;
            window.removeEventListener('scroll', handleScroll);
        }
    };
    window.addEventListener('scroll', handleScroll);
};
    window.addEventListener('load', startCountersOnScroll);

    
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
