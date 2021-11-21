import axios from 'axios'

// format for axois.get()
export default async function myAxios(
  url = '',
  data = {},
  type = 'GET',
  //passing file type for upload
  config = {}
) {
  if (type === 'GET') {
    let dataStr = ''
    Object.keys(data).forEach((key) => {
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url += '?' + dataStr
    }
    return axios.get(url, config)
  } else {
    return axios.post(url, data)
  }
}
