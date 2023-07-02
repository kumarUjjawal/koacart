module.exports = (router, productLoader) => {
  router.get('/', async ctx => {
    const products = await productLoader.all()
    ctx.state.model = {
      title: 'Hey',
      products: products
    }
    await ctx.render('home')
  })
}
