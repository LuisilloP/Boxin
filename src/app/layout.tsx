import './globals.css'
import Header from "./header/Header"
import Footer from './footer/Footer'
import Head from "./Head"
export const metadata = {
  title: 'Boxin Club',
  description: 'By LuisDev',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html >
      <Head></Head>
      <body >
        <Header />
        <main className=' min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
