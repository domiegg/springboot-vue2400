<template>
	<div class="main-containers">
		<div class="top-container" :style='{"padding":"0 20px","alignItems":"center","display":"flex","justifyContent":"space-around","overflow":"hidden","top":"0","left":"0","flexWrap":"wrap","background":"#fff","width":"100%","position":"fixed","height":"auto","zIndex":"1002"}'>
			<img v-if='false' :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","display":"block","height":"44px"}' src='http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg'>
			<div v-if="true" :style='{"boxShadow":"10px 10px 0 rgba(184, 180, 233,.5)","padding":"0 30px","margin":"0 0 24px 0%","color":"rgba(171,133,211,1)","borderRadius":"0 0 10px 10px","textAlign":"center","background":"rgba(239, 239, 239,.5)","width":"auto","fontSize":"30px","fontWeight":"600","order":"0"}'>一款基于BS的美食网站的设计与实现</div>
			<div>
				<div v-if="false" :style='{"color":"#666","fontSize":"14px","display":"inline-block"}'>0753-1234567</div>
				<el-button v-if="!Token" @click="toLogin()" :style='{"border":"0","padding":"0 12px","margin":"10px 10px","color":"#666","borderRadius":"20px","background":"linear-gradient(90deg, rgba(255,233,100,1) 0%, rgba(194,248,126,1) 29%, rgba(181,233,252,1) 61%, rgba(246,172,218,1) 100%)","display":"inline-block","width":"80px","fontSize":"16px","lineHeight":"32px","height":"32px","order":"1"}'>登录/注册</el-button>
                <el-button v-if="Token" @click="logout" :style='{"padding":"0 12px","margin":"10px 0 0 0px","borderColor":"rgba(171,133,211,1)","color":"#666","display":"inline-block","borderRadius":"20px","background":"none","borderWidth":"1px","width":"80px","fontSize":"16px","lineHeight":"32px","borderStyle":"solid","height":"32px","order":"5"}'>退出</el-button>
			</div>
		</div>
		
		
		<div class="body-containers" :style='"horizontal" == "vertical" ? {"minHeight":"100vh","padding":"64px 0 0","margin":"0 0 0 210px","position":"relative","background":"rgba(64, 158, 255, .3)","display":"block"} : {"minHeight":"100vh","padding":"64px 0 0","margin":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20221107/2b1ea40e3b86476581f55111adaaf415.png) fixed"}'>
			<div class="menu-preview" :style='{"padding":"0","borderColor":"#e2cbf7","background":"rgba(205, 210, 239,.8)","borderWidth":"0px 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}'>
				<el-menu class="el-menu-horizontal-demo" :style='{"border":0,"padding":"16px 0 0px 0","listStyle":"none","margin":"0 auto","alignItems":"center","background":"none","display":"flex","width":"1200px","position":"relative","justifyContent":"space-between","height":"76px"}' :default-active="activeIndex" :unique-opened="true" mode="horizontal" :router="true" @select="handleSelect">
					<el-image v-if="false" :style='{"width":"44px","margin":"8px 10px 8px 0","objectFit":"cover","borderRadius":"100%","float":"left","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
					<el-menu-item v-for="(menu, index) in menuList" :index="index + ''" :key="index" :route="menu.url">
						<i v-if="true" :style='{"padding":"0 10px 0 0","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"60px"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px 0 4px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"60px"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item @click="goBackend">
						<i v-if="true" :style='{"padding":"0 10px 0 0","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"60px"}' class="el-icon-box"></i>
						<span :style='{"padding":"0 10px 0 4px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"60px"}'>后台管理</span>
					</el-menu-item>
					<el-menu-item :index="menuList.length + 1 + ''" @click="goMenu('/index/cart')">
						<i v-if="true" :style='{"padding":"0 10px 0 0","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"60px"}' class="el-icon-shopping-cart-2"></i>
						<span :style='{"padding":"0 10px 0 4px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"60px"}'>购物车</span>
					</el-menu-item>
					<el-menu-item :index="menuList.length + 2 + ''" v-if="Token && notAdmin" @click="goMenu('/index/center')">
						<i v-if="true" :style='{"padding":"0 10px 0 0","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"60px"}' class="el-icon-user"></i>
						<span :style='{"padding":"0 10px 0 4px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"60px"}'>个人中心</span>
					</el-menu-item>
				</el-menu>
			</div>
			
			<div class="banner-preview" :style='{"width":"100%","height":"auto"}'>
				<el-carousel :style='{"width":"1200px","margin":"10px auto"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="400px" :autoplay="true" :interval="3000" :loop="true">
					<el-carousel-item :style='{"borderRadius":"10px","width":"100%","height":"100%"}' v-for="item in carouselList" :key="item.id">
						<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + item.value" fit="cover"></el-image>
					</el-carousel-item>
				</el-carousel>
			</div>
			
			<router-view></router-view>
			
			<div class="bottom-preview" :style='{"minHeight":"150px","padding":"20px 0","margin":"20px 0 0 0","alignItems":"center","background":"#404040","flexDirection":"column","display":"flex","width":"100%","justifyContent":"center"}'>
			    <img :style='{"width":"84px","objectFit":"cover","borderRadius":"10px","display":"none","height":"84px"}' src="http://codegen.caihongy.cn/20221025/08cc4c2a6d624b3a81c474cda7a103a1.webp" >
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#ccc"}'></div>
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#ccc"}'></div>
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#ccc"}'></div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"餐厅","menuJump":"列表","tableName":"canting"}],"menu":"餐厅管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除","查看评论"],"menu":"餐厅信息","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"菜系分类","menuJump":"列表","tableName":"caixifenlei"}],"menu":"菜系分类管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除","查看评论"],"menu":"美食信息","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除","审核","查看评论"],"menu":"美食文化","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","删除","月销量","日销量","日销额","月销额"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-full","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已支付订单","tableName":"orders/已支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"餐厅信息","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除","查看评论"],"menu":"美食信息","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-camera","buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"餐厅","tableName":"canting"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除","查看评论"],"menu":"美食文化","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			form: {
				ask: '',
				userid: localStorage.getItem('userid')
			},
			Token: localStorage.getItem('Token'),
            notAdmin: localStorage.getItem('sessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],	
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('Token')
        },
    },
    methods: {
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		goBackend() {
			window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
		},
		goMenu(path) {
            if (!localStorage.getItem('Token')) {
                this.toLogin();
            } else {
                this.$router.push(path);
            }
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	
	    & /deep/ .scrollbar-wrapper {
	      overflow-x: hidden;
	    }
	  }
	}
	
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item {
		cursor: pointer;
		border: 0;
		padding: 0 24px 0 12px;
		margin: 0;
		background-size: 100% 100%;
		color: #666;
		white-space: nowrap;
		display: flex;
		font-size: 20px;
		line-height: 100px;
		align-items: center;
		background-image: url(http://codegen.caihongy.cn/20221025/ef39df5caf8e4e78913bd4825807ccce.png);
		position: relative;
		list-style: none;
		height: 100px;
	}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item:hover {
		cursor: pointer;
		border: 0;
		padding: 0 24px 0 12px;
		margin: 0;
		background-size: 100% 100%;
		color: #000;
		white-space: nowrap;
		font-size: 14px;
		line-height: 100px;
		background-color: rgba(0,0,0,0);
		background-image: url(http://codegen.caihongy.cn/20221105/5256a4756f514175b3cb9ff7c031a49b.png);
		position: relative;
		list-style: none;
		height: 100px;
	}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.is-active {
		cursor: pointer;
		border: 0;
		padding: 0 24px 0 12px;
		margin: 0;
		background-size: 100% 100%;
		color: #000;
		white-space: nowrap;
		font-size: 18px;
		line-height: 100px;
		background-color: rgba(0,0,0,0);
		background-image: url(http://codegen.caihongy.cn/20221105/5256a4756f514175b3cb9ff7c031a49b.png);
		position: relative;
		list-style: none;
		height: 100px;
	}
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: rgba(204,204,204,.5);
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: rgba(204,204,204,.5);
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0 0 8px 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.7;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 1;
		height: 12px;
	}

    .chat-content {
      .left-content {
          width: 100%;
          text-align: left;
      }
      .right-content {
          width: 100%;
          text-align: right;
      }
    }
</style>
