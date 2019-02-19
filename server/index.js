// @ts-check
'use strict'
const serve = require('serve-handler')
const http = require('http')
const routes = require('./routes')
const { port } = require('../common/config')
const front_path = require('path').join(__dirname, '..', 'public')
http
  .createServer((request, response) => {
    const { method, url } = request
    const { pathname } = new URL(url, 'http://localhost')
    console.info(method, ':', pathname)
    if (routes[method]) {
      const controller = routes[method][pathname]
      controller
        ? controller(request, response)
        : serve(request, response, {
            public: front_path,
          })
    } else response.end('')
  })
  .listen(port, () => console.log(`Server running at http://localhost:${port}`))
