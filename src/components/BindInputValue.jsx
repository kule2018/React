import React from 'react'

export default class BindEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '哈哈',
      name: 'zs',
      age: 22,
      gender: 'male'
    }
  }

  render() {
    return <div>
      {/* 需求：点击按钮，修改msg的值 */}
      <button onClick={() => this.show('111', '222')}>按钮</button>
      <h3>{this.state.msg}</h3>

      
      {/* 如果我们只是把文本框的value属性，绑定到了state状态，但是如果不提供onChange处理函数的话，得到的将会是一个只读的文本框 */}

      {/* 当为文本框绑定value值以后，要么同时提供一个readOnly，要么，提供一个onChange处理函数 */}
      {/* <input type="text" style={{width: '100%'}} value={this.state.msg} readOnly></input> */}

      <input type="text" style={{ width: '100%' }} value={this.state.msg} onChange={(e)=>this.txtChanged(e)} ref="txt"></input>
    </div>
  }

  // 每当文本框内容变化了，必然会调用这个txtChanged
  txtChanged = (e) => {
    // console.log('变化了')

    // 在onChange事件中，获取文本框的值，有两种方案
    // 方案1：通过事件参数e来获取
    // console.log(e.target.value)

    // console.log(this.refs.txt.value)

    const newVal = e.target.value

    this.setState({
      msg: newVal
    })
  }


  show = (arg1, arg2) => {
    // console.log('show方法被调用了' + arg1 + arg2)

    // 注意：React中，如果想为state中的数据，重新赋值，不要使用this.state.***=值
    // 应该调用React提供的this.setState({msg:'666'})


    // console.log(this)

    // this.state.msg = 'ooooookkkkkk'


    // 在React中，推荐使用this.setState({})修改状态值
    this.setState({
      // 在setState，只会把对应的state状态更新，而不会覆盖其他的state状态
      msg: '666666666666' + arg1 + arg2
    }, function () {//回调
      console.log(this.state.msg)
    })


    // 注意:this.setState方法的执行，是异步的
    // 如果在调用完this.setState之后，又想立即拿到最新的state值，需要使用this.setState({}, callback)
    // console.log(this.state.msg)

  }
}

