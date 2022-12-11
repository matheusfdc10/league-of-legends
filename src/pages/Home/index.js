import Header from '../../components/Header'
import Container from '../../components/Container'

import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [champions, setChampions] = useState([])
  const [search, setSearch] = useState('')

  // const url1 = 'https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/Aatrox.json'
  const url = 'https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json'
  useEffect(() => {
    getChampions()
  }, [])

  function getChampions() {
    const arreyChampions = []
    axios.get(url)
      .then(res => res.data.data)
      .then(res => Object.keys(res).forEach(champion => {
        arreyChampions.push(res[champion])
      }))
      .then(() => setChampions(arreyChampions))
      .catch(err => console.log(err))
  }
 
  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Container champions={champions} search={search} />
      
    </>
  );
}

export default Home;
