import NavBar from '../NavBar/NavBar'
import Image from 'next/image'
import logoBeraud from '../../../public/images/Header/logoBeraud.png'
import style from './Header.module.css'

function Header () {
  return (
    <header className={style.Header}>
      <div className={style.topHeader}>
        <div className={style.containerImage}>
          <Image src={logoBeraud} alt='logoBeraud' />
        </div>
      </div>
      <NavBar />
    </header>
  )
}

export default Header
