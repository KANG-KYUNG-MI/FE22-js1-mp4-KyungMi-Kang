
const animationInfo = {

    targets: '#container h2',
    
    translateX:{
        value:'330px',
        delay: anime.stagger(100)
    },
    
    opacity: {
        value:'1.0',
        delay: anime.stagger(100),
    
    },
    
    color: {
        value: 'hsl(0, 50%, 90%)',
        delay: anime.stagger(300)
    },
    
    scale: {
        value: 3,
        delay: anime.stagger(100)
    },
    
    duration:2500,
    
    easing: 'easeInOutBounce',
    direction: 'alternate',
    loop: true,
    autoplay: false
    }
    
    const handle = anime(animationInfo);
    
    const playBtn = document.querySelector('#playBtn');
    const pauseBtn = document.querySelector('#pauseBtn');
    const stopBtn = document.querySelector('#stopBtn');
    
    playBtn.addEventListener('click', handle.play);
    pauseBtn.addEventListener('click', handle.pause);
    stopBtn.addEventListener('click', function() {
    
        handle.restart();
        handle.pause();
    })
    