import React from 'react'
import PropTypes from 'prop-types'

function SideBarItem({ icon: Icon, text, ...rest }) {
  return (
    <section className="flex pl-8 gap-4 py-3 justify-start items-center hover:bg-default-200 hover:cursor-pointer"
      {...rest}
    >
      <Icon className='text-lg' />
      <p className='text-sm'>{text}</p>
    </section>
  )
}

SideBarItem.propTypes = {
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default SideBarItem

