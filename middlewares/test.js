module.exports = async (ctx, next) => {
  console.log('this is test middleware before')
  await next()
  console.log('this is test middleware after')
}