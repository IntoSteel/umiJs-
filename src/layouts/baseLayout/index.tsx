import React from 'react';
const Index = (props:any) => {
	return(
		<div>
			<h2>我是头部</h2>
			{props.children}
			<h2>我是尾部</h2>
		</div>
	)
}
export default Index