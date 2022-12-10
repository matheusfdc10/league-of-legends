import { StyledContainer } from './style'
import {Link, } from 'react-router-dom'



export default function Container({ champions, search }) {
    
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
                            <Link to={`champion/${champion.id}`} className='teste'>
                            
                                <img width='145px' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={champion.name} />
                                <span>{champion.name}</span>
                            
                            </Link>
                        </div>
                    )
                })}
            </section>
        </StyledContainer>
    )
}

