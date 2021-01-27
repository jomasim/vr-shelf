import React from 'react'
import { Layout } from 'antd'
import Sider from '../../components/Sider'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TrackListing from '../../containers/TrackListing'

const { Content } = Layout
const Tracks = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        <Sider />
        <Content
          className='site-layout-background'
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <TrackListing />
        </Content>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default Tracks
