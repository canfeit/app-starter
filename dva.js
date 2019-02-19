import React from 'react'
import { Provider } from 'react-redux'
import { create } from 'dva-core'
import loading from 'dva-loading'
import model from './src/models'
const app = create()
app.use(loading())
app.model(model)
app.start()
export const wrapRootElement = ({ element }) => (
  <Provider store={app._store}>{element}</Provider>
)
