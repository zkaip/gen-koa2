const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.add = async (ctx, next) => {
  await User.create({
    name: 'user_'+ Math.random().toString(16).slice(2),
    password: '123456'
  })
  ctx.redirect('/users');
}

exports.get = async (ctx, next) => {
  console.log('this is get users methods')
  
  ctx.state = {
    title: 'Users Detail'
  }
  await ctx.render('user', {
    users: await User.find({})
  })
}