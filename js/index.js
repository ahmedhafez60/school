let span = document.querySelector(".up");

window.onscroll = function () {

    this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


let toggle = document.querySelector('#toggleDark');
let body = document.querySelector('body');
let black =document.querySelector('#black');
let card = document.querySelector('.card');
let abg = document.querySelector('.abg');
let aoh = document.querySelector('.aoh');
let a_1 = document.querySelector('.a_1');
let a_2 = document.querySelector('.a_2');
let a_3 = document.querySelector('.a_3');
let flex_2  = document.querySelector('.flex-2 ');
let flex_8  = document.querySelector('.flex-8');
let mn_1  = document.querySelector('.mn_1');
let mn_2  = document.querySelector('.mn_2');
let mn_3  = document.querySelector('.mn_3');
let mn_4  = document.querySelector('.mn_4');
let mn_5  = document.querySelector('.mn_5');
let mn_6  = document.querySelector('.mn_6');
let mn_7  = document.querySelector('.mn_7');


toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background='white';
        body.style.color='black'
        body.style.transition='2s'
        flex_2.style.background='black';
        flex_2.style.color='white';
    }else{
       
        body.style.background='black';
        body.style.color='white';
        card.style.color='black'
        abg.style.color='black'
        aoh.style.color='black'
        a_1.style.color='black'
        a_2.style.color='black'
        a_3.style.color='black'
        flex_2.style.background='white';

        flex_8.style.color='black';
        
        flex_2.style.color='black';
        mn_1.style.color='black';
        mn_2.style.color='black';
        mn_3.style.color='black';
        mn_4.style.color='black';
        mn_5.style.color='black';
        mn_6.style.color='black';
        mn_7.style.color='black';
        
       
        
        

        body.style.transition='3s'


    }
})
