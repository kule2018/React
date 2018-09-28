// 导入包
import React from 'react'
import ReactDOM from 'react-dom'

let a = 10
let str = 'hello'
let boo = true
let title = '5555'
const h1 = < h1 > ggggggggggggg < /h1>
const arr = [ <
    h2 > hhhhhhhhhhh222 < /h2>, <
    h3 > hhhhhhhhhhh333 < /h3>
]
const arrStr = ['dd', 'aa', 'ee']

// 定义一个空数组，将来用来存放名称，标签[方案一]
const nameArr = []
    // 注意：React中，需要把key添加给被foreach或map或for循环直接控制的元素
arrStr.forEach(item => {
    const temp = < h5 key = { item } > { item } < /h5>
    nameArr.push(temp)
});

// 数组的map方法, map中必须写return
const result = arrStr.map(item => {
    return item + '==='
})

console.log(result)

// 3.调用render函数渲染  jsx XML比HTML严格多了
// 什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写JS表达式了，则需要把JS代码写到{}中
ReactDOM.render( < div > { a } <
        hr / > { str } <
        hr / > { boo.toString() } <
        hr / > { boo ? '条件为真' : '条件为假' } <
        hr / > < p title = { title } > 这是p标签 < /p> <
        hr / > { h1 } { /* < */ } { /* hr / > { arr } < */ }
        hr / > { nameArr } <
        hr / > {
            arrStr.map(item => {
                return <h3 key = { item } > { item } < /h3>
            })
        } <
        hr / > { /* {jsx中多行注释} */ } {
            // 这是注释，年看不见我
        } <
        hr / >
        <
        p className = "myele" > aaaaaaaa < /p> <
        hr / >
        <
        lable htmlFor = "ppp" > 111 < /lable>

        <
        /div>, document.getElementById('app'))