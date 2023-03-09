import '@/styles/globals.css'
import { Mulish as BodyFont} from "next/font/google"
import { Unbounded as DisplayFont} from "next/font/google"
import type { AppProps } from 'next/app'
import Head from 'next/head'

const bodyFont = BodyFont({
  subsets: ["latin"],
})

const displayFont = DisplayFont({
  subsets: ["latin"],
  weight: ["700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Niall Morrison</title>
      <meta name="description" content="With a thorough and diverse background in building technical solutions, I'm a developer that's passionate about solving complex data problems, engineering them to maximum performance." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content="Niall Morrison" />
      <meta property="og:description" content="With a thorough and diverse background in building technical solutions, I'm a developer that's passionate about solving complex data problems, engineering them to maximum performance." />
      <meta property="og:url" content="https://niall.digital" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Niall Morrison" />
      <meta name="twitter:description" content="With a thorough and diverse background in building technical solutions, I'm a developer that's passionate about solving complex data problems, engineering them to maximum performance." />
      <meta name="twitter:url" content="https://niall.digital" />

      {/* Favicon/Misc */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e1e1e" />
      <meta name="msapplication-TileColor" content="#1e1e1e" />
      <meta name="theme-color" content="#1e1e1e" />
    </Head>
    <style dangerouslySetInnerHTML={{__html: `:root { --body-font: ${bodyFont.style.fontFamily}; --display-font: ${displayFont.style.fontFamily} }`}} />
    <Component {...pageProps} />
  </>
}
