let fip = require('./index')
let t1 = fip('./','./index.html')
console.log(t1)

let t2 = fip('./index/','./test')
console.log(t2)


let t3 = fip('./index/','./index/index.html')
console.log(t3)

let t4 = fip('/','./index/index.html')
console.log(t4)

let t5 = fip('/','///')
console.log(t5)

let t6 = fip('../','C:\\github\\node-file-in-path\\')
console.log(t6)