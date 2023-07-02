module.exports = (router, productLoader) => {
  router.get("/buy/:slug", async ctx => {
    const product = await productLoader.single(ctx.prams.slug)
    if(product) {
      ctx.state.model = {
        title: product.name,
        product: product
      }
      await ctx.render('product')
    }
  })
}
