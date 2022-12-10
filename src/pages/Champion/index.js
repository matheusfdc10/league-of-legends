import Carousel from '../../components/Carousel'
import { StyledChampion } from './style'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


function Champion() {
    const { id } = useParams();
    const [champion, setChampion] = useState({})

    const url = `https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/${id}.json`

    useEffect(() => {
        getChampion()
    }, [])

    function getChampion() {
        axios.get(url)
            .then(res => res.data.data)
            .then(res => res[Object.keys(res)])
            .then(res => setChampion(res))
            .catch(err => console.log(err))
    }

    // console.log(champion) 
    return (
        <StyledChampion>
            <Carousel champion={champion}/>
        </StyledChampion>
    )
}

export default Champion;
