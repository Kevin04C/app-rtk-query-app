import { useState } from 'react'

export const useForm = (initialState) => {
  const [stateForm, setStateForm] = useState(initialState)

  const handleInputChange = ({ target }) => {
    setStateForm({
      ...stateForm,
      [target.name]: target.value
    })
  }

  const resetForm = () => {
    setStateForm(initialState)
  }

  return {
    // properties
    stateForm,
    ...stateForm,

    // methods
    resetForm,
    handleInputChange
  }
}
