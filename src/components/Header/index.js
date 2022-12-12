import { StyledHeader } from './style'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export default function Header({ search, setSearch, inputVisible }) {

    return(
        <StyledHeader>
            <div>
                <Link to="/">
                    <img src="https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"></img>
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