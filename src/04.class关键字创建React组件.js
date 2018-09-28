// 导入包
// import React, {Component} from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import {
    userInfo
} from 'os';

// import '@/07.class实例方法和静态方法'

// 导入class继承
// import '@/03.class-继承-公共方法'

// class关键字创建组件
class Movie extends React.Component {

    // 构造器
    constructor() {
        // 由于Movie组件，继承了React.Component这个父类，所以，自定义构造器中，必须调用super（）
        super()
            // 只有调用了super（）以后，才能使用this关键字
        this.state = {
                msg: '大家好，我是class创建的Movie组件'
            } //这个this.state = {}，就相当于Vue中的data（）{return{}}
    }




    // render函数的作用是，渲染当前组件所对应的虚拟DOM元素
    render() {
        // 注意：不论是class还是普通function创建的组件，他们的props都是只读的
        // this.props.name = 'ls'
        // return null
        // 在class关键字创建的组件中，如果想使用外界传递过来的props参数，不需要接收，直接通过this.props.***访问即可
        // 在class创建的组件中，this.state上的数据，都是可读可写的
        this.state.msg = 'msg的值被我修改了'
        return <div > { /* 注意：在class组件内部，this表示当前组件的实例对象 */ }
        这是Movie组件--{
            this.props.name
        }--{
            this.props.age
        }--{
            this.props.gender
        } <
        h3 > {
            this.state.msg
        } < /h3>    < /
        div >
    }
}

const user = {
    name: 'zs',
    age: 33,
    gender: 'male'
}

// 3.调用render函数渲染  jsx XML比HTML严格多了
// 什么情况下需要使用{}呢？当我们需要在JSX控制的区域内，写JS表达式了，则需要把JS代码写到{}中
ReactDOM.render( <
    div > 123

    { /*这里的Movie标签，其实就是Movie类的一个实例对象  */ } <
    Movie name = {
        user.name
    }
    age = {
        user.age
    } > < /Movie>  <
    Movie {...user
    } > < /Movie> < /
    div > ,

    document.getElementById('app')
)