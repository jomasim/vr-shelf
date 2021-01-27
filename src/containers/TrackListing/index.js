import { useLocation } from 'react-router-dom'
import { Table } from 'antd'
import AlbumCard from '../../components/AlbumCard'
import Empty from '../../components/Empty'

const TrackListing = () => {
  const { state: album } = useLocation()
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration'
    }
  ]
  return (
    <div>
      {album ? (
        <div>
          <AlbumCard data={album} />
          <Table
            style={{ marginTop: '40px', width: '70vw' }}
            columns={columns}
            dataSource={album.albumInfo.tracks || []}
          />
        </div>
      ) : (
        <Empty />
      )}
    </div>
  )
}
export default TrackListing
