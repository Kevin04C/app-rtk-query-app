import React from 'react'

export const HasErrorForm = ({ hasError, text, className }) => {
  return (
    hasError && (
      <span className={`block w-full text-xs text-red-500 mt-5 ${className}`}>
        {text}
      </span>
    )
  )
}
