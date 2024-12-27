import React from 'react'
import './MobileApp.css'
import { assets } from '../../assets/assets'

const MobileApp = () => {
  return (
    <div className='mobile-app' id='mobile-app'>
        <p>For Better Experience Download<br />
        Foodies App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default MobileApp