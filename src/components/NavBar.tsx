import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar: FunctionComponent = () => {
    return (
    //       <div>
    //      {/* Navigateur  */}
    //       <nav>
    //          <div className="nav-wrapper">     
    //              <Link to='/' className='brand-logo center'> Pokedex </Link>
    //          </div>
    //      </nav>
    //  </div> 
   
    <div className="menu">
				<div className="menu__top">
					<h2 className="menu__title">
                           <Link to='/' className='brand-logo'> POKEDEX </Link>
                    </h2>
                    <div className="menu__left">
                           <Link to='/pokemons' className='brand-logo center'> Pokémon Gen 1 |</Link>
                           <Link to='/' className='brand-logo center'> Pokémon Gen 2 | </Link>
                           <Link to='/' className='brand-logo center'> Pokémon Gen 3 | </Link>
                           <Link to='/' className='brand-logo center'> Pokémon Gen 4 | </Link>
                    </div>
					{/* <nav className="menu__nav-top">
						<a href="#" className="line-link">Clothing</a>
						<a href="#" className="line-link">Dresses</a>
						<a href="#" className="line-link">Accessories</a>
						<a href="#" className="line-link">Brands</a>
					</nav> */}
					<div className="menu__side">
						<a href="#" className="line-link">Login</a>
						
					</div>
				</div>
    </div>
    
    )
}


export default NavBar;
