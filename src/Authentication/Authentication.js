import React from 'react'

import LoginForm from './LoginForm';

const Authentication = () => {

    const Users = [
        {
            id: "e1",
            name: 'Vivek Tiwari',
            email: 'VivekTiwari@gmail.com',
            password: 'VivekTiwari'
        },
        {
            id:"e2",
            name: 'Vikram',
            email: 'Vikram@gmail.com',
            password: 'Vikram'
        }
    ]


  return (
        <LoginForm data= {Users}/>
  )
}



export default Authentication;