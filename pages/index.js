import Head from 'next/head';
import Image from 'next/image';

import Footer from '../components/footer';
import NavBar from '../components/header/NavBar';
import Hero from '../components/home/Hero';
import Connect from '../components/home/Connect';
import Learn from '../components/home/Learn';
import Media from '../components/home/Media';
import Mission from '../components/home/Mission';
import Offer from '../components/home/Offer';
import Problem from '../components/home/Problem';
import Solution from '../components/home/Solution';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ocean Blooms - fighting climate change</title>
      </Head>
      <div className={'relative overflow-hidden'}>
        <header className={'relative hero-background-cover-image'}>
          <NavBar dark={true} />
          <Hero />
        </header>
        <main className={'flex flex-col'}>
          <Media />
          <Problem />
          <Solution />
          {/* <Offer /> */}
          {/* <Mission /> */}
          {/* <Learn /> */}
          {/* <Connect /> */}
        </main>
        <Footer paddingBottom={48} />
      </div>
    </>
  )
}
