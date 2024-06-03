
import Footer from './footer'
import Menu from './menu'

export default function DefaulLayout({children}) {
  return (
    <>
    <header>
    <Menu />
    </header>
    <main>
        {children}
    </main>
    <Footer />
    </>
  )
}
