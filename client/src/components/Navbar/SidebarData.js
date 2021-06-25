import React from 'react'
import * as Ai from 'react-icons/ai'
import * as Bs from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Gallery',
        path: '/',
        icon: <Bs.BsGridFill />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <Ai.AiFillSmile />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <Ai.AiFillMail />,
        cName: 'nav-text'
    }
];