const {Observable}=require('rxjs');
const source$=new Observable((subscriber)=>{
  const timer=setInterval(() => {
    console.log(new Date())
    subscriber.next("数据")
  }, 1000);
  subscriber.unsubscribe();
  return {
    // 取消订阅时触发
    unsubscribe(){
      clearInterval(timer)
    }
  }
})

// 获取订阅
const subscription=source$.subscribe(data=>{console.log(data)})
// 取消订阅
subscription.unsubscribe();



