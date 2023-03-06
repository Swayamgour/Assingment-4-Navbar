import React, { useEffect, useState } from 'react'
import style from '../Home/Home.module.css'
import { GrNotification, } from 'react-icons/gr'
import { AiOutlineCar } from 'react-icons/ai'
import { TbPlaneInflight } from 'react-icons/tb'
import { MdOutlineAttractions } from 'react-icons/md'
import { GiWitchFlight } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { BiBed } from 'react-icons/bi'
import Card from '../Components/Card/Card'
import ScroolCard from '../ScroolCard/ScroolCard'
import ScroolCards from '../ScroolCard/ScroolCards'
import Footer from '../Components/Footer/Footer'
import { isLoginAtom } from '../Recoil'
import { useRecoilState } from 'recoil'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";




function Home() {
    const nav = useNavigate()
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    let person = JSON.parse(localStorage.getItem("person"))
    const [isLogin, setIsLogin] = useRecoilState(isLoginAtom)

    const Name = [
        {
            icon: <BiBed />,
            id:1,
            name: 'Stays'
        }
        , {
            icon: <TbPlaneInflight />,
            id:2,
            name: "Flights"
        }, {
            icon: < GiWitchFlight />,
            id:3,
            name: 'Flight + Hotel'
        }
        , {
            icon: <MdOutlineAttractions />,
            id:4,
            name: "Attraction"
        }, {
            icon: <AiOutlineCar />,
            id:5,
            name: 'AirPot Taxis'
        }

    ]

    const handelClick = () => {

    }
    const handelLogout = () => {
        setIsLogin(!isLogin)
        nav('/Login')
    }

    return (
        <>
            <div className={style.main}>
                <div className={style.center}>
                    <span> <h1 style={{ color: 'white', padding: '2rem', cursor: 'pointer' }}>Amanhome.me</h1></span>
                    <span><h3 style={{ color: 'white', padding: '2rem', marginLeft: '15rem', cursor: 'pointer' }}>INR</h3></span>
                    <span><img width='25rem' height='25rem' className={style.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0d4fxjBGs5IOjeUMrkM9MGDuXxk37-DO9eg&usqp=CAU' /></span>
                    <h3 style={{ color: 'white' }}> < GrNotification className={style.img1} /></h3>
                    <h3 style={{ color: 'white', padding: '2rem' }}>List Your Property</h3>
                    {isLogin ?
                        <>
                            <span className={style.Reactrictoin} style={{ cursor: 'pointer' }} onClick={() => nav('/Restriction')}>Register</span>  <span style={{ cursor: 'pointer' }} onClick={() => nav('/Login')} className={style.Reactrictoin}>Login</span>
                        </>
                        : <><h3 className={style.name} style={{ color: 'white', fontWeight: '500' }}>{person[0].name}</h3>
                            <div className={style.Reactrictoin} onClick={handelLogout} >Logout</div></>}
                </div>
                <div className={style.secondCenter}>
                    {Name.map((logo , index) => {
                        return (
                            <>
                                <div  className={style.logoIconList} key={logo.id} >
                                    <span   className={style.logoIcon}>{logo.icon} {logo.name}</span>
                                </div>
                            </>
                        )
                    })}

                </div>
                <h1 style={{ marginTop: '-6rem', marginLeft: '3rem', fontSize: '900', color: 'white' }}>Where to next ,
                    {isLogin ?
                        ' '
                        : <><h5 style={{ color: 'white', marginLeft: '15rem', marginTop: '-2.3rem' }}>{person[0].name}</h5>
                        </>}
                </h1>
                <h4 style={{ marginTop: '0rem', marginLeft: '3rem', color: 'white' }}>Find exclusive Genius rewards in every corner of the world!</h4>

                <div className={style.center_second} >

                    <input placeholder="  Search Hotel" className={style.input_text1} />
                    <div className={style.input_text}>
                        <FontAwesomeIcon icon={faCalendarDays} className={style.input_tet} />
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className={style.date}
                        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                            date[0].endDate,
                            "MM/dd/yyyy"
                        )}`}</span>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                            />
                        )}
                    </div>
                    
                    <input placeholder='1 Adults   0 Children   1 Rooms' className={style.input_text_buttom} onClick={handelClick} />
                    <button className={style.input_text_buttom1} onClick={()=>nav('/HotelList')}>Search</button>

                </div>
                <div className={style.menuItem}>
                    <Card  />
                    

                </div>

                <div className={style.scroolList}>
                    <h3 style={{ marginLeft: '.5rem', marginTop: '2rem' }}>Browse by Property type</h3>
                    <ScroolCard />

                </div>
                <div className={style.scroolList}>
                    <h3 style={{ marginLeft: '.5rem', marginTop: '2rem' }}>Homes guests love</h3>
                    <ScroolCards />

                </div>

            </div>
            <div style={{ marginTop: '9rem' }}><Footer /> </div>

        </>
    )
}

export default Home