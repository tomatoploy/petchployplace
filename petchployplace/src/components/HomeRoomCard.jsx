import { useState } from 'react'

import room from '../assets/room.jpg'

function HomeRoomCard({setCurrentPage}){
  const [isBtnHovered, setIsBtnHovered] = useState(false)

  return(
    <div style={{width: '100%', padding: '40px 0px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '80%', border: '1px solid #f5f5f5', display: 'flex', borderRadius: '16px', padding: '0px', flexWrap: 'wrap', overflow: 'hidden', boxShadow: '0 10px 35px rgba(0,0,0,0.04)'}}>
        <div style={{flex: '1 1 450px', height: '400px'}}>
          <img src={room} alt="ห้องพัก เพชร พลอย เพลส" 
          style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
        </div>
        <div style={{flex: '1 1 450px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
          <span style={{ color: '#f75c1c', fontWeight: '600', fontSize: '12px', letterSpacing: '2px', marginBottom: '8px' }}>
            FEATURED ROOM
          </span>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '28px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt' }}>
            ห้องพักพร้อมอยู่ เฟอร์นิเจอร์ครบครัน
          </h3>
          <p style={{ margin: '0 0 30px 0', fontSize: '14.5px', color: '#666666', lineHeight: '1.7', fontWeight: '300' }}>
            สัมผัสสเปซการอยู่อาศัยที่ลงตัว โปร่งสบายและเป็นส่วนตัว ห้องพักทุกห้องมาพร้อมสิ่งอำนวยความสะดวกหลัก (เตียงนอน, ตู้เสื้อผ้า, เครื่องปรับอากาศ/พัดลม) และระเบียงรับลมในตัว ดูแลระบบความปลอดภัยอย่างดีเยี่ยมเพื่อความอุ่นใจของคุณ
          </p>

          <div style={{ marginBottom: '35px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#888888' }}>อัตราค่าเช่าเริ่มต้น</span>
            <div>
              <span style={{ fontSize: '32px', fontWeight: '600', color: '#f75c1c' }}>3,800</span>
              <span style={{ fontSize: '15px', color: '#222222', fontWeight: '500' }}> บาท/เดือน</span>
            </div>
          </div>

          <button onClick={() => setCurrentPage('rooms')} onMouseEnter={() => setIsBtnHovered(true)} onMouseLeave={() => setIsBtnHovered(false)}
            style={{padding: '14px 36px', borderRadius: '30px', border: '2px solid #222222', backgroundColor: isBtnHovered ? '#3f3f3f' : 'transparent', color: isBtnHovered ? '#ffffff' : '#222222', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease', fontFamily: 'Prompt', display: 'flex'}}>
            ดูรายละเอียดห้องพักทั้งหมด
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default HomeRoomCard