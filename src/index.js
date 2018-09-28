// 导入包
// import React, {Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

// 导入评论组件
// import CmtList from '@/components/CmtList2'

import BindEvent from '@/components/BindInputValue'


// 3.调用render函数渲染  jsx XML比HTML严格多了
ReactDOM.render( <
    div >
    <
    BindEvent > < /BindEvent> < /
    div > ,

    document.getElementById('app')
)