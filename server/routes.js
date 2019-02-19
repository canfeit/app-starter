const sys = require('./controllers/sys')
module.exports = {
  GET: {
    '/api/sysinfo': sys.info,
  },
  POST: {},
  PUT: {},
  DELETE: {},
}
