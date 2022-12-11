import { StyledHeader } from './style'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export default function Header({ search, setSearch, inputVisible }) {

    return(
        <StyledHeader>
            <div>
                <Link to="/">
                    <img src={logo}></img>
                </Link>
            </div>

            
            {inputVisible && (
                <input type="text" placeholder="Buscar"
                onChange={e => setSearch(e.target.value)}
                value={search}
                />
            )}
        </StyledHeader>
    )
}