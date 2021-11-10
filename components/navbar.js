import Link from 'next/link';
import style from '../styles/NavBar.module.css';
const NavBar = () => (
    //Navbar News
    <header class="p-3 bg-primary text-white shadow rounded">
        <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" href="favicon.ico"></svg> */}
            <img src="favicon.ico" className="img-fluid" width="40" height="32" alt="ICON"></img>
          </a>
  
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="/"><a className="nav-link px-2 text-white">Beranda</a></Link></li>
            <li><Link href="/artikel"><a className="nav-link px-2 text-white">Artikel</a></Link></li>
            <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
          </ul>
  
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          </form>
  
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Daftar</button>
          </div>
        </div>
      </div>
      </header>
);
export default NavBar;