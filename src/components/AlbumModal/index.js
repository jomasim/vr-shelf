import React, { useEffect, useState } from 'react'
import { Modal, Button, Input, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addAlbum } from '../../actions/albums'

const { Option } = Select

const AlbumModal = () => {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')

  const { loading, success } = useSelector(state => state.addAlbum)

  const clear = () => {
    setVisible(false)
    setName('')
  }

  useEffect(() => {
    if (success) {
      clear()
    }
  }, [success])

  const handleCancel = () => {
    clear()
  }
  const handleSubmit = () => {
    dispatch(addAlbum({ name, artist }))
  }

  const handleChange = ({ target }) => {
    setName(target.value)
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: '13.5%' }}>
      <Button type='primary' onClick={() => setVisible(true)}>
        add Album
      </Button>
      <Modal
        visible={visible}
        title='Add album'
        onOk={handleSubmit}
        onCancel={() => handleCancel()}
        footer={[
          <Button key='back' onClick={() => handleCancel()}>
            Cancel
          </Button>,
          <Button
            key='submit'
            type='primary'
            loading={loading}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ]}
      >
        <Input
          placeholder='name'
          value={name}
          onChange={evt => handleChange(evt)}
        />
        <Select
          defaultValue='john doe'
          style={{ width: '100%', marginTop: 20 }}
          onChange={handleChange}
        >
          <Option value='john doe'>Jack</Option>
          <Option value='jane doe'>Lucy</Option>
        </Select>
      </Modal>
    </div>
  )
}

export default AlbumModal
