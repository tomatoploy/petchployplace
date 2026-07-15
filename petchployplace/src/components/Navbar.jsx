import { useState } from 'react';
import logo from '../assets/logoOrange.png'
import { apartmentData } from '../Data'

function Navbar({currentPage, setCurrentPage}) {
  const [hoveredPage, setHoveredPage] = useState(null)

  const getMenuColor = (pageName) => {
    if (currentPage === pageName){
        return '#f75c1c';
    }
    if (hoveredPage === pageName) {
        return '#000000';
    }
    return '#3c3c3c';
    }

  const getMenuWeight = (pageName) => {
    return currentPage === pageName || hoveredPage === pageName ? 'bold' : 'normal';
  }

  return (
    <div style={{position: 'sticky', top: 0, zIndex: 1000}}>
      <header style={{margin: '15px 20px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', display: 'flex', gap: '15px'}}>
          <img src={logo} alt='เพชร พลอย เพลส' style={{width: '40px', height: '40px'}}/>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0px'}}>
            <h2 style={{margin: '0px'}}>{apartmentData.nameTH}</h2>
            <p style={{ margin: '0px', fontSize: '13px', color: '#666666', lineHeight: '1.2' }}> อะพาร์ตเมนต์ ซ.รามอินทรา 39 </p>
          </div>
        </div>
        <menu style={{margin: 0, padding: '10px 24px', borderRadius: '24px', display: 'flex', gap: '30px', backgroundColor: 'rgba(256, 256, 256, 0.85)', boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)'}}>
          <a
            onClick={() => setCurrentPage('home')}
            onMouseEnter={() => setHoveredPage('home')}
            onMouseLeave={() => setHoveredPage(null)}
            style={{textDecoration: 'none', cursor: 'pointer', color: getMenuColor('home'), fontWeight: getMenuWeight('home'), transition: 'color 0.2s'}}
            >หน้าหลัก</a>
          <a
            onClick={() => setCurrentPage('announcement')}
            onMouseEnter={() => setHoveredPage('announcement')}
            onMouseLeave={() => setHoveredPage(null)}
            style={{textDecoration: 'none', cursor: 'pointer', color: getMenuColor('announcement'), fontWeight: getMenuWeight('announcement'), transition: 'color 0.2s'}}
            >ข่าวสาร</a>
          <a
            onClick={() => setCurrentPage('rooms')}
            onMouseEnter={() => setHoveredPage('rooms')}
            onMouseLeave={() => setHoveredPage(null)}
            style={{ textDecoration: 'none', cursor: 'pointer', color: getMenuColor('rooms'), fontWeight: getMenuWeight('rooms'), transition: 'color 0.2s' }}
            >ห้องพัก</a>
          <a
            onClick={() => setCurrentPage('more')}
            onMouseEnter={() => setHoveredPage('more')}
            onMouseLeave={() => setHoveredPage(null)}
            style={{ textDecoration: 'none', cursor: 'pointer', color: getMenuColor('more'), fontWeight: getMenuWeight('more'), transition: 'color 0.2s' }}
            >ข้อมูลหอพัก</a>
          <a 
            onClick={() => setCurrentPage('contact')}
            onMouseEnter={() => setHoveredPage('contact')}
            onMouseLeave={() => setHoveredPage(null)}
            style={{ textDecoration: 'none', cursor: 'pointer', color: getMenuColor('contact'), fontWeight: getMenuWeight('contact'), transition: 'color 0.2s' }}
            >ติดต่อ</a>
        </menu>
      </header>
    </div>
  )
}

export default Navbar