import HomeRoomCard from '../components/HomeRoomCard'
import HomeFacilityCircle from '../components/HomeFacilityCircle'
import HomeCard from '../components/HomeCard'

import { apartmentData } from '../Data'
import apartmentImg from '../assets/petchployplace.jpg'

function Home({setCurrentPage}) {
  return (
    <div>
      <div className="hero-banner">
        <img 
          src={apartmentImg} alt='เพชร พลอย เพลส' 
          style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        />
        <div 
          style={{
            position: 'absolute', 
            top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)',
            zIndex: 2
          }} 
        />
        <div className="hero-content">
          <h1 className="hero-title">
            {apartmentData.nameTH || 'เพชร พลอย เพลส'}
          </h1>
          <h2 className="hero-subtitle">
            ยินดีต้อนรับ
          </h2>
        </div>
      </div>

      <HomeRoomCard setCurrentPage={setCurrentPage} />

      <HomeFacilityCircle />

      <HomeCard />

      <style>{`
        /* 💻 ขนาดในคอมพิวเตอร์ (ใช้ค่าเดิมของคุณเป๊ะๆ) */
        .hero-banner {
          position: relative;
          width: 100%;
          height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: #ffffff;
          padding: 0 20px;
        }

        .hero-title {
          font-size: 60px;
          font-weight: 600;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          font-family: 'Bai Jamjuree', sans-serif;
        }

        .hero-subtitle {
          font-size: 32px;
          font-weight: normal;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        /* 📱 ปรับแต่งเฉพาะตอนเปิดบนมือถือ (<= 768px) */
        @media (max-width: 768px) {
          .hero-banner {
            /* ปรับความสูงให้เต็มหน้าจอมือถือ (หักลบความสูงของ Navbar ด้านบนออกเล็กน้อย) */
            height: calc(100dvh - 70px);
            min-height: 500px; /* กำหนดขั้นต่ำไว้เผื่อจอสั้นมากๆ */
          }

          .hero-title {
            font-size: 38px;
          }

          .hero-subtitle {
            font-size: 22px;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  )
}

export default Home