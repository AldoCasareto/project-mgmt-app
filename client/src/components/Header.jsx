import logo from './assets/logo.png';

const Header = () => {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          <div className='d-flex'>
            <img src={logo} className='mr-2' alt='logo' />
            <div>Project MGMT</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
