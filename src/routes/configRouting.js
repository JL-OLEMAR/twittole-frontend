import Error404 from '../page/Error404'
import Home from '../page/Home'

export default [
  {
    path: '/',
    exact: true,
    page: Home
  },
  {
    path: '*',
    page: Error404
  }
]
