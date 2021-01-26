import { notification } from 'antd'
const notify = (type, errorDescription) => {
  notification[type]({
    message: type,
    description: errorDescription
  })
}

export default notify
