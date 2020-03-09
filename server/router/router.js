'use strict'

import Router from 'koa-router'
import App from '../controllers/app'
module.exports = function () {
  var router = new Router({
    // prefix: '/api'
  })
  router.get('/example', App.example);
  return router
}