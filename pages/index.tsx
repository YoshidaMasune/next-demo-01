import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface cat {
  breeds: string
  country: string
  flagImg: string
  img: string
  info_1?: string
  info_2?: string
  info_3?: string

}

const CatGridItem = (props: cat) => {
  return (
    <div className=''>
      <Image src={props.img} alt='cat' width={100} height={150}priority className='w-full' />
      <article>
        <h2>
          {props.breeds}
        </h2>
      </article>
    </div>
  )
}

const genCats = (cats: Array<cat>) => {
  return cats.map((cat, idx) => {
    return(
      <div key={idx}>
        <CatGridItem country={cat.country} flagImg={cat.flagImg} img={cat.img} breeds={cat.breeds} />
      </div>
    )
  })

}

export default function Home() {
  const [cats, setCats] = useState<Array<cat>>()


  useEffect( () => {
    fetch('http://localhost:3000/api/cat').then(res => res.json()).then(cats => setCats(cats))
  }, [])
   
  return (
    <>
      <Head>
        <title>Create Next App</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div className="container mx-auto justify-center">
            <section className='grid grid-rows-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[5rem]'>
              {
                cats? genCats(cats): <h1>....loading</h1>
              }
            </section>
          </div>
        </Layout>
      </main>
    </>
  )
}
