// 1、创建ui组件
// 2、创建 model
// 3、将ui组件和 model 进行连接(connect)

import { Button} from 'antd';
import React from 'react';
 import { connect} from 'umi'

const TagTest =(props) => {
	// 通过打印props，会发现，如果connect连接成功，打印会得到命名空间为tag中的数据，比如这里是tagList。
	// 同时打印会发现dispatch这个方法，这个方法用来更新model中state中的数据。
	console.log(props.tag,'props') //
	const {dispatch} = props
	const getData =()=>{
		// 1、这时候打印props.tag会发现还是个空数组，因为数据还没更新。
		console.log(props.tag,'props.tag')
		// 使用model，获取数据
		dispatch({
			type:'tag/fetchTags',  //更新那个命名空间的方法
			payload:null,//我们需要传递的参数，可以不传。由fetchTags参数的payload来接收。
		})
		// 2、就算是在dispatch后打印，还是空数组，因为props还是以前的props,只有重新渲染了，props才是最新的数据。
		// console.log(props.tag,'props.tag')

	}
  return (
    <div>
			<Button onClick={getData}>点击获取数据</Button>
    </div>
  );
}
// connect()(TagTest)
// 第一个()里面是一个回调函数，返回一个对象，所以用 ({})
		//这个返回的对象，会传递给后面接收的(TagTest),这样在TagTest组件里可以通过props来接收，通过props拿到这个对象中的数据。
// 第一个()里面这个回调函数，参数值本来是所有的model，但是一般是使用我们需要的那个model，所以使用解构。
		// 
export default connect(({tag})=>({tag}))(TagTest)
