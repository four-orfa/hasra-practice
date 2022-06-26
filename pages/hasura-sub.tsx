import { FC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_USERS_LOCAL, GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'
import Layout from '../components/Layout'

const FetchSub: FC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS_LOCAL)

  if (error) {
    return (
      <Layout title="Hasura fetchSub">
        <p>{error.message}</p>
      </Layout>
    )
  }

  return (
    <Layout title="sub">
      <p className="mb-6 font-bold"> Hasura sub page</p>
      {data?.users.map((user) => (
        <p className="my-1" key={user.id}>
          {user.name}
        </p>
      ))}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchSub
