import axios from "axios"
import { useEffect, useState } from "react"


// eslint-disable-next-line react/prop-types
const Row = ({title,fetchURL}) => {
const [movies,setMovies]=useState([])
useEffect(()=>{
  axios.get(fetchURL).then(res=>setMovies(res.data.results))
},[fetchURL])
console.log(movies)
  return (
    <div>
     <h1>{title}</h1>
    </div>
  )
}

export default Row