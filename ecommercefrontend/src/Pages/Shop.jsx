import { useEffect, useState } from "react"
import { Hero } from "../components/Hero/Hero"
import { NewsLetter } from "../components/NewsLetter/NewsLetter"
import { Offers } from "../components/Offers/Offers"
import { Popular } from "../components/Popular/Popular"
import {NewCollections} from "../components/NewCollection/NewCollections"

export const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/popularinwomen') 
            .then((res) => res.json()) 
            .then((data) => setPopular(data))
    fetch('http://localhost:4000/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <div>
      <Hero/>
      <Popular data={popular}/>
      <Offers/>
      <NewCollections data={newcollection}/>
      <NewsLetter/>
    </div>
  )
}
