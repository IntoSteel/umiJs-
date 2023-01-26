import { request } from 'umi';

// 获取数据
const getTags = ()=>{
		return request('/api/index')
}
export default {
	
	namespace:'tag' ,// 调用model的时候，通过命名空间调用，不能和其他model同名。
	state:{
		tagList:[]
	},        // 状态 跟react中的state类似，和redux中保存的state一样。
	effects:{        // 调用服务端接口，获取数据
		// 下面是接口请求，所以一般进行异步操作，所以使用 * yield 来实现异步。
		// payload  接收ui组件中dispatch时传递的参数;
		// callback 回调函数
		// put   可以将获取到的传递给reducers来更新state。
		// call  可以让我们访问外部的方法，也就是这个文件内的方法
		*fetchTags({payload,callback},{put,call}){
			// 获取tags数据
			const response = yield call(getTags)
			//调用reducers
			yield put({
				type:'setTags', //类似于 redux 中的action 的 type
				payload:response
			})
		}
	},      
	reducers:{    // 更新 state
		// 两个参数
			//第一个：之前的state数据，
			//第二个：就是上面 put方法调用reducers传过来的数据，包括type。
		setTags(state,action){
			// 这个setTags是一个纯函数，为了不影响其他数据，所以使用return 返回出去。
			console.log(action,'action')
			return {...state,tagList:action.payload.tagList}
		}
	}      
}