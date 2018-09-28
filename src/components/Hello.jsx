import React from 'react'


// 第一种创建组建的方式
export default function Hello(props) {
    // 如果在一个组件中return一个null，则表示组件是空的，什么都不渲染
    // return null
    // 在组件中，必须返回一个合法的JSX虚拟DOM元素
    // props.name = 'zs'
    console.log(props)
        // 结论：不论是Vue还是React，组件中的props永远都是只读的，不能被重新赋值
    return <div> 这是HELLO组件---{ props.name }---{ props.age }---{ props.gender }</div>
}

// 把组件暴露出去
// export default Hello

