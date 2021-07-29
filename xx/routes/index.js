const router = require('koa-router')()
const fs=require('fs')
const axios=require('axios')
// fs是nodejs提供给我们的内置模块，fs，读取文件的相关信息
// readFileSync 读取文件，文件路径相对于根路径

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/number', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f')
  var ids = response.data.data.map((v,i)=>{
    return v;
  })
  console.log(ids);
  ctx.body = {
    errcode:0,
    errmsg:'ok',
    ids
  }
})

router.get('/shoes', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f')
  var ids = response.data.data.map((v,i)=>{
    return v;
  })
  ctx.body = {
    ids
  }
})
router.get('/man', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f')
  var mans = response.data.data.map((v,i)=>{
    return v;
  })
  ctx.body = {
    mans
  }
})

router.get('/phone', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/goodsLevel?token=1ec949a15fb709370f')
  var phone = response.data.data.map((v,i)=>{
    return v;
  })
  ctx.body = {
   phone
  }
})

router.get('/ocom', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f')
  var ocom = response.data.data.map((v,i)=>{
    return v;
  })
  ctx.body = {
   ocom
  }
})

router.get('/oclass', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f ')
  var oclass = response.data.data.map((v,i)=>{
    return v;
  })
  ctx.body = {
   oclass
  }
})

router.get('/trousers', async (ctx, next) => {
  var response = await axios.get('http://vueshop.glbuys.com/api/home/category/show?cid=493&token=1ec949a15fb709370f ')
  var trousers = response.data.data.map((v,i)=>{
    return v;
  })
  ctx.body = {
    trousers
  }
})

// router.get('/evaluate', async (ctx, next) => {
//   var response = await axios.get('http://vueshop.glbuys.com/api/home/reviews/index?gid=704407997&token=1ec949a15fb709370f&page=1 ')
//   var evaluate = response.data.data.map((v,i)=>{
//     return v;
//   })
//   ctx.body = {
//     evaluate
//   }
// })




module.exports = router
