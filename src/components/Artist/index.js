import React from 'react'
import { Card, Avatar } from 'antd'
const { Meta } = Card
const Artist = ({ data }) => (
  <Card
    style={{ width: '70vw', marginTop: 16, cursor: 'pointer' }}
    loading={false}
  >
    <Meta
      avatar={
        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
      }
      title={data.name}
      description='This is the description'
    />
  </Card>
)

export default Artist
