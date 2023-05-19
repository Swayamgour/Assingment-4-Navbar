import React from 'react'
import style from '../ScroolCard/ScroolCard.module.css'
function ScroolCard() {
    return (
        <div className={style.beadroomPics}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tLCxJgVg-4q9lM3U5gKUOcIh8qjn1WtdgQ&usqp=CAU' style={{ width: '16rem', height: '11rem ', borderRadius: '10px', marginTop: '2rem' }} />
                <h4>Aparthotel Stare Miasto</h4>
                <h5>Madrid</h5>
                <h5>Starting from $120</h5>
                <h6>233 hotels</h6>
            </div>
            <div>
                <img src='https://media.istockphoto.com/id/92007666/photo/posh-hotel-front.jpg?s=612x612&w=0&k=20&c=oJ_9x6kG-WO-8t_BIRWE3D4GN6pXLulmf7Lztr4Y-y8=' style={{ width: '16rem', height: '11rem ', borderRadius: '10px', marginTop: '2rem' }} />
                <h4>Comfort Suites Airpot</h4>
                <h5>Austin</h5>
                <h5>Starting from $120</h5>

                <h6>233 hotels</h6>
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeAzvrsxAw954gLoexQ71I15YkPpE-9xAdQ1ou1r_fvjgp60EuO5OKfpTd8EB3jo4Pkk&usqp=CAU' style={{ width: '16rem', height: '11rem ', borderRadius: '10px', marginTop: '2rem' }} />
                <h4>Four Seasons hotel</h4>
                <h5>Lisbon</h5>
                <h5>Starting from $120</h5>

                <h6>233 hotels</h6>
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyehWqdu6TNzXLovdGxVBQ3fznz9i14fbyalU-nzcK1Gean7eMaOhb-4A49pOay-LNBi8&usqp=CAU' style={{ width: '16rem', height: '11rem ', borderRadius: '10px', marginTop: '2rem' }} />
                <h4>Hilton Garden inn</h4>
                <h5>Berlin</h5>
                <h5>Starting from $120</h5>

                <h6>233 hotels</h6>
            </div>

        </div>
    )
}

export default ScroolCard