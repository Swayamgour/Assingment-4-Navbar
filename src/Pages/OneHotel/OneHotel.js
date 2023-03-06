import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function OneHotel() {
    const [hotel, setHotel] = useState([])

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('oneHotel'))
        setHotel(list)
    }, [])

    const handel =()=>{
        Swal.fire({
            title: 'Success',
            text: 'booking successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    // console.log(hotel)
    return (
        <div>

            {hotel.map((hotels, i) => {
                return (

                        <div key={i}>

                            <div >

                                <img src={hotels.img} style={{ width: '70rem', height: '80vh', borderRadius: '10px', marginLeft: '4rem'  , marginTop:'2rem'}} />
                            </div>


                            <div style={{ marginLeft: '2rem', border: '1 px solid black' , padding:'2rem' }}>
                                <h3> {hotels.hotel}</h3>
                                <h4>No of rooms :- {hotels.rooms}</h4>
                                <p>Is it better to communicate with hotel guests through text messaging or email? Various research reports SMS open rates as high as 98% compared to just 20% of all emails. And on average, it takes 90 seconds for someone to respond to a text versus 90 minutes to respond to an email. Hoteliers can take advantage of texting with guests to improve both revenue and satisfaction.</p>
                                <button style={{ backgroundColor: '#1e90ff', border: 'none' }}>4.8*</button>
                                <br />
                                <br />

                                <button style={{ backgroundColor: '#1e90ff', border: 'none', borderRadius: '3px' }}  onClick={handel}>Book now</button>
                            </div>
                        </div>
                    
                )
            })}

        </div>
    )
}

export default OneHotel