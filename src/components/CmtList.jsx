
import  React  from 'react'

// 导入评论项子组件
import CmtItem from '@/components/CmtItem'

// 使用class关键字，定义父组件
export default class CmtList extends React.Component {
  constructor() {
    super()
    this.state = {
      CommentList: [ //评论列表数据
        { id: 1, user: 'zz', content: 'hello' },
        {
          id: 2,
          user: 'zz2',
          content: 'hello'
        }, {
          id: 3,
          user: 'zz3',
          content: 'hello'
        }, {
          id: 4,
          user: 'zz4',
          content: 'hello'
        },
      ]
    }
  }

  render() {
    return <div>
      {/* {注意：在JSX中，如果想写行内样式了，不能为style设置字符串的值} */}
      {/* {而是应该这么写：style={{color: 'red'}} */}
      {/* <h1 style='color:red'>这是评论列表组件错误的写法</h1> */}
      {/* 在行内样式中，如果是数值类型的样式，则可以不用引号包裹，如果是字符串类型的样式值，必须用引号包裹 */}
      <h1 style={{color: 'red', fontSize: '35px', zIndex: 3, fontWeight: 200, textAlign: 'center'}}> 这是评论列表组件 </h1>
      {
        this.state.CommentList.map(item =>
          < CmtItem {...item}
        key={item.id} > < /CmtItem>)
    }

        <
        /div >
    }
}

