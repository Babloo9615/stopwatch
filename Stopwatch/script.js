let minute=0;
let hour=0;
let second=0;
let min=document.querySelector('.minutes');
let sec=document.querySelector('.second');
let hours=document.querySelector('.hour');
let startBtn=document.querySelector('.start');
let stopBtn=document.querySelector('.stop');
let resetBtn=document.querySelector('.reset');

startBtn.addEventListener('click',()=>{
  function start(){
    second++
    sec.innerHTML=second
     if(second==60){
             second=0
           minute++
             min.innerHTML=minute
             // clearInterval(c)
             
           }
           if(minute==60){
         minute=0
             hour++
             hours.innerHTML=hour
         
           }
   }let c=setInterval(start,1000)
  stopBtn.addEventListener('click',()=>{
    clearInterval(c)
  })
  resetBtn.addEventListener('click',()=>{
    second='00'
    minute='00'
    hour='00'
    sec.innerHTML=second
    min.innerHTML=minute
    hours.innerHTML=hour
    clearInterval(c)
  })
})