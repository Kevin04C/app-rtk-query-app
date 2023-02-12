import React from 'react'

export const TaksForm = () => {
  return (
    <form className="py-2 md:w-2/5 mx-auto">
      <h1 className="text-3xl font-extrabold mb-4">Create a new task</h1>
      <div className="mb-3">
        <label className="block mb-1 text-gray-400">Name taks</label>
        <input
          type="text"
          name="taks"
          placeholder="some taks"
          className="py-1 px-3 outline-none rounded-md border border-slate-300 w-full"
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        className="bg-neutral-800  text-white rounded-md px-4 py-2 font-bold w-full hover:bg-neutral-700 transition-colors"
      >
        {' '}
        Create taks
      </button>
    </form>
  )
}
