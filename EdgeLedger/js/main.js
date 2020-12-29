const navSlide=()=>{
    
    var burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    
    const navLinks=document.querySelectorAll('.nav-links li');
    
    var element=document.querySelector('.hero');
    
  
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        nav.classList.toggle('action');
        
        burger.classList.toggle('toggle');
    });
}

navSlide();
