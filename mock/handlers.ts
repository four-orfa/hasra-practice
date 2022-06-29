/**

* @jest-environment jsdom

*/
import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: '7c80374d-8312-461e-8fc0-e9c55b3e72b1',
            name: 'user1',
            created_at: '2022-02-19T16:26:37.998684+00:00',
          },
          {
            __typename: 'users',
            id: 'ca8396a7-1e5b-46c6-b28b-1615e5daf324',
            name: 'user2',
            created_at: '2022-03-18T16:26:37.998684+00:00',
          },
          {
            __typename: 'users',
            id: '8a07b056-f948-4f29-bca8-ae346ab5c0c7',
            name: 'user3',
            created_at: '2022-04-20T16:26:37.998684+00:00',
          },
        ],
      })
    )
  }),

  graphql.query('GetUserIds', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: '7c80374d-8312-461e-8fc0-e9c55b3e72b1',
          },
          {
            __typename: 'users',
            id: 'ca8396a7-1e5b-46c6-b28b-1615e5daf324',
          },
          {
            __typename: 'users',
            id: '8a07b056-f948-4f29-bca8-ae346ab5c0c7',
          },
        ],
      })
    )
  }),

  graphql.query('GetUsers', (req, res, ctx) => {
    const { id } = req.variables
    if (id === '7c80374d-8312-461e-8fc0-e9c55b3e72b1') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '7c80374d-8312-461e-8fc0-e9c55b3e72b1',
            name: 'user1',
            created_at: '2022-02-19T16:26:37.998684+00:00',
          },
        })
      )
    }
    if (id === 'ca8396a7-1e5b-46c6-b28b-1615e5daf324') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: 'ca8396a7-1e5b-46c6-b28b-1615e5daf324',
            name: 'user2',
            created_at: '2022-03-18T16:26:37.998684+00:00',
          },
        })
      )
    }
    if (id === '8a07b056-f948-4f29-bca8-ae346ab5c0c7') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '8a07b056-f948-4f29-bca8-ae346ab5c0c7',
            name: 'user3',
            created_at: '2022-04-20T16:26:37.998684+00:00',
          },
        })
      )
    }
  }),
]
