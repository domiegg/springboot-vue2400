export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"餐厅","menuJump":"列表","tableName":"canting"}],"menu":"餐厅管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除","查看评论"],"menu":"餐厅信息","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"菜系分类","menuJump":"列表","tableName":"caixifenlei"}],"menu":"菜系分类管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除","查看评论"],"menu":"美食信息","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除","审核","查看评论"],"menu":"美食文化","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","删除","月销量","日销量","日销额","月销额"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-full","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已支付订单","tableName":"orders/已支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"餐厅信息","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除","查看评论"],"menu":"美食信息","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息管理"},{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-camera","buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"餐厅","tableName":"canting"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除","查看评论"],"menu":"美食文化","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","查看评论"],"menu":"餐厅信息列表","menuJump":"列表","tableName":"cantingxinxi"}],"menu":"餐厅信息模块"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","查看评论"],"menu":"美食信息列表","menuJump":"列表","tableName":"meishixinxi"}],"menu":"美食信息模块"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"美食文化列表","menuJump":"列表","tableName":"meishiwenhua"}],"menu":"美食文化模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
