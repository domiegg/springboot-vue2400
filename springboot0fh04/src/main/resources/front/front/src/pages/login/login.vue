<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","backgroundImage":"url(http://codegen.caihongy.cn/20221026/dfa16b1e27da4aacaf5408c8a8adddab.png)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"padding":"40px 20px 20px","margin":"0","borderRadius":"10px","top":"0","background":"#fff","width":"570px","position":"absolute","right":"0","height":"100%"}' :rules="rules">
			<div v-if="true" :style='{"width":"100%","margin":"150px  0 0 0","lineHeight":"1.5","fontSize":"32px","color":"rgba(51,51,51,1)","textAlign":"center"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"width":"100%","margin":"20px 0","lineHeight":"1.5","fontSize":"24px","color":"#ab85d3","textAlign":"center"}'>一款基于BS的美食网站的设计与实现登录</div>
			<el-form-item class="list-item" :style='{"width":"80%","margin":"50px auto","borderColor":"#ab85d3","borderStyle":"solid","borderWidth":"0 0  1px 0"}' prop="username">
				<div v-if="true" :style='{"width":"20%","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>账号：</div>
				<input :style='{"border":"0","padding":"0 10px","color":"#999","display":"inline-block","width":"70%","fontSize":"14px","height":"44px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item class="list-item" :style='{"width":"80%","margin":"50px auto","borderColor":"#ab85d3","borderStyle":"solid","borderWidth":"0 0  1px 0"}' prop="password">
				<div v-if="true" :style='{"width":"20%","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center","display":"inline-block"}'>密码：</div>
				<input :style='{"border":"0","padding":"0 10px","color":"#999","display":"inline-block","width":"70%","fontSize":"14px","height":"44px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>
			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"80%","margin":"20px auto"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>
			<el-form-item :style='{"width":"80%","margin":"20px auto"}'>
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"10px 20px","outline":"none","color":"#666","borderRadius":"10px","background":"linear-gradient(90deg, rgba(255,233,100,1) 0%, rgba(194,248,126,1) 29%, rgba(181,233,252,1) 61%, rgba(246,172,218,1) 100%)","width":"40%","fontSize":"18px","height":"44px"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button :style='{"border":"2px solid #494592","cursor":"pointer","padding":"0 24px","margin":"10px 20px","outline":"none","color":"#000","borderRadius":"10px","background":"none","width":"40%","fontSize":"14px","height":"44px"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"width":"80%","margin":"20px auto"}'>
			<router-link :style='{"cursor":"pointer","margin":"0 5px","fontSize":"14px","textDecoration":"none","color":"#706bae","background":"#fff"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
		</el-form>
    </div>
</div>
</template>

<script>


export default {
	//数据集合
	data() {
		return {
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"餐厅","menuJump":"列表","tableName":"canting"}],"menu":"餐厅管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除","查看评论"],"menu":"餐厅信息","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"菜系分类","menuJump":"列表","tableName":"caixifenlei"}],"menu":"菜系分类管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除","查看评论"],"menu":"美食信息","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除","审核","查看评论"],"menu":"美食文化","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","删除","月销量","日销量","日销额","月销额"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-full","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已支付订单","tableName":"orders/已支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"餐厅信息","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除","查看评论"],"menu":"美食信息","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-camera","buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"餐厅","tableName":"canting"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除","查看评论"],"menu":"美食文化","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}]
		}
	},
	created() {
        for(let item in this.roleMenus) {
            if(this.roleMenus[item].hasFrontLogin=='是') {
                this.roles.push(this.roleMenus[item]);
            }
        }
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
              if (res.data.code === 0) {
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('UserTableName', this.loginForm.tableName);
                localStorage.setItem('username', this.loginForm.username);
                localStorage.setItem('adminName', this.loginForm.username);
                localStorage.setItem('sessionTable', this.loginForm.tableName);
                localStorage.setItem('role', this.role);
                localStorage.setItem('keyPath', this.$config.indexNav.length+2);
                this.$router.push('/index/center');
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  duration: 1500,
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			border: 0;
			padding: 0 10px;
			color: #999;
			display: inline-block;
			width: 70%;
			font-size: 14px;
			height: 44px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			border: 0;
			padding: 0 10px;
			outline: none;
			color: #999;
			background: rgba(232, 240, 255,1);
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 154px);
			font-size: 14px;
			height: 44px;
		}
		
		.list-type /deep/ .el-radio__input .el-radio__inner {
			background: rgba(53, 53, 53, 0);
			border-color: #666666;
		}
		.list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
			background: rgba(76, 72, 147, 1);
			border-color: rgba(76, 72, 147, 1);
		}
		.list-type /deep/ .el-radio__label {
			color: #999;
			font-size: 14px;
		}
		.list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
			color: rgba(76, 72, 147, 1);
			font-size: 14px;
		}
	}
</style>
