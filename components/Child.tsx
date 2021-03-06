import { FormEvent, memo, FC } from 'react'

interface Props {
  printMessage: () => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

const Child: FC<Props> = memo(function Child({ printMessage, handleSubmit }) {
  return (
    <>
      {console.log('Child rendered')}
      <p>Child Component</p>
      <button
        className="my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
        onClick={printMessage}
      >
        click
      </button>
    </>
  )
})
export default Child
