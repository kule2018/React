// 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 导入Hello组件
// 默认，如果不做单独配置的话，不能省略.jsx后缀名
// import Hello from './components/Hello.jsx'

// 注意：这里的@符号，表示项目根目录中的src这一层目录
import Hello from '@/components/Hello.jsx'



const dog = {}
name: '大黄',
    age: 3,
    gender: '雄'
}

// 3.调用render函数渲染  jsx XML比HTML严格多了
// 什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写JS表达式了，则需要把JS代码写到{}中
ReactDOM.render(
    // <div>
    // // 123 { /*直接把组件的名称，以标签形式，丢到页面上*/ } < {
    // //     /* Hello name = { dog.name }
    // //         age = { dog.age }
    // //         gender = { dog.gender } > < /Hello> < /
    // //         div > , */
    // // } <
    Hello {...dog } > < /Hello>
    document.getElementById('app')
)