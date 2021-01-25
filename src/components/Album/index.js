import React from 'react'
import { Card, Avatar } from 'antd'
const { Meta } = Card
const Album = () => (
  <Card style={{ width: '70vw', marginTop: 16, cursor:'pointer' }} loading={false}>
    <Meta
      avatar={
        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
      }
      title='Coming Home'
      description='Town west group'
    />
  </Card>
)

export default Album
