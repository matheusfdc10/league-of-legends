import { StyledHeader } from './style'

export default function Header({ search, setSearch }) {

    return(
        <StyledHeader>
            <div>
                <h1>Campeões</h1>
            </div>

            <input type="text" placeholder="Buscar"
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
        </StyledHeader>
    )
}