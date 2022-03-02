import { createApp } from 'vue';
import App from './App.vue'

// * Styles
import '@/styles/index.scss';

// * ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// * 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons'
// 导入转换图标名称的函数
import { transElIconName } from '@/utils/utils.js'

// * Router
import { Router } from '@/router/index.js';

// * 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// * 引入vuex
import { store } from './store'


const app = createApp(App);

// 统一注册el-icon图标
for (let [k, v] of Object.entries(ElIconModules)) {
  app.component(transElIconName(k), v)
}


app.use(Router);
app.use(store);
app.use(VueAxios, axios);
app.use(ElementPlus, { size: "mini" })

app.mount('#app');

