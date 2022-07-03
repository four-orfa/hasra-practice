import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { getPage, initTestHelpers } from 'next-page-tester'
import { handlers } from '../mock/handlers'

initTestHelpers()

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Hasura CRUD Test Case', () => {
  it('Should render the list of users by useQuery', async () => {
    const { page } = await getPage({
      route: '/hasura-crud',
    })
    render(page)
    expect(screen.getByText('Hasura CRUD')).toBeInTheDocument()
    expect(await screen.findByText('user1')).toBeInTheDocument()
    expect(
      await screen.findByTestId('edit-7c80374d-8312-461e-8fc0-e9c55b3e72b1')
    ).toBeTruthy()
    expect(
      await screen.findByTestId('edit-ca8396a7-1e5b-46c6-b28b-1615e5daf324')
    ).toBeTruthy()
    expect(
      await screen.findByTestId('edit-8a07b056-f948-4f29-bca8-ae346ab5c0c7')
    ).toBeTruthy()
    expect(
      await screen.findByTestId('delete-7c80374d-8312-461e-8fc0-e9c55b3e72b1')
    ).toBeTruthy()
    expect(
      await screen.findByTestId('delete-ca8396a7-1e5b-46c6-b28b-1615e5daf324')
    ).toBeTruthy()
    expect(
      await screen.findByTestId('delete-8a07b056-f948-4f29-bca8-ae346ab5c0c7')
    ).toBeTruthy()
  })
})
