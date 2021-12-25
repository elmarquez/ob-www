import Head from 'next/head'
import { ContentLayout } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <ContentLayout home>
      <Head>
        <title>Ocean Blooms</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Oops, not found</p>
      </section>
    </ContentLayout>
  )
}
