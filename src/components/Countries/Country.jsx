const Country = ({country})=>{
    const {name,area,population, flags} = country
    return(
        <>
            <div className="countries"> 
                <img src={flags.png}/>
            </div>
        </>
    )
}
export default Country;