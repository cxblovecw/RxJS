// 观察者模式
// Observable 可被观察者(Publisher  发布者)
// Observer   观察者
const {Observable,of, observable}=require('rxjs');
const source$=of(1,2,3);  // 产生事件
source$.subscribe(data=>{ // 响应事件
  console.log(data)
});

// 迭代器模式
// 拉:主动获取  通过http请求获取数据
// 推:被动接收  服务器端的WebSocket传递数据回来
