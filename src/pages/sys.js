import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import axios from 'axios'
const getSysInfo = () => axios.get('/sysinfo')
export default () => (
  <Layout>
    <SEO title="系统信息" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)
