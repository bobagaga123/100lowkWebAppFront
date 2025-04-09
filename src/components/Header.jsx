import '../styles/Header.css'

const Header = () => {
    return (
      <header>
        <h1>
          Столовая <span>webAPP</span>
        </h1>
        <nav>
          <ul>
            <li><a href="#about">О нас</a></li>
            <li><a href="#menu">Меню</a></li>
            <li><a href="#booking">Бронирование</a></li>
            <li><a href="#auth">Авторизация</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  