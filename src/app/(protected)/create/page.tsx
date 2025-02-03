'use client';

import React from 'react'
import { useForm } from 'react-hook-form';


type formInput = {
    repoURL: string
    projectName: string
    githubAcessToken ?: string
}

const CreatePage = () => {
    const { register,handleSubmit, reset } = useForm<formInput>()


  return (
    <div className='flex items-center gap-12 h-full justify-center'>
        <img src='/undraw.svg' className='h-60 w-60'/>
        <div>
            <div>
                <h1 className='font-seminbold'>

                </h1>
            </div>
        </div>
    </div>
  )
}

export default CreatePage 