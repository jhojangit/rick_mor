import React, { Suspense, useEffect, lazy } from 'react'
import useFetch from '../../hooks/useFetch';
const Loading = lazy(() => import('./Loading'));



const ResidentCard = ({ url }) => {

    const resident = useFetch(url)


    return (
        <Suspense fallback={<Loading/>}>
            <article className='container_card'>
                <header className='card__header' >
                    <img loading='lazy' className='card__header__img' src={resident?.image} alt="" />
                    <div className="card__container__status">
                        <div className ={`circle ${resident?.status}`} ></div>

                        <span className='card__span__status'>
                            {resident?.status}
                        </span>

                    </div>
                </header>

                <section>
                    <h3 className='card__name'>{resident?.name}</h3>

                    <hr />

                    <ul className='card__info'>

                        <li className='li'><span className='span'>Specie  <br />  </span>{resident?.species}</li>
                        <li className='li'><span className='span'>Origin  <br />  </span>{resident?.origin.name}</li>
                        <li className='li'><span className='span'>Episode <br />  </span>{resident?.episode.length}</li>

                    </ul>
                </section>
            </article>
        </Suspense>
    )
}

export default ResidentCard