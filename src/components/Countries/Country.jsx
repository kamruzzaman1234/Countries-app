import { useState } from "react";

const Country = ({country, visitedCountry})=>{
    const {name,area,population, flags, cca3} = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = ()=>{
        setVisited(!visited)
    }
    return(
        <>
            <div className="countries"> 
                <img src={flags.png}/>
                <h3>Country Name : <span className="country-name">{name.common}</span> </h3>
                <h3>Area : <span className="country-name">{area}</span> </h3>
                <h3>Population : <span className="country-name">{population}</span> </h3>
                <h3>CCA# : <span>{cca3}</span></h3>
                <div>
                <button onClick={handleVisited} className={`visited-btn ${visited ? 'active' : 'unactive'}`}>
                    {visited ? "Visited" : "Show Visited"}
                </button>
                <button className="visited-btn" onClick={()=>visitedCountry(country)}>Mark Visited</button>
                </div>
            </div>
        </>
    )
}
export default Country;