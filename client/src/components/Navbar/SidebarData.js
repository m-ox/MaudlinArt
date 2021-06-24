import React from 'react'
import * as Ai from 'react-icons/ai'
import * as Bs from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <Ai.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Gallery',
        path: '/gallery',
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