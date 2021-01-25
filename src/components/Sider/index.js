import React from 'react'
import { Layout, Menu } from 'antd'
import { UserOutlined, FolderViewOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Sider } = Layout

const appSider = () => (
  <Sider
    width={300}
    trigger={null}
    collapsible
    collapsed={false}
    style={{ background: '#ededed' }}
  >
    <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
      <Menu.Item key='1' icon={<UserOutlined />}>
        <Link to='/'>Artists</Link>
      </Menu.Item>
      <Menu.Item key='2' icon={<FolderViewOutlined />}>
        <Link to='/albums'>Albums</Link>
      </Menu.Item>
    </Menu>
  </Sider>
)

export default appSider
