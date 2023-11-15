import './styles.css'


const Navbar = () => {
    return (
       <div className="navbar-container">
        <div>
            <img src={logosg.jnif} alt="logo" width={100}/>

        </div>
        <div>
            <ul className='list-container'>
                <li>
                    <button className='category-buttom'> tienda  </button>
                 </li>
                 <li>
                    <button className='category-buttom' > ubicacion </button>
                 </li>
                 <li>
                    <button className='category-buttom'  > consultas</button>
                 </li>
                 <li>
                    <button className='category-buttom' > nosotros </button>
                 </li>
            </ul>

        </div>
       </div>
    )
};
export default Navbar