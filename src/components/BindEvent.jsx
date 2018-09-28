// import React from 'react'

// export default class BindEvent extends React.Component {
//   constructor() {
//     super()
//     // 私有数据
//     this.state = {}
//   }

//   render() {
//     return <div>
//       BindEvent组件
//       <hr />
//       {/* 在React中，有一套自己的事件绑定机制；事件名，是小驼峰命名 */}
//       {/* <button onClick={function(){console.log('ok')}}>按钮</button> */}

//       {/* <button onClick={this.myclickHandler}>按钮</button> */}

//       {/* 注意：onClick只接受function作为处理函数 */}
//       {/* 注意：箭头函数，本身就是一个匿名的function函数 */}
//       <button onClick={()=>{this.myclickHandler()}}>按钮</button>

//     </div>
//   }

//   // 这是一个实例方法
//   myclickHandler = ()=> {
//     console.log('ooooooooooooookk')
//   }
// }












// #region 介绍React中绑定事件的标准格式
// import React from 'react'

// export default class BindEvent extends React.Component{
//   constructor() {
//     super()
//     this.state = {}
//   }

//   render() {
//     return <div>
//       <button onClick={()=>this.show('111', '222')}>按钮</button>
//     </div>
//   }

//   show = (arg1, arg2) => {
//     console.log('show方法被调用了' + arg1 + arg2)
//   }
// }
// #endregion









//#region 绑定事件，并在事件处理函数中，使用this.setState
// import React from 'react'

// export default class BindEvent extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       msg: '哈哈',
//       name: 'zs',
//       age: 22,
//       gender: 'male'
//     }
//   }

//   render() {
//     return <div>
//       {/* 需求：点击按钮，修改msg的值 */}
//       <button onClick={() => this.show('111', '222')}>按钮</button>
//       <h3>{this.state.msg}</h3>
//     </div>
//   }

//   show = (arg1, arg2) => {
//     // console.log('show方法被调用了' + arg1 + arg2)

//     // 注意：React中，如果想为state中的数据，重新赋值，不要使用this.state.***=值
//     // 应该调用React提供的this.setState({msg:'666'})
    

//     // console.log(this)

//     // this.state.msg = 'ooooookkkkkk'


//     // 在React中，推荐使用this.setState({})修改状态值
//     this.setState({
//       // 在setState，只会把对应的state状态更新，而不会覆盖其他的state状态
//       msg: '666666666666' + arg1 + arg2
//     }, function () {//回调
//       console.log(this.state.msg)
//     })


//     // 注意:this.setState方法的执行，是异步的
//     // 如果在调用完this.setState之后，又想立即拿到最新的state值，需要使用this.setState({}, callback)
//     // console.log(this.state.msg)

//   }
// }
//#endregion
