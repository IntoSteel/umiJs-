export default [
	{ path: '/', 
	component: '@/layouts/baseLayout/index' ,
	routes:[
		{path:'/user/one',component:'@/pages/index'},
		{path:'/user/two',component:'@/pages/user'},
		{path:'/tagTest',component:'@/pages/tagTest'},

	]
},

	
]