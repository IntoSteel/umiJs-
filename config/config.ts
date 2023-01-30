import { defineConfig } from 'umi';
import routes from './router.config.ts'
import defaultSettings from './defaultSettings.ts'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
	// Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
    // 'primary-color': '#1890FF'

  },
  routes,
  fastRefresh: {},
});
