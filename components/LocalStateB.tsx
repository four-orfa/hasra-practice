import { FC } from 'react'
import { todoVar } from '../cache'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'

const LocalStateB: FC = () => {
  const todo = useReactiveVar(todoVar)

  return (
    <>
      {todo.map((task, index) => {
        return (
          <p className="mb-3" key={index}>
            {task.title}
          </p>
        )
      })}
      <Link href="/local-state-a">
        <a>Back</a>
      </Link>
    </>
  )
}

export default LocalStateB
