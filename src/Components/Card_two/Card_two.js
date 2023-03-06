import React, { useEffect, useState } from 'react'
import { hotelList } from '../../Helper'

function HotelList() {
const[storelist,setStorelist] =useState([])
    useEffect(()=>{
     const list = JSON.parse(localStorage.getItem('hotelist'))
     setStorelist(list)
    },[])

    const handelOder =()=>{
       
    }
  
    return (
        <>
                        {/*  */}
  
           {/* <h2>{storelist[0].city}</h2> */}
            {storelist.map((hotels ,i ) => {
                return (
                    
                    <div>
                         <h2  style={{ display: 'flex' , justifyContent:'center' , padding:'1.5rem' }}>{hotels.city}</h2>
                    <div style={{ display: 'flex' }} key={i}>
                           
                            <div >
                              
                                <img src={hotels.img}  style={{ width: '20rem', height: '36vh', borderRadius: '10px'  , marginLeft:'1rem'}}/>
                            </div>


                            <div style={{marginLeft:'2rem', border:'1 px solid black'}}>
                               <h3> {hotels.hotel}</h3> 
                               <h4>No of rooms :- {hotels.rooms}</h4>
                               <p>Is it better to communicate with hotel guests through text messaging or email? Various research reports SMS open rates as high as 98% compared to just 20% of all emails. And on average, it takes 90 seconds for someone to respond to a text versus 90 minutes to respond to an email. Hoteliers can take advantage of texting with guests to improve both revenue and satisfaction.</p>
                               <button style={{backgroundColor:'#1e90ff' , border:'none'}}>4.8*</button>
                               <br/>
                             
                               <button style={{backgroundColor:'#1e90ff' , border:'none' , borderRadius:'3px'}} onClick={handelOder}>Book now</button>
                            </div>
                            </div>
                        </div>
                    
                )
            })}
        </>
    )
}





export default HotelList