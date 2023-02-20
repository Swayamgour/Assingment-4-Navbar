import React from 'react'
import Restriction from '../Pages/Restriction/Restriction'
import Login from '../Pages/Login/Login'
import style from '../Home/Home.module.css'
import { GrNotification, } from 'react-icons/gr'
import { MdAirplanemodeActive } from 'react-icons/md'
import { BiBed } from 'react-icons/bi'
import Card from '../Components/Card/Card'
import ScroolCard from '../ScroolCard/ScroolCard'
import ScroolCards from '../ScroolCard/ScroolCards'
import Footer from '../Components/Footer/Footer'




function Home() {

    const Name = [
        {
            icon: <BiBed />,
            name: 'Stays'
        }
        , {
            icon: <MdAirplanemodeActive />,
            name: "Flights"
        }, {
            icon: <BiBed />,
            name: 'Stays'
        }
        , {
            icon: <MdAirplanemodeActive />,
            name: "Flights"
        }, {
            icon: <BiBed />,
            name: 'Stays'
        }
        , {
            icon: <MdAirplanemodeActive />,
            name: "Flights"
        }
    ]



    return (
        <>
            <div className={style.main}>
                <div className={style.center}>
                    <span> <h1 style={{ color: 'white', padding: '2rem' }}>Booking.com</h1></span>
                    <span><h3 style={{ color: 'white', padding: '2rem', marginLeft: '25rem' }}>INR</h3></span>
                    <span><img width='25rem' height='25rem' className={style.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0d4fxjBGs5IOjeUMrkM9MGDuXxk37-DO9eg&usqp=CAU' /></span>
                    <h3 style={{ color: 'white' }}> < GrNotification className={style.img1} /></h3>
                    <h3 style={{ color: 'white', padding: '2rem' }}>List Your Property</h3>
                    <h3 className={style.Reactrictoin}><Restriction style={{ color: 'white' }} /></h3>
                    <h3 className={style.Login}><Login /> </h3>

                </div>
                <div className={style.secondCenter}>
                    {Name.map((logo) => {
                        return (
                            <>
                            <div className={style.logoIconList}>
                                <span className={style.logoIcon}>{logo.icon} {logo.name}</span>
                                </div>
                            </>
                        )
                    })}

                </div>
                <h1 style={{ marginTop: '-6rem', marginLeft: '3rem', fontSize: '900', color: 'white' }}>Where to next , Aman </h1>
                <h4 style={{ marginTop: '0rem', marginLeft: '3rem', color: 'white' }}>Find exclusive Genius rewards in every corner of the world!</h4>

                <div className={style.center_second}>
                    <input placeholder="  Search Hotel" className={style.input_text1} />
                    <input placeholder='Check in Date' type='date' className={style.input_text} />
                    <input placeholder='1 Adults   0 Children   1 Rooms' className={style.input_text_buttom} />
                    <button className={style.input_text_buttom1}>Search</button>

                </div>
                <div className={style.menuItem}>
                    <Card />
                </div>

                <div className={style.scroolList}>
                   <h3 style={{marginLeft:'.5rem' , marginTop:'2rem'}}>Browse by Property type</h3>
                   <ScroolCard/>
                  
                </div>
                <div className={style.scroolList}>
                   <h3 style={{marginLeft:'.5rem' , marginTop:'2rem'}}>Homes guests love</h3>
                   <ScroolCards/>
                  
                </div>
                
            </div>
            <div style={{marginTop:'9rem'}}><Footer/> </div>

        </>
    )
}

export default Home