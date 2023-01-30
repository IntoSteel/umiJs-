// import {request} from 'umi'
import request from '../utils/request'


export  function getDatas (params){
	return request('/api/index',{
		method:'GET',
		params
	})
}
export  function persionData (params){
	return request('/api/persion',{
		method:'POST',
		data:params
	})
}