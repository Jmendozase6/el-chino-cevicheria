import React from 'react'

import { Button } from '@nextui-org/react';

import SideBar from '../components/common/sidebar/sidebar'
import MainHeader from '../components/home/main-header'
import MenuSection from '../components/home/menu-section';


const Dashboard = props => {
  return (
    <div className='w-[1024px] bg-default-100 h-full mx-auto flex'>
      <SideBar />
      <div className="flex flex-col">
        <MainHeader />
        <MenuSection />
      </div>
    </div>
  )
}

export default Dashboard
