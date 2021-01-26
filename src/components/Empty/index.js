import React from 'react'
import { Empty } from 'antd'
const EmptyContainer = () => (
  <Empty
    image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
    imageStyle={{
      height: 60
    }}
    description={<span>No data available</span>}
  ></Empty>
)

export default EmptyContainer
