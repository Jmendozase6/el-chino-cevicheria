import { Input } from '@nextui-org/react'

import React from 'react'

export default function MainHeader() {
    return (
        <>
            <div className='flex justify-between p-4 mt-4'>
                <h1 className="font-bold text-3xl">
                    Gestiona Tu Comercio
                </h1>
                <Input
                    className='w-[300px] mr-2 h-[40px] ms-200'
                    type='search'
                    placeholder="Buscar productos"
                />
            </div >
        </>
    )
}