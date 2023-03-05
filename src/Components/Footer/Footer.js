import React from 'react'
import style from '../../Components/Footer/Footer.module.css'
function Footer() {
  return (
    <div className={style.main}>
      <div className={style.center}>
        <h2 >Save time , Save Monney!</h2>
        <h4 className={style.h2}>Sign up and we'll send the best deals to you</h4>
        <div>
          <input style={{ width: '20%', height: '2.6rem', marginTop: '2rem', outline: 'none' }} /> <button style={{ width: '8%', height: '3rem', marginTop: '2rem', backgroundColor: 'hsl(240, 50%, 50%)', outline: 'none', border: 'none', color: 'white' }}>Subscribe</button></div>
      </div>

      <div className={style.footer_main}>
        <div className={style.footer}>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </div>
        <div className={style.footer}>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </div>
        <div className={style.footer}>
          <li>Unique Places to stay</li>
          <li>Reviews</li>
          <li>Unpacked: Travel articles</li>
          <li>Travel communities</li>
          <li>Seasonal and holiday deals</li>
          <li>Hotels</li>
        </div>
        <div className={style.footer}>
          <li>Car rental</li>
          <li>Flight Finder</li>
          <li>Restaurant reservations</li>
          <li>Travel communities</li>
        </div>
        <div className={style.footer}>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </div>
      </div>
      <h6 style={{marginLeft:'2rem' , color:'#003580'}}> Copyright © 2023 Hotel Booking By Swayam Gaur</h6>
    </div>
  )
}

export default Footer