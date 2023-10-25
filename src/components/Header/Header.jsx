import Link from 'next/link'
import Image from 'next/image'
import { Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import logoBeraud from '../../../public/images/Header/logoBeraud.png'
import './Header.css'

function Header () {
  return (
    <>
      <header className='header'>
        <div>
          <Link href='/'>
            <Image
              src={logoBeraud}
              alt='logoBeraud'
              priority
            />
          </Link>
        </div>
        <div>
          <Link href='/tienda'>
            <Typography color='secondary' variant='pBold'>
              <FiberManualRecordIcon color='primary' />{' '}
              Gourmet{' '}
              <FiberManualRecordIcon color='primary' />
            </Typography>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
