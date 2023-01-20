import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import { Button } from '@mui/material'

import CustomHead from '../components/customhead'
import CustomFooter from '../components/customfooter'

export default function Home() {
  return (
    <div className={styles.container}>

      <CustomHead/>
      <main className={styles.main}>

        <h1 className={styles.title}>
          Login Page
        </h1>

        <Link href="/" passHref>
          <Button variant="contained">
            Back
          </Button>
        </Link>

      </main>

      <CustomFooter/>
    </div>
  )
}
