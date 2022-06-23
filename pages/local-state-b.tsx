import { FC } from 'react'
import LocalStateB from '../components/LocalStateB'
import Layout from '../components/Layout'

const LocalStatePageA: FC = () => {
  return (
    <Layout title="Local State A">
      <LocalStateB />
    </Layout>
  )
}

export default LocalStatePageA
