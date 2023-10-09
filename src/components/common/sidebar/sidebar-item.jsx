import React from 'react'
import PropTypes from 'prop-types'

function SideBarItem({ children, text }) {
  return (
    <>
      <div className="flex flex-col">
        <section className="flex pl-8 gap-4 py-3 justify-start items-center border hover:bg-default-200 hover:cursor-pointer">
          {children}
          <p className='text-sm'>{text}</p>
        </section>
      </div>
    </>
  )
}

SideBarItem.propTypes = {
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default SideBarItem

