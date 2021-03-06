import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SuperButton } from '@wk/components';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SuperButton/>
      </main>
    </div>
  )
}
