import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Announcement from './pages/Announcement'
import Rooms from './pages/Rooms'
import More from './pages/More'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderContent = () =>{
    if (currentPage === 'home'){
      return <Home setCurrentPage={setCurrentPage} />
    }
    if (currentPage === 'announcement'){
      return <Announcement />
    }
    if (currentPage === 'rooms'){
      return <Rooms />
    }
    if (currentPage === 'more'){
      return <More />
    }
    if (currentPage === 'contact'){
      return <Contact />
    }
    return(
      <div>
        ตอนนี้กำลังพัฒนาหน้า {currentPage} ...
      </div>
    )
  }

  return(
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      fontFamily: "'Prompt', sans-serif"
    }}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>

      <main style={{margin: '0px'}}>
        {renderContent()}
      </main>

      <Footer />
    </div>
  )
}

export default App