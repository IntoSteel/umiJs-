import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', 
    component: '@/layouts/baseLayout/index' ,
    routes:[
      {path:'/user/one',component:'@/pages/index'},
      {path:'/user/two',component:'@/pages/user'}

    ]
  },
    
  ],
  fastRefresh: {},
});
