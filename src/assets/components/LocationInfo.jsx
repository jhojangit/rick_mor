import React from 'react'



const LocationInfo = ({location}) => {
    const type = location?.type
    const Dimension = location?.dimension
    const population = location?.residents.length


    const hasNoPopulation = () =>{
        if (population === 0) {
            return <h1>This dimension has no population.</h1>
        }
    }



    return (
        <article className="location__info">
            <h2>{location?.name}</h2>
            <ul>
                <li>Type       <br />  <span>{type}</span> </li>
                <li>Dimension  <br />  <span>{Dimension}</span></li>
                <li>Population <br />  <span>{population} </span> </li>
            </ul>
        {
            hasNoPopulation()
        }

        </article>

    )
}

export default LocationInfo