import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import cantingList from '../pages/canting/list'
import cantingDetail from '../pages/canting/detail'
import cantingAdd from '../pages/canting/add'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import cantingxinxiList from '../pages/cantingxinxi/list'
import cantingxinxiDetail from '../pages/cantingxinxi/detail'
import cantingxinxiAdd from '../pages/cantingxinxi/add'
import caixifenleiList from '../pages/caixifenlei/list'
import caixifenleiDetail from '../pages/caixifenlei/detail'
import caixifenleiAdd from '../pages/caixifenlei/add'
import meishixinxiList from '../pages/meishixinxi/list'
import meishixinxiDetail from '../pages/meishixinxi/detail'
import meishixinxiAdd from '../pages/meishixinxi/add'
import meishiwenhuaList from '../pages/meishiwenhua/list'
import meishiwenhuaDetail from '../pages/meishiwenhua/detail'
import meishiwenhuaAdd from '../pages/meishiwenhua/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'canting',
					component: cantingList
				},
				{
					path: 'cantingDetail',
					component: cantingDetail
				},
				{
					path: 'cantingAdd',
					component: cantingAdd
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'cantingxinxi',
					component: cantingxinxiList
				},
				{
					path: 'cantingxinxiDetail',
					component: cantingxinxiDetail
				},
				{
					path: 'cantingxinxiAdd',
					component: cantingxinxiAdd
				},
				{
					path: 'caixifenlei',
					component: caixifenleiList
				},
				{
					path: 'caixifenleiDetail',
					component: caixifenleiDetail
				},
				{
					path: 'caixifenleiAdd',
					component: caixifenleiAdd
				},
				{
					path: 'meishixinxi',
					component: meishixinxiList
				},
				{
					path: 'meishixinxiDetail',
					component: meishixinxiDetail
				},
				{
					path: 'meishixinxiAdd',
					component: meishixinxiAdd
				},
				{
					path: 'meishiwenhua',
					component: meishiwenhuaList
				},
				{
					path: 'meishiwenhuaDetail',
					component: meishiwenhuaDetail
				},
				{
					path: 'meishiwenhuaAdd',
					component: meishiwenhuaAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
