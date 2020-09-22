const {Observable}= require('rxjs');
const timer=new Observable(subscriber=>{
  let number=1;
  const handle=setInterval(()=>{
    subscriber.next(number++);
    if(number>5){
      clearInterval(handle)
    }
  },1000)
})

timer.subscribe(data=>{
  console.log(data)
})