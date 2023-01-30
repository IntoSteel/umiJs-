import styles from './index.less';
import { DatePicker as TDatePicker,Button} from 'antd';
import { request } from 'umi';
import {getDatas,persionData} from '@/services/user'

export default function IndexPage() {
  let DatePicker:any =TDatePicker
	const getData = async()=>{
		const data = await getDatas()
		console.log(data,'我是servicer中的接口的get请求')
		const persionDatas = await persionData()
		console.log(persionDatas,'我是servicer中的接口的POST请求')

	}
  return (
    <div>
      {/* <h1 className={styles.title}>Page index</h1> */}
       <DatePicker  />
			 <Button onClick={getData}> 点击获取数据</Button>
			
    </div>
  );
}
