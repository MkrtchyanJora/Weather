import React, { useState } from 'react'

export default function Weather() {
    const [title, setTitle] = useState('')
    const [data, setData] = useState()




    let temperature1 = ''
    let wind1 = ''
    let temperature2 = ''
    let wind2 = ''
    let temperature3 = ''
    let wind3 = ''






    if (data !== undefined) {

        temperature1 = data.forecast[0].temperature
        wind1 = data.forecast[0].wind
        temperature2 = data.forecast[1].temperature
        wind2 = data.forecast[1].wind
        temperature3 = data.forecast[2].temperature
        wind3 = data.forecast[2].wind







    }




    const fetchWeader = (e) => {
        e.preventDefault()
        const res =
            fetch(`https://goweather.herokuapp.com/weather/${title}`)
                .then(strings => strings.json())
                .then(result => setData(result))
                .catch(err => {
                    console.log(err);
                })



    }
    return (
        <div className='main'>
            <div className='block5'>
                <div className='search-box'>
                    <form onSubmit={fetchWeader} >

                        <input className='search-bar'
                            type='text'
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder='Enter a City' />

                    </form>
                </div>

                <div className='parent'>
                    <div className={'block1' + (data ? 'block1_none' : '')} >
                        <p className='block1-p' >{`Yesterday`}</p>
                        <i class="fas fa-sun"></i>
                        <h2 className='block1-h2'>{`Temperature ${temperature1}`}</h2>
                        <h2 className='block1-h2'>{`Wind ${wind1}`}</h2>


                    </div>
                    <div className={'block1' + (data ? 'block1_none' : '')} >
                        <p className='block1-p' >{`Today`}</p>
                        <i class="fas fa-cloud-sun"></i>
                        <h2 className='block1-h2'>{`Temperature ${temperature2}`}</h2>
                        <h2 className='block1-h2'>{`Wind ${wind2}`}</h2>


                    </div>
                    <div className={'block1' + (data ? 'block1_none' : '')} >
                        <p className='block1-p' >{`Tomorrow`}</p>
                        <i class="fas fa-sun"></i>
                        <h2 className='block1-h2'>{`Temperature ${temperature3}`}</h2>
                        <h2 className='block1-h2'>{`Wind ${wind3}`}</h2>


                    </div>
                </div>
            </div>
        </div>
    )
}
