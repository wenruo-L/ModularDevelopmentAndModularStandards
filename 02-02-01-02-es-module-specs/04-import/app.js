// import { name } from './module'
// import引入不能省略文件类型名
// import { name } from './module.js'
// console.log(name)

// import { lowercase } from './utils'
// import { lowercase } from './utils/index.js'
// console.log(lowercase('HHH'))

// import { name } from 'module.js'
// import { name } from './module.js'
// import { name } from '/04-import/module.js'
// import { name } from 'http://localhost:3000/04-import/module.js'
// console.log(name)

// --------------

// 加载这个模块但并不提供成员
// import {} from './module.js'
// import './module.js'

// ---------------

// 提取模块导出的所有成员并放在一个对象里
// import * as mod from './module.js'
// console.log(mod)

// ---------------
// 动态加载机制

// 情况一
// var modulePath = './module.js'
// import { name } from modulePath
// console.log(name)

// 情况二
// if (true) {
//   import { name } from './module.js'
// }

// 动态加载模块
// import('./module.js').then(function (module) {
//   console.log(module)
// })

// ----------------

// import { name, age, default as title } from './module.js'
import abc, {
    name,
    age
} from './module.js'
console.log(name, age, abc)