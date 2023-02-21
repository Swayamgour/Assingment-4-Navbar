import React from 'react'
import style from '../Card/Card.module.css'

function Card() {
  return (
    <div className={style.main}>
      <div>

        <img className={style.ImgTag} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY28c9577YK1rqxSR3H595y7SiJRUKtk3VqA6oVQhJ0-Oghq_TayoJj_JAjtCsr1DMrNk&usqp=CAU'  style={{width:'16rem' , height:'32vh'}} />
        <h2 className={style.text}>jammu kashmir  </h2>
        <h4 className={style.text1}>123 Property </h4>
      </div>
      <div>

        <img className={style.ImgTag} src='https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/united-states/office-pages/nevada/reno-card.jpg?rev=f3811f4eadd34c969c44317a4452cbe3'  style={{width:'16rem' , height:'32vh'}}/>
        <h2 className={style.text}>Ladakh </h2>
        <h4 className={style.text1}>533 Property </h4>
      </div>
      <div>

        <img className={style.ImgTag} src='https://i.travelapi.com/lodging/1000000/50000/41100/41076/b84c8efb_z.jpg'  style={{width:'16rem' , height:'32vh'}} />
        <h2 className={style.text}>Goa </h2>
        <h4 className={style.text1}>308 Property </h4>
      </div>
      <div>

        <img className={style.ImgTag} src='https://media.cnn.com/api/v1/images/stellar/prod/160726132219-us-beautiful-hotels-4-four-seasons-maui1.jpg?q=w_1900,h_1096,x_0,y_0,c_fill'  style={{width:'16rem' , height:'32vh'}}/>
        <h2 className={style.text}>uttar pradesh</h2>
        <h4 className={style.text1}>605 Property </h4>
      </div>
    </div>
  )
}

export default Card;