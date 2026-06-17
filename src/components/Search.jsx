import React from 'react'

const Search = ({ terminodeBusqueda, setTerminodeBusqueda, isNavbar = false }) => {
    return (
        <div className={isNavbar ? 'search-navbar' : 'search'}>
            <div>
                <img src="/search.svg" alt="Icono de búsqueda" />
                <input
                    type="text"
                    placeholder="Buscar películas..."
                    value={terminodeBusqueda}
                    onChange={(e) => setTerminodeBusqueda(e.target.value)} />
            </div>
        </div>
    )
}

export default Search