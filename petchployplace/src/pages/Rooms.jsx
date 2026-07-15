import { useState } from 'react'

import Header from '../components/Header'
import RoomFacility from '../components/RoomFacility'
import roomImg from '../assets/room.jpg'

function Rooms() {
  // สแตนด์บาย State สำหรับการ Hover ปุ่มของการ์ดแต่ละโซน (แยกกันเพื่อไม่ให้แย่งสถานะ Hover)
  const [hoveredRoomIndex, setHoveredRoomIndex] = useState(null)
  const [hoveredShopIndex, setHoveredShopIndex] = useState(null)

  // 🛏️ 1. ข้อมูลรายละเอียดห้องพักแต่ละประเภท
  const roomTypes = [
    {
      title: "ห้องพัดลม (Standard Fan)",
      price: "3,500",
      description: "ห้องพักขนาดมาตรฐานโปร่งสบาย รับลมธรรมชาติจากระเบียงส่วนตัว เหมาะสำหรับผู้ที่เน้นความคุ้มค่าและประหยัดพลังงาน",
      amenities: ["เตียงนอนพร้อมฟูก", "ตู้เสื้อผ้า", "โต๊ะเครื่องแป้ง/โต๊ะทำงาน", "พัดลมติดเพดาน/ผนัง", "ห้องน้ำในตัว", "ระเบียงส่วนตัวกว้างขวาง"]
    },
    {
      title: "ห้องแอร์ (Standard Air Conditioning)",
      price: "3,800",
      description: "ห้องพักขนาดมาตรฐานพร้อมเครื่องปรับอากาศประหยัดไฟ เย็นสบายตลอดวัน ตอบโจทย์การพักผ่อนอย่างเต็มอิ่มในสเปซที่ลงตัว",
      amenities: ["เครื่องปรับอากาศประหยัดไฟ", "เตียงนอนพร้อมฟูก", "ตู้เสื้อผ้า", "โต๊ะเครื่องแป้ง/โต๊ะทำงาน", "ห้องน้ำในตัว", "ระเบียงส่วนตัว"]
    },
    {
      title: "ห้องหัวมุม (Corner Luxury)",
      price: "4,500",
      description: "ห้องพักทำเลพิเศษขนาดใหญ่ที่สุดในอาคาร ได้รับพื้นที่สเปซกว้างขวางเป็นพิเศษ เปิดรับวิวระเบียงได้กว้างกว่าและรับแสงธรรมชาติได้เต็มที่",
      amenities: ["เครื่องปรับอากาศประหยัดไฟ", "พื้นที่ใช้สอยกว้างขวางพิเศษ", "เตียงนอนพร้อมฟูก", "ตู้เสื้อผ้าขนาดใหญ่", "โต๊ะทำงาน/เครื่องแป้ง", "ห้องน้ำในตัวพร้อมระเบียงรับลมสองฝั่ง"]
    }
  ]

  // 🏪 2. ข้อมูลพื้นที่เช่าสำหรับร้านค้า/ทำธุรกิจ (เพิ่มใหม่)
  const shopTypes = [
    {
      title: "พื้นที่ร้านค้าใต้หอพัก (Premium Commercial Space)",
      price: "6,500", // ปรับเปลี่ยนราคาตามจริงได้เลยครับ
      description: "ทำเลทองชั้นล่างสุดของอาคาร เหมาะสำหรับประกอบธุรกิจหลากหลายประเภท เช่น ร้านสะดวกซื้อ ร้านกาแฟ ร้านซักรีด หรือร้านเสริมสวย เข้าถึงกลุ่มลูกค้าที่เป็นผู้พักอาศัยในโครงการและบุคคลภายนอกได้ง่าย",
      highlights: ["ทำเลติดถนน/หน้าโครงการ เดินทางสะดวก", "ระบบน้ำ-ไฟสำหรับธุรกิจพร้อมใช้งาน", "กระจกบานใหญ่รอบด้าน เทควิวดี รับแสงสวย", "ที่จอดรถรองรับลูกค้าหน้าร้าน", "มีฐานลูกค้าประจำคือผู้พักอาศัยในอาคาร"]
    }
  ]

  // 🏢 3. ข้อมูลบริการและสิ่งอำนวยความสะดวกจากส่วนกลาง
  const centralFacilities = [
    { icon: "🔒", title: "ระบบรักษาความปลอดภัย", desc: "เข้า-ออกอาคารด้วยระบบคีย์การ์ด (Keycard Access) ปลอดภัยเป็นส่วนตัว" },
    { icon: "📷", title: "กล้องวงจรปิด CCTV", desc: "ติดตั้งกล้องวงจรปิดดูแลความปลอดภัยครอบคลุมทุกชั้นตลอด 24 ชั่วโมง" },
    { icon: "🧺", title: "มุมซักผ้าหยอดเหรียญ", desc: "มีบริการเครื่องซักผ้าและตู้น้ำดื่มหยอดเหรียญประสิทธิภาพสูงที่ชั้นล่าง" },
    { icon: "🚗", title: "พื้นที่จอดรถ", desc: "ช่องจอดรถจักรยานยนต์และรถยนต์ในบริเวณโครงการอย่างเป็นระเบียบ" }
  ]

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      
      <Header title='ห้องพัก พื้นที่ให้เช่า และบริการจากส่วนกลาง' description='สเปซที่ลงตัวเพื่อความสุขและการเติบโตทางธุรกิจ' image={roomImg}/>

      {/* 🛏️ SECTION 1: โซนประเภทห้องพัก */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px 40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#f75c1c', fontWeight: '600', fontSize: '11px', letterSpacing: '2px' }}>RESIDENTIAL</span>
          <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt', margin: '6px 0 0 0' }}>อัตราค่าเช่ารายเดือน (ห้องพัก)</h2>
          <div style={{ width: '50px', height: '3px', backgroundColor: '#f75c1c', margin: '12px auto 0 auto' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {roomTypes.map((room, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                border: '1px solid #f2f2f2',
                borderLeft: index === 2 ? '5px solid #f75c1c' : '1px solid #f2f2f2'
              }}
            >
              {/* รูปฝั่งซ้าย */}
              <div style={{ flex: '1 1 400px', height: '320px', backgroundColor: '#eaeaea' }}>
                <img src={roomImg} alt={room.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* ข้อความฝั่งขวา */}
              <div style={{ flex: '1 1 500px', padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                    <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt' }}>{room.title}</h3>
                    <div style={{ fontFamily: 'Prompt' }}>
                      <span style={{ fontSize: '24px', fontWeight: '600', color: '#f75c1c' }}>{room.price}</span>
                      <span style={{ fontSize: '14px', color: '#666666' }}> บาท/เดือน</span>
                    </div>
                  </div>
                  
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666666', lineHeight: '1.6', fontWeight: '300' }}>{room.description}</p>
                  
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: '500', color: '#222222', fontFamily: 'Prompt' }}>สิ่งอำนวยความสะดวกในห้องพัก:</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px', marginBottom: '20px' }}>
                    {room.amenities.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#555555' }}>
                        <span style={{ color: '#f75c1c', fontSize: '12px' }}>✓</span>
                        <span style={{ fontFamily: 'Prompt', fontWeight: '300' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏪 SECTION 2: โซนพื้นที่เช่าสำหรับร้านค้า (เพิ่มใหม่) */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px 60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#0084ff', fontWeight: '600', fontSize: '11px', letterSpacing: '2px' }}>COMMERCIAL SPACE</span>
          <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt', margin: '6px 0 0 0' }}>พื้นที่เช่าประกอบธุรกิจ / ร้านค้า</h2>
          <div style={{ width: '50px', height: '3px', backgroundColor: '#0084ff', margin: '12px auto 0 auto' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {shopTypes.map((shop, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row-reverse', // สลับฝั่งรูปภาพให้เว็บบอร์ดดูมีมิติ ไม่ซ้ำซาก
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                border: '1px solid #f2f2f2',
                borderRight: '5px solid #0084ff' // ไฮไลต์ขอบสีน้ำเงินให้ดูแตกต่างจากห้องพักปกติ
              }}
            >
              {/* รูปฝั่งขวา */}
              <div style={{ flex: '1 1 400px', height: '340px', backgroundColor: '#eaeaea' }}>
                <img src={roomImg} alt={shop.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* ข้อความฝั่งซ้าย */}
              <div style={{ flex: '1 1 500px', padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                    <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt' }}>{shop.title}</h3>
                    <div style={{ fontFamily: 'Prompt' }}>
                      <span style={{ fontSize: '24px', fontWeight: '600', color: '#0084ff' }}>{shop.price}</span>
                      <span style={{ fontSize: '14px', color: '#666666' }}> บาท/เดือน</span>
                    </div>
                  </div>
                  
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666666', lineHeight: '1.6', fontWeight: '300' }}>{shop.description}</p>
                  
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: '500', color: '#222222', fontFamily: 'Prompt' }}>จุดเด่นและความพร้อมของพื้นที่:</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px' }}>
                    {shop.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#555555' }}>
                        <span style={{ color: '#0084ff', fontSize: '14px' }}>🏢</span>
                        <span style={{ fontFamily: 'Prompt', fontWeight: '300' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RoomFacility />

    </div>
  )
}

export default Rooms