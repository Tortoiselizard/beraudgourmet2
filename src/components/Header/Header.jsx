import Link from 'next/link'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import logoBeraud from '../../../public/images/Header/logoBeraud.png'

function Header () {
  return (
    <>
      <header className='header'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <Link href='/'>
            <Image
              src={logoBeraud}
              alt='logoBeraud'
              priority
            />
          </Link>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          marginTop='1rem'
        >
          <Link href='/tienda'>
            <Typography color='secondary' variant='pBold'>
              <FiberManualRecordIcon color='primary' />{' '}
              Gourmet{' '}
              <FiberManualRecordIcon color='primary' />
            </Typography>
          </Link>
        </Stack>
      </header>
    </>
  )
}

export default Header
