import { useState } from 'react'
import room from '../assets/room.jpg'

function HomeRoomCard({ setCurrentPage }) {
  const [isBtnHovered, setIsBtnHovered] = useState(false)

  return (
    <div className="home-room-container">
      <div className="home-room-card">
        {/* ฝั่งรูปภาพ */}
        <div className="home-room-image-wrapper">
          <img 
            src={room} 
            alt="ห้องพัก เพชร พลอย เพลส" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* ฝั่งเนื้อหา */}
        <div className="home-room-content">
          <span style={{ color: '#f75c1c', fontWeight: '600', fontSize: '12px', letterSpacing: '2px', marginBottom: '8px' }}>
            FEATURED ROOM
          </span>
          <h3 className="home-room-title">
            ห้องพักพร้อมอยู่ เฟอร์นิเจอร์ครบครัน
          </h3>
          <p className="home-room-description">
            สัมผัสสเปซการอยู่อาศัยที่ลงตัว โปร่งสบายและเป็นส่วนตัว ห้องพักทุกห้องมาพร้อมสิ่งอำนวยความสะดวกหลัก (เตียงนอน, ตู้เสื้อผ้า, เครื่องปรับอากาศ/พัดลม) และระเบียงรับลมในตัว ดูแลระบบความปลอดภัยอย่างดีเยี่ยมเพื่อความอุ่นใจของคุณ
          </p>

          <button 
            onClick={() => setCurrentPage('rooms')} 
            onMouseEnter={() => setIsBtnHovered(true)} 
            onMouseLeave={() => setIsBtnHovered(false)}
            className="home-room-button"
            style={{
              backgroundColor: isBtnHovered ? '#3f3f3f' : 'transparent',
              color: isBtnHovered ? '#ffffff' : '#222222',
            }}
          >
            ดูรายละเอียดห้องพักทั้งหมด
          </button>
        </div>
      </div>

      <style>{`
        /* 💻 ขนาดในคอมพิวเตอร์ (ใช้ Style เดิมของคุณเป๊ะๆ) */
        .home-room-container {
          width: 100%;
          padding: 40px 0px;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .home-room-card {
          width: 80%;
          border: 1px solid #f5f5f5;
          display: flex;
          border-radius: 16px;
          padding: 0px;
          flex-wrap: wrap;
          overflow: hidden;
          box-shadow: 0 10px 35px rgba(0,0,0,0.04);
          background-color: #ffffff;
        }

        .home-room-image-wrapper {
          flex: 1 1 450px;
          height: 400px;
        }

        .home-room-content {
          flex: 1 1 450px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          box-sizing: border-box;
        }

        .home-room-title {
          margin: 0 0 16px 0;
          font-size: 28px;
          font-weight: 600;
          color: #222222;
          font-family: 'Prompt', sans-serif;
        }

        .home-room-description {
          margin: 0 0 30px 0;
          font-size: 14.5px;
          color: #666666;
          line-height: 1.7;
          font-weight: 300;
          font-family: 'Prompt', sans-serif;
        }

        .home-room-button {
          padding: 14px 36px;
          border-radius: 30px;
          border: 2px solid #222222;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Prompt', sans-serif;
          display: flex;
        }

        /* 📱 ปรับแต่งเฉพาะตอนเปิดบนมือถือ/หน้าจอแคบ (<= 768px) */
        @media (max-width: 768px) {
          .home-room-container {
            padding: 20px 16px; /* เว้นขอบข้างเพื่อไม่ให้การ์ดชิดจอเกินไป */
          }

          .home-room-card {
            width: 100%; /* ขยายเต็มความกว้างหน้าจอมือถือ */
            flex-direction: column;
          }

          .home-room-image-wrapper {
            width: 100%;
            height: 240px; /* ลดความสูงรูปภาพให้พอดีกับหน้าจอมือถือ */
            flex: none;
          }

          .home-room-content {
            padding: 28px 20px; /* ลด padding ลงเล็กน้อยให้อ่านง่ายขึ้น */
            flex: none;
            width: 100%;
          }

          .home-room-title {
            font-size: 22px; /* ลดขนาดหัวข้อลงนิดหน่อยไม่ให้กินบรรทัดเยอะเกินไป */
          }

          .home-room-description {
            font-size: 13.5px;
            margin-bottom: 24px;
          }

          .home-room-button {
            width: 100%;
            justify-content: center;
            padding: 12px 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default HomeRoomCard