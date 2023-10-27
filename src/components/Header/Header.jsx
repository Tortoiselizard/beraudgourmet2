import NavBar from '../NavBar/NavBar'
import Image from 'next/image'
import logoBeraud from '../../../public/images/Header/logoBeraud.png'
import style from './Header.module.css'

function Header () {
  return (
    <header className={style.Header}>
      <Image src={logoBeraud} alt='logoBeraud' />
      <NavBar />
    </header>
  )
}

export default Header
