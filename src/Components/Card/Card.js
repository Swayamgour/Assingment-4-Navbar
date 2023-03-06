import React, { useEffect, useState } from 'react'
import style from '../Card/Card.module.css'
import { useNavigate } from 'react-router-dom'
import {data} from '../../Helper'
import {hotelList} from '../../Helper'
import Card_two from '../Card_two/Card_two'

function Card() {
  const [list, setList] = useState(data)
  const [hotelimage, setHotelimage] = useState(hotelList)
  // console.log(hotelimage)
   const [hotelLists, setHotelLists] = useState([])
  const nav = useNavigate()
//  console.log(list , 'list')
  // useEffect(() => {

  //   fetch("http://localhost:9002/myLogRegisterDb/cities")
  //     .then((res) => res.json())
  //     .then((data) => setList(data))
  // }, [])


  

  const handelClick = (_id) => {
       console.log(_id.$oid)
      // console.log(city__id)

     const x = hotelimage.filter((current)=>{
     return current.city__id == _id.$oid
     
    })
    setHotelLists(x)
   localStorage.setItem("hotelist" , JSON.stringify(x))
        console.log(hotelLists , "hello")
        if(hotelList.length>0){
          nav('/Card_two')
        }


   
   }
  

  return (


    <div>
     
      {list.slice(0, 6).map((hotels , i) => {
       
        return (
          
        
            <div style={{ display: 'flex' }} key={i}>
              <div >
                
              
                <img src={hotels.img} className={style.img} style={{ width: '20rem', height: '36vh', borderRadius: '10px', marginLeft: '1rem' }} onClick={()=>handelClick(hotels._id)} />
              </div>


              <div style={{ marginLeft: '2rem', border: '1 px solid black' }}>
                <h3> {hotels.city}</h3>
                <h4>No of Hotel :- {hotels.onOfHotels}</h4>
                <p>Is it better to communicate with hotel guests through text messaging or email? Various research reports SMS open rates as high as 98% compared to just 20% of all emails. And on average, it takes 90 seconds for someone to respond to a text versus 90 minutes to respond to an email. Hoteliers can take advantage of texting with guests to improve both revenue and satisfaction.</p>
                <button style={{ backgroundColor: '#1e90ff', border: 'none' }}>4.8*</button>
              </div>

            </div>

          
        )
      })}

    </div>
  )
}

export default Card;