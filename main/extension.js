const installer = require('electron-devtools-installer')
Promise.all([
  installer.default(installer.REACT_DEVELOPER_TOOLS),
  installer.default(installer.REDUX_DEVTOOLS),
])
  .then(name => console.log(`Added Extension:  ${name}`))
  .catch(console.error)
