
import style from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}> 
        <div>
<img src="images/logo.png" alt="Logo" />
        </div>
        <ul className={style.ul}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact Us">Contact Us</a></li>
        </ul>
    </nav>
  )
}

export default Navigation