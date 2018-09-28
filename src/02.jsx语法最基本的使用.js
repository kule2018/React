// 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2.创建虚拟DOM元素
// 回顾;什么是虚拟DOM 用js对象的形式，来表示DOM和DOM之间的嵌套关系
// const mydiv = React.createElement('div', { id: 'mydiv', title: 'div aaa' }, '这是一个div元素')

// HTML最优秀的标记语言
// 注意：在js文件中，默认不能写这种类似于HTML的标记；否则打包会失败
// 可以使用babel来转换这些js中的标签
// 注意：这种在js中，混合写入类似于HTML的语法，叫做JSX语法；符合XML规范的js
// 注意：jsx语法的本质，还在运行的时候，被转换成React.createElement形式来执行的
// const mydiv = <div id = "mydiv" title = "div aaa"> 这是一个div元素 <h1 > 这是一个H1 </h1></div>
const mydiv = < div id = 'mydiv'
title = 'gggg' > div元素 < h1 > h1元素 < /h1></div >

    // 3.调用render函数渲染
    ReactDOM.render(mydiv, document.getElementById('app'))