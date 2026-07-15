import HomeRoomCard from '../components/HomeRoomCard'
import HomeFacilityCircle from '../components/HomeFacilityCircle'
import HomeCard from '../components/HomeCard'

import { apartmentData } from '../Data'
import apartmentImg from '../assets/petchployplace.jpg'

function Home({setCurrentPage}) {
  return (
    <div>
      <div style={{
        position: 'relative', // บังคับให้พื้นที่นี้เป็นจุดอ้างอิงของข้อความลอย
        width: '100%', height: '650px', display: 'flex',alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden' // ซ่อนรูปส่วนที่เกิน
      }}>
        <img 
          src={apartmentImg} alt='เพชร พลอย เพลส' 
          style={{
            position: 'absolute', // สั่งให้รูปแยกเลเยอร์ลอยเป็นพื้นหลัง
            top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover', // ป้องกันรูปยืดเบี้ยว และขยายเต็มพื้นที่พอดี
            zIndex: 1
          }}
        />
        <div 
        style={{
            position: 'absolute', 
            top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)',
            zIndex: 2
        }} />
        <div style={{position: 'relative', zIndex: 3, textAlign: 'center', color: '#ffffff', padding: '0 20px',}}>
          <h1 style={{ fontSize: '60px', fontWeight: 'bold', margin: '0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', fontFamily: 'Bai Jamjuree', fontWeight: '600' }}>
            {apartmentData.nameTH || 'เพชร พลอย เพลส'}
          </h1>
          <h2 style={{ fontSize: '32px', fontWeight: 'normal', margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            ยินดีต้อนรับ
          </h2>
        </div>
      </div>

      <HomeRoomCard setCurrentPage={setCurrentPage} />

      <HomeFacilityCircle />

      <HomeCard />

      <p style={{margin: '20px 0 0 0', display: 'flex', fontSize: '15px', color: '#666666', alignItems: 'center', justifyContent: 'center'}}>หมายเหตุ อะพาร์ตเมนต์ของเราไม่มีบริการเช่ารายวัน</p>
    </div>
  )
}

export default Home