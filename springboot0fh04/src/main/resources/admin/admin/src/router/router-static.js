import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discussmeishiwenhua from '@/views/modules/discussmeishiwenhua/list'
    import meishiwenhua from '@/views/modules/meishiwenhua/list'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import discussmeishixinxi from '@/views/modules/discussmeishixinxi/list'
    import canting from '@/views/modules/canting/list'
    import discusscantingxinxi from '@/views/modules/discusscantingxinxi/list'
    import cantingxinxi from '@/views/modules/cantingxinxi/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import meishixinxi from '@/views/modules/meishixinxi/list'
    import orders from '@/views/modules/orders/list'
    import config from '@/views/modules/config/list'
    import caixifenlei from '@/views/modules/caixifenlei/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discussmeishiwenhua',
        name: '美食文化评论',
        component: discussmeishiwenhua
      }
      ,{
	path: '/meishiwenhua',
        name: '美食文化',
        component: meishiwenhua
      }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/discussmeishixinxi',
        name: '美食信息评论',
        component: discussmeishixinxi
      }
      ,{
	path: '/canting',
        name: '餐厅',
        component: canting
      }
      ,{
	path: '/discusscantingxinxi',
        name: '餐厅信息评论',
        component: discusscantingxinxi
      }
      ,{
	path: '/cantingxinxi',
        name: '餐厅信息',
        component: cantingxinxi
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/meishixinxi',
        name: '美食信息',
        component: meishixinxi
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/caixifenlei',
        name: '菜系分类',
        component: caixifenlei
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
