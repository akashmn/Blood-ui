"use client";

import './SideBar.css'
import mainlogo from '../assets/main-logo.jpg'
import logo from '../assets/logo.jpg'

import 'boxicons/css/boxicons.min.css';

import React, { useState } from 'react'

const SideBar = () => {

    const [darkmode,setDarkMode] = useState(false)
    const [isSideBarOpen,setIsSideBarOpen] = useState(true)


    const ModeSwitchFunction = () => {
        setDarkMode(!darkmode);
    }

    const SideBarOpenFunction = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

  return (
    <div className={isSideBarOpen ? 'sidebar' : 'sidebar close'}>
        <header>
            <div className="image-text">
                <span className="image">
                    <p>B.UI</p>
                </span>

                <div className="text header-text">
                    <span className="name">Akash M N</span>
                    <span className="profession">Web Developer</span>
                </div>
            </div>
            <i onClick={SideBarOpenFunction} className={isSideBarOpen ? 'bx bx-chevron-left toggle' : 'bx bx-chevron-right toggle'}></i>
        </header>

        <div className="menu-bar">
            <div className="menu">
                <li className="search-box">
                    <a href="">
                        <i className='bx bx-search icon'></i>
                        <input type="search" placeholder='Search...' />
                    </a>
                    </li>
                <ul className="nav-links">
                    <li className="nav-link">
                        <a href="">
                            <i className='bx bx-home-alt icon'></i>
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="">
                            <i className='bx bx-bar-chart-alt-2 icon'></i>
                            <span className="text nav-text">Revenue</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="">
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Notification</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="">
                            <i className='bx bx-pie-chart-alt icon'></i>
                            <span className="text nav-text">Analytics</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="">
                            <i className='bx bx-heart icon'></i>
                            <span className="text nav-text">Like</span>
                        </a>
                    </li>
                    <li className="nav-link">
                        <a href="">
                            <i className='bx bx-wallet icon'></i>
                            <span className="text nav-text">Wallets</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="bottom-content">
                <li className=" ">
                    <a href="">
                        <i className='bx bx-log-out icon'></i>
                        <span className="text nav-text">Logout</span>
                    </a>
                </li>
                <li className="mode">
                    <div className='moon-sun'>
                        <i className={`bx ${darkmode ? 'bx-sun' : 'bx-moon'} icon moon-sun`}></i>
                    </div>
                    <div onClick={ModeSwitchFunction}className="toggle-switch">
                        <div className='switch'>
                            <div className={darkmode ? "dark-switch" : "light-switch"}></div>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    </div>
  )
}

export default SideBar
