import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Header } = Layout

const appHeader = () => (
  <Header className='header' style={{ background: '#fff' }}>
    <Menu
      theme='light'
      mode='horizontal'
      defaultSelectedKeys={['1']}
      style={{ float: 'right' }}
    >
      <Menu.Item key='1' icon={<UserOutlined />} />
    </Menu>
  </Header>
)

export default appHeader
