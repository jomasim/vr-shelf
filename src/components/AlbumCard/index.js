import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Avatar } from 'antd'
const { Meta } = Card
const Album = ({ data }) => {
  const history = useHistory()
  const image_url =
    data.albumInfo && data.albumInfo.images.length
      ? data.albumInfo.images[0]
      : 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'

  const { tracks = 0, listeners = 0 } = data.albumInfo
  const description = `Tracks: ${tracks.length} | Listeners: ${listeners} `
  const showTracks = () => {
    history.push(`/tracks/${data.name}`, data)
  }

  return (
    <Card
      style={{ width: '70vw', marginTop: 16, cursor: 'pointer' }}
      loading={false}
      onClick={showTracks}
    >
      <Meta
        avatar={
          <Avatar src={image_url} style={{ height: '100px', width: '100px' }} />
        }
        title={data.name}
        description={description || ''}
      />
    </Card>
  )
}
export default Album
