import React, { useEffect, useState } from 'react'
import { Modal, Button, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addArtist } from '../../actions/artists'

const ArtistModal = () => {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')

  const { loading, success } = useSelector(state => state.addArtist)

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
    dispatch(addArtist({ name }))
  }

  const handleChange = ({ target }) => {
    setName(target.value)
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: '13.5%' }}>
      <Button type='primary' onClick={() => setVisible(true)}>
        add Artist
      </Button>
      <Modal
        visible={visible}
        title='Add artist'
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
      </Modal>
    </div>
  )
}

export default ArtistModal
