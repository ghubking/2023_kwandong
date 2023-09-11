const nav_btn = document.querySelector('#nav_btn')
        const sub = document.querySelector('#sub')
        const close = document.querySelector('#close')
        const header = document.querySelector('header')
        const headerHeight = header.getBoundingClientRect().height;
        console.log(nav_btn, sub, close, header)
        sub.style.transform = 'translateY(-100%)'
        sub.style.transtion = 'transform 1s ease'
        nav_btn.addEventListener('click',function(){
            sub.style.transform = 'translateY(0)'
        })
        close.addEventListener('click',function(){
            sub.style.transform = 'translateY(-100%)'
        })
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
        
            
        
        
        