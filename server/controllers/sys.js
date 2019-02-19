var os = require('os')

exports.info = (req, res) => {
  var mem = process.memoryUsage()
  var format = function(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + 'MB'
  }
  const sec2date = s => {
    var d = Math.floor(s / 60 / 60 / 24)
    var h = Math.floor(s / 60 / 60) % 24
    var m = Math.floor(s / 60) % 60
    return `${d}天${h}小时${m}分${s % 60}秒`
  }
  res.end(
    JSON.stringify({
      现在时间: new Date(),
      系统临时目录: os.tmpdir(),
      主目录: os.homedir(),
      主机名: os.hostname(),
      总物理内存: Math.round(os.totalmem() / 1024 / 1024 / 1024) + ' GB',
      可用物理内存: Math.round(os.freemem() / 1024 / 1024 / 1024) + ' GB',
      CPU: os.cpus(),
      CPU架构: os.arch(),
      network: os.networkInterfaces(),
      操作系统: os.type() + os.release(),
      Node版本: process.versions,
      编译平台: process.platform,
    })
  )
  console.log(
    '堆内存总量 ' +
      format(mem.heapTotal) +
      ' 已用堆内存 ' +
      format(mem.heapUsed) +
      ' 实际使用物理内存 ' +
      format(mem.rss)
  )
  console.log('已运行:', sec2date(os.uptime()))
}
