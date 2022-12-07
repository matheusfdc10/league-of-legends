import { useEffect, useState } from 'react'
import { StyledContainer } from './style'
import axios from 'axios'


export default function Container({ search }) {
    const [champions, setChampions] = useState([])

    const url1 = 'https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/Aatrox.json'
    const url = 'https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json'
    useEffect(() => {
        getChampions()
    }, [])

    function getChampions() {
        const teste = []
        axios.get(`${url}`)
            .then(res => res.data.data)
            .then(res => Object.keys(res).forEach(champion => {
                teste.push(res[champion])
            }))
            .then(() => setChampions(teste))
    }

    return (
        <StyledContainer>
            <section>
                {champions.filter(champion => {
                    const nameNormalized = champion.name.toLowerCase()
                    const searchValueNormalized = search.toLowerCase()       
                    return nameNormalized.includes(searchValueNormalized)
                }).map(champion => {
                    return (
                        <div key={champion.id}>
                            <a>
                                <img width='145px' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} />
                                <span>{champion.name}</span>
                            </a>
                        </div>
                    )
                })}
            </section>
        </StyledContainer>
    )
}

