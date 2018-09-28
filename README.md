##清楚两个概念：
+ library（库）：小而巧的是库。只提供了特定的API，优点就是船小好调头，可以很方便的从一个库切换到另外的库，但是代码几乎不会改变
+ Framework（框架）：大而全的是框架。框架提供了一整套的解决方案，所以，如果在项目中间，想切换到另外的框架，是比较困难的

## 组件化方面
1. 什么是模块化：是从代码的角度进行分析的。把一些可复用的代码，抽离为单个模块，便与项目的维护和开发。
2. 什么是组件化：是从UI界面的角度进行分析的：把一些可复用的UI元素，抽离为单独的组件，便与项目的维护和开发：
3. 组件化的好处：随着项目规模的增大，手里的组件越来越多。很方便就能把现有的组件，拼接为一个完整的页面：
4. Vue是如何实现组件化的：通过 .vue 文件，来创建对应的组件：
   + template 结构
   + script 行为
   + style 样式 
5. React如何实现组件化：注意：React中有组件化的概念，但是，并没有像vue这样的组件模板文件，React中，一切都是以js来表现的；因此要学习React，js要合格，es6，es7（async和await）要会用

## React中几个核心概念
### 虚拟DOM（Virtual Document Object Model）
+ Dom 的本质是什么：浏览器中的概念，用js对象来表示页面上的元素，并提供了操作DOM对象的API；
+ 什么是React中的虚拟DOM：是框架中的概念，是程序员用js对象来模拟页面上的DOM和DOM嵌套
+ 为什么要实现虚拟DOM（虚拟DOM的目的）：为了实现页面中，DOM元素的高效更新
+ DOM和虚拟DOM的区别：
  1. DOM:浏览器中，提供的概念；用js对象，表示页面上的元素，并提供了操作元素的API；
  2. 虚拟DOM：是框架中的概念。是开发框架的程序员手动用js对象来模拟DOM元素和嵌套关系
   + 本质：用js对象，来模拟dom元素和嵌套关系
   + 目的：就是为了实现页面元素的高效更新

## Diff算法
+ tree diff:新旧两棵dom树，逐层对比的过程，就是tree Diff；当整棵Dom逐层对比完毕，则所需要更新的元素，必然能够找到 
+ component diff；在进行Tree Diff的时候，每一层中，组件级别的对比，叫做Component Diff
   1. 如果对比前后，组件类型相同，则暂时认为此组件不需要被更新
   2. 如果对比前后，组件类型不同，则需要移除旧组件，创建新组建，并追加到页面上
+ element diff：在进行组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫做Element Diff

## 创建基本的weppack4.x项目
1. 运行`npm init -y`快速初始化项目
2. 在项目根目录创建src源代码目录和dist产品目录
3. 在src目录下创建index.html
4. 使用npm安装webpack，运行`npm i webpack webpack-cli -D`
   + 全局运行`npm i cnpm -g`,就可以用cnpm装包了，国内的，比较快
5. 注意：webpack 4.x提供了约定大于配置的概念：目的是尽量减小配置文件的体积；
   + 默认约定了：
   + 打包的入口是src -> index.js
   + 打包的输出文件是dist -> main.js
   + 4.x中新增了mode选项（此选项为必选项），可选的值为：development 和 production


## React中创建组件
### 第一种-创建组建的方式
1. 使用构造函数来创建组件，如果要接收外界传递的数据，需要在构造函数的参数列表中使用props来接收，必须要向外return一个合法的JSX创建的虚拟DOM；
   + 创建组件：
    `function Hello () {
      <!-- return null -->
      return <div>Hello组件</div>
    }`
  + 为组件传递数据：
   `
   <!-- 使用组件，并为组件传递props数据 -->
   <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>
   <!-- 在构造函数中，使用props形参，接收外界传过来的数据 -->
   function Hello(props) {
     <!-- props.name = 'zs' -->
     console.log(props)
     <!-- 结论：不论是Vue还是React，组件中的props永远都是只读的；不能被重新赋值 -->
     return <div>这是Hello组件--{props.name}--{props.age}--{props.gender}</div>
   }`
   1. 父组件向子组件传递数据
   2. 使用{...obj}属性扩散传递数据
   3. 将组件封装到单独的文件中
   4. 注意：组件的名称首字母必须是大写
   5. 如何省略.jsx后缀名：
   `
   <!-- 打开webpack.config.js，并在导出的配置对象中，新增如下节点 -->
    resolve: { //表示，这几个文件的后缀名，可以省略不写
        extensions: ['.js', '.jsx', '.json']
    }
   `

   ## 第二种-创建组件的方式
   + 使用class关键字来创建组件
   + ES6中class关键字，是实现面向对象编程的新形势

## 基于class关键字创建组件
1. 最基本的组件结构
   `
   <!-- 如果要使用class定义组件，必须让自己的组件，继承自React.Component -->
   class 组件名称 extends React.Component {
     <!-- 在组件内部，必须有render函数,作用：渲染当前组件对应的虚拟DOM结构-->
     render(){
       <!-- render函数中，必须返回合法的JSX虚拟DOM结构 -->
       return <div>这是class创建的组件</div>
     }
   }
   `

2. 两种创建组件方式的对比
   + 注意：使用class关键字创建的组件，有自己的私有数据（this.state）和生命周期函数；但是使用function创建的组件，只有props，没有自己的私有数据和生命周期函数
 1. 用构造函数创建出来的组件：叫做“无状态组件”[今后用的不多]
 2. 用class关键字创建出来的组件：叫做“有状态组件”【今后用的最多】
 3. 什么情况下使用有状态组件？什么情况下使用无状态组件？
   + 如果一个组件需要有自己的私有数据，则推荐使用：class创建的有状态组件；
   + 如果一个组件不需要有私有的数据，则推荐使用：无状态组件
   + React官方说：无状态组件，由于没有自己的state和生命周期函数，所以运行效率会比有状态组件稍微高一些
   有状态组件和无状态组件之间的本质区别就是：有无state属性和有无生命周期函数
4. 组件中的props和state/data之间的区别
   + props中的数据都是外界传递过来的；
   + state/data中的数据，都是组件私有的；（通过Ajax获取回来的数据，一般都是私有数据）
   + props中的数据都是只读的，不能重新赋值
   + state/data中的数据，都是可读可写的

## 设置样式
### 在项目中启用模块化并同时使用bootstrap
1. 把自己的样式表，定义为.scss文件
2. 第三方的样式表，还是以.css结尾
3. 我们只需要为自己的.scss文件，启用模块化即可
4. 运行`npm i sass=loader node-sass -D`安装能够解析scss文件的loader

## 组件的生命周期
+ 生命周期的概念：每个组件的实例，从创建，到运行，直到销毁，会触发一系列事件，这些事件就叫做组件的生命周期函数

+ React组件生命周期分为三个部分：
  1. 组件创建阶段：特点：一辈子只执行一次
   + componentWillMount:
   + render:
   + componentDidMount:
  2. 组件的运行阶段：按需，根据props属性或state状态的改变，有选择的执行0到多次
   + componentWillReceiveProps:
   + shouldComponentUpdate:
   + componentWillUPDATE:
   + render:
   + componentDidUpdate:
  3. 组件的销毁阶段：一辈子只执行一次
   + componentWillUnmount:
