import { useState, useEffect, useRef} from 'react'
import { StyledCarousel } from './style'
import { motion } from 'framer-motion'

export default function Carousel({ champion }) {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [carousel.current?.offsetWidth])
    
    return (
        <StyledCarousel>
            <h1>{champion.name} {champion.title}</h1>
            <motion.div
                ref={carousel}
                className="carousel" 
                whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width + 90}}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}>
                    {champion.skins?.map((skin, key) => {
                        return (
                            <motion.div className="skin" key={key}>
                                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`} alt={skin.name} />
                                <span>{skin.name === 'default' ? champion.name : skin.name}</span>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </StyledCarousel>
    )
}