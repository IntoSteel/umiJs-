import styles from './index.less';
import { DatePicker as TDatePicker} from 'antd';

export default function IndexPage() {
  let DatePicker:any =TDatePicker
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
       {/* <DatePicker  /> */}
    </div>
  );
}
