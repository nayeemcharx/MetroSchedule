
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Metro Rail Schedule</h1>
        <div className="links">
            <a href="/">Home</a>
            <div className="station-menu">
                <button className='station-button'>Stations</button>
                <a href="/">
                    <div className='dropdown'>
                        <a href="/">Uttara</a>    
                        <a href="/">Mirpur</a>
                        <a href="/">Farmgate</a>
                        <a href="/">Mohammadpur</a>
                    </div>  
                </a>
            </div>
        <a href="/">RoadMap</a>
          
        </div>
      </nav>
    );
  }
   
  export default Navbar;