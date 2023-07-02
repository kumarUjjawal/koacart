const config = require('config')
module.exports = router => {
  router.get("/donate", async ctx => {
    ctx.state.model = {
      title: "Donate",
      amount: ctx.query.amount || config.get("settings.defaultDonation")
    }
    await ctx.render('donate')
  })
}

const getUrl = window.location;
const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
(function () {
  document
    .querySelector('#amount')
    .addEventListener('change', function (evt) {
      const amount = evt.target.value
      let buyButton = document.querySelector('#donate')
      buyButton.dataset.itemPrice = amount
      buyButton.dataset.itemId = donation
      buyButton.dataset.itemUrl = ${baseUrl}?amount=${amount}
    })
})();
