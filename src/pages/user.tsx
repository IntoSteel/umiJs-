import styles from './index.less';
import { DatePicker as TDatePicker,Button} from 'antd';
import { request } from 'umi';

export default function IndexPage() {
  let DatePicker:any =TDatePicker
	const getData = async()=>{
		//请求数据 GET
		//方式一：
		// request('/api/index').then((res:any) => {
		// 	console.log(res,'我是获取的数据')
		// }).catch(() => {
		// });
		// 方式二：
		const data = await request('/api/index')
		console.log(data,'我是获取的数据')
		// 请求数据 Post
		const dataPost = await request('/api/persion',{method: 'POST'})
		console.log(data,'我是获取的数据')
	}
  return (
    <div>
      {/* <h1 className={styles.title}>Page index</h1> */}
       <DatePicker  />
			 <Button onClick={getData}> 点击获取数据</Button>
			
    </div>
  );
}
