// 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 第一种创建组建的方式
function Hello(props) {
    // 如果在一个组件中return一个null，则表示组件是空的，什么都不渲染
    // return null
    // 在组件中，必须返回一个合法的JSX虚拟DOM元素
    // props.name = 'zs'
    console.log(props)
        // 结论：不论是Vue还是React，组件中的props永远都是只读的，不能被重新赋值
    return <div > 这是HELLO组件-- - { props.name }-- - { props.age }-- - { props.gender } < /div>
}

const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

// 3.调用render函数渲染  jsx XML比HTML严格多了
// 什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写JS表达式了，则需要把JS代码写到{}中
ReactDOM.render( <
    div >
    123 { /*直接把组件的名称，以标签形式，丢到页面上*/ } < {
        /* Hello name = { dog.name }
            age = { dog.age }
            gender = { dog.gender } > < /Hello> < /
            div > , */
    } <
    Hello {...dog } > < /Hello>
    document.getElementById('app')
)