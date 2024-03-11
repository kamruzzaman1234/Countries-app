import { useEffect, useState } from "react";
import './Countries.css';
import Country from "./Country";

const Countries = ()=>{
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const visitedCountry = (country)=>{
        
        const newVisited = [...visitedCountries, country];
        setVisitedCountries(newVisited)

    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => setCountries(data))
    },[])
    return(
        <>
            <h3 className="heading">Country : {countries.length}</h3>
            <div>
                <h3>All Visited Country {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(visited=> <li key={visited.cca3}>
                            {visited.name.common}</li>)
                    }
                </ul>
            </div>
            
           <div className="country-container">
           {
                countries.map(country=> <Country 
                    visitedCountry={visitedCountry}
                key={country.cca3} 
                country={country}></Country>)
            }
           </div>
        </>
    )
}
export default Countries;