const { Observable, observable } = require("rxjs");

// 创建Observable

// 可以看出被观察者者做的事 
// 所做的事有限定 不能自定义事件
const onSubscribe=subscriber=>{
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  console.log("被观察者所做的事 当调用subscribe时触发");
}
// 将被观察者做的事与被观察者Observable关联起来
const source$=new Observable(onSubscribe);
// 观察者 可将next看成一件事 定义观察者根据被观察者所作的不同的事 做出什么样的响应
const theObserver={
  next:(item)=>{console.log(item)},
}

// 被观察者开始做事 并触发观察者对应的响应
// subscription为当前订阅
const subscription=source$.subscribe(theObserver) 
// 等价于 就是把代码抽离了
// source$.subscribe((data)=>{console.log(data)})
subscription.unsubscribe(); // 取消订阅


// 写法二
const mySource$=new Observable(subscriber=>{
  subscriber.next('数据');              // 下一步 传递数据
  subscriber.error('自行抛出的错误');   // 抛出错误
  subscriber.complete();               // Observable结束
});
// 三种事件 对应三种响应 
mySource$.subscribe(data=>{
  console.log(data);
},(err)=>{
  console.log(err)
},()=>{
  console.log("完成时触发")
})