import React from 'react'
import { Layout } from 'antd'
import Sider from '../../components/Sider'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import AlbumListing from '../../containers/AlbumListing'

const { Content } = Layout
const Home = () => {
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
          <AlbumListing />
        </Content>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default Home
