import React from 'react'
import SideBar from '../components/Sidebar'

const pageone = () => {
  return (
  <div className="flex">
    <SideBar />
    <div>
      <h1 className="text-white">Page one</h1>
    </div>
  </div>
  )
}

export default pageone