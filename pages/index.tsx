import Head from 'next/head'

import BigOutlineButton from '../components/BigOutlineButton'
import SiteLogo from '../components/SiteLogo'
import IntroGrid from '../displays/IntroGrid'
import IntroText from '../displays/IntroText'
import RegularLayout from '../displays/RegularLayout'

// The index is what the user sees when he reaches /
// Nothing special here, just some static text with catchy information

const Index = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Dessert</title>
      </Head>

      <RegularLayout>
        <div
          style={{
            maxWidth: '32em',
            margin: '0 auto',
            marginBottom: '4em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{ marginTop: '4em', marginBottom: '2em' }}>
            <SiteLogo size={4} />
          </div>

          <IntroText>
            Dessert helps you transition from JavaScript to WebAssembly. We
            provide drop-in replacements for the modules you are already using
            and that slow down your application.
          </IntroText>

          <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <BigOutlineButton to='/modules'>Get Started →</BigOutlineButton>
          </div>
        </div>

        <div
          style={{
            maxWidth: '32em',
            margin: '0 auto',
            marginBottom: '3em'
          }}
        >
          <IntroGrid />
        </div>

        <div
          style={{
            marginBottom: '4em',
            maxWidth: '560px',
            height: '315px',
            margin: '0 auto'
          }}
        >
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/mPdi8EeAkj8'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        </div>

        <div
          style={{
            maxWidth: '28em',
            margin: '0 auto',
            marginBottom: '5em'
          }}
        >
          <IntroText>
            Boost your application&apos;s performance and get ready for the web
            of tomorrow.
          </IntroText>
        </div>
      </RegularLayout>
    </>
  )
}

export default Index
