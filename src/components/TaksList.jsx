import React from 'react'
import { Task } from './Task'

export const TaksList = ({ taksList = [] }) => {
  return (
    <div className="mt-7">
      <div className="grid gap-4 grid-flow-row md:grid-cols-3 lg:grid-cols-4">
        {taksList?.map((task) => (
          <Task key={task._id} {...task} />
        ))}
      </div>
    </div>
  )
}
