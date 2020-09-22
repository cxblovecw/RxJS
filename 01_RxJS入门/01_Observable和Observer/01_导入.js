// ES6方式导入 一:
// import rx1 from 'rxjs'; // 此处不是module 不能用import

// CommonJS风格导入
const rx2=require('rxjs');

// html中也可以通过script标签的src导入

// 2. 通常使用时 只导入自己需要的部分
const {Observable}=require('rxjs');

// console.log(Observable)

