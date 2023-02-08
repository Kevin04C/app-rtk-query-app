import React from 'react'
import { Toaster } from 'react-hot-toast'

export const Layout = ({ children }) => {
  return (
    <section className="px-5 xl:px-0 min-h-screen bg-slate-100 pt-5">
      <div className="max-w-6xl mx-auto">{children}</div>
      <Toaster />
    </section>
  )
}
