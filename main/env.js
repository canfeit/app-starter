if (process.platform !== 'win32') {
  const { stdout } = require('child_process').spawnSync('/bin/bash', [
    '-lc',
    'env',
  ])
  if (stdout) {
    const ret = {}
    for (const line of stdout.toString().split('\n')) {
      const parts = line.split('=')
      ret[parts.shift()] = parts.join('=')
    }
    Object.assign(process.env, ret)
  }
}
