import { useState } from 'react'

import Header from '../components/Header'
import RoomFacility from '../components/RoomFacility'
import Header2 from '../components/Header2'

import roomImg from '../assets/room.jpg'
import roomTypeA from '../assets/roomTypeA.jpg'
import roomTypeB from '../assets/roomTypeB.jpg'
import roomTypeC from '../assets/roomTypeC.jpg'

function Rooms() {
  const [hoveredRoomIndex, setHoveredRoomIndex] = useState(null)
  const [hoveredShopIndex, setHoveredShopIndex] = useState(null)

  // 🔍 State สำหรับจัดการภาพที่คลิกเปิดซูมดูเต็มจอ
  const [activeImage, setActiveImage] = useState(null)
  const [zoomScale, setZoomScale] = useState(1)

  const openImageModal = (imageSrc) => {
    setActiveImage(imageSrc)
    setZoomScale(1) // รีเซ็ตระดับการซูมเริ่มต้น
  }

  const closeImageModal = () => {
    setActiveImage(null)
    setZoomScale(1)
  }

  const handleZoomIn = () => setZoomScale(prev => Math.min(prev + 0.3, 2.5))
  const handleZoomOut = () => setZoomScale(prev => Math.max(prev - 0.3, 1))

  const roomTypes = [
    {
      title: "ห้องพัดลม",
      image: roomTypeA,
      space: "22",
      description: `ห้องพักขนาดมาตรฐาน โปร่งสบาย รับลมธรรมชาติจากระเบียงส่วนตัว เหมาะสำหรับผู้ที่เน้นความคุ้มค่าและประหยัดค่าใช้จ่าย`,
      amenities: ["เตียงนอนพร้อมฟูก", "ห้องน้ำในตัว", "ระเบียงส่วนตัว", "ตู้เสื้อผ้า", "โต๊ะเครื่องแป้ง", "พัดลมเพดาน"]
    },
    {
      title: "ห้องแอร์",
      image: roomTypeB,
      space: "22",
      description: "ห้องพักขนาดมาตรฐานพร้อมเครื่องปรับอากาศประหยัดไฟ เย็นสบายตลอดวัน ตอบโจทย์การพักผ่อนอย่างเต็มอิ่มในสเปซที่ลงตัว",
      amenities: ["เตียงนอนพร้อมฟูก", "ห้องน้ำในตัว", "ระเบียงส่วนตัว", "ตู้เสื้อผ้า", "โต๊ะเครื่องแป้ง", "พัดลมเพดาน", "เครื่องปรับอากาศ"]
    },
    {
      title: "ห้องแอร์หัวมุม",
      image: roomTypeC,
      space: "24",
      description: "ห้องพักหัวมุมทำเลพิเศษขนาดใหญ่ที่สุดในอาคาร ได้รับพื้นที่กว้างขวางเป็นพิเศษ เปิดรับวิวระเบียงได้กว้างกว่าและรับแสงธรรมชาติได้เต็มที่",
      amenities: ["เตียงนอนพร้อมฟูก", "ห้องน้ำในตัว", "ระเบียงส่วนตัว", "ตู้เสื้อผ้า", "โต๊ะเครื่องแป้ง", "พัดลมเพดาน", "เครื่องปรับอากาศ"]
    }
  ]

  const shopTypes = [
    {
      title: "พื้นที่ร้านค้าใต้หอพัก",
      price: "6,500",
      description: "ทำเลทองชั้นล่างสุดของอาคาร เหมาะสำหรับประกอบธุรกิจหลากหลายประเภท เช่น ร้านสะดวกซื้อ ร้านกาแฟ หรือร้านเสริมสวย เข้าถึงกลุ่มลูกค้าที่เป็นผู้พักอาศัยและบุคคลภายนอกได้ง่าย",
      highlights: ["ทำเลดี ติดถนนหน้าอะพาร์ตเมนต์ เดินทางสะดวก", "ระบบน้ำ-ไฟพร้อมใช้งาน", "ที่จอดรถรองรับลูกค้าหน้าร้าน"]
    }
  ]

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff', margin: 0, padding: 0, fontFamily: 'Prompt' }}>
      
      {activeImage && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(15, 15, 15, 0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', boxSizing: 'border-box' }}
          onClick={closeImageModal}
        >
          {/* กรอบภาพ */}
          <div 
            style={{ position: 'relative', maxWidth: '95vw', maxHeight: '88vh', width: 'fit-content', height: 'fit-content', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', padding: '4px 6px', borderRadius: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: '1px solid rgba(255, 255, 255, 0.4)', zIndex: 10000 }}
            >
              <button 
                onClick={handleZoomIn} 
                title="ซูมเข้า"
                style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: 'transparent', color: '#111111', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
              <button 
                onClick={handleZoomOut} 
                title="ซูมออก"
                style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: 'transparent', color: zoomScale <= 1 ? '#aaaaaa' : '#111111', cursor: zoomScale <= 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s ease' }}
                onMouseEnter={(e) => {
                  if (zoomScale > 1) e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>

              <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(0,0,0,0.12)', margin: '0 2px' }} />

              <button 
                onClick={closeImageModal} 
                title="ปิด"
                style={{ width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: '#f75c1c', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s ease, backgroundColor 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <img 
              src={activeImage} 
              alt="Enlarged Room Preview" 
              style={{ display: 'block', maxWidth: '100%', maxHeight: '82vh', transform: `scale(${zoomScale})`, transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)', objectFit: 'contain' }} 
            />
          </div>
        </div>
      )}

      {/* โครงสร้างหน้าเว็บหลัก */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0px 20px 40px 20px', boxSizing: 'border-box' }}>
        <Header2 category="RESIDENTIAL AREA" title="พื้นที่ห้องพัก" description="หมายเหตุ บริการเช่าแบบรายเดือนเท่านั้น"/>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {roomTypes.map((room, index) => (
            <div 
              key={index}
              className="room-card"
              style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f2f2f2', borderLeft: index === 2 ? '5px solid #f75c1c' : '1px solid #f2f2f2'}}
            >
              {/* กรอบรูปภาพห้องพัก */}
              <div 
                className="room-card-image"
                style={{ flex: '1 1 400px', height: '320px', backgroundColor: '#eaeaea', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                onClick={() => openImageModal(room.image)}
              >
                <img 
                  src={room.image} 
                  alt={room.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(4px)', color: '#000000', padding: '4px 12px', borderRadius: '15px', fontSize: '11px', fontWeight: '300' }}>
                  คลิกเพื่อดูรูปใหญ่
                </span>
              </div>

              <div className="room-card-content" style={{ flex: '1 1 500px', padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left', boxSizing: 'border-box' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                    <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt' }}>{room.title}</h3>
                    <div style={{ fontFamily: 'Prompt' }}>
                      <span style={{ fontSize: '14px', color: '#666666' }}>{room.space} ตารางเมตร</span>
                    </div>
                  </div>
                  
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666666', lineHeight: '1.6', fontWeight: '300', whiteSpace: 'pre-line' }}>{room.description}</p>
                  
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: '500', color: '#222222', fontFamily: 'Prompt' }}>สิ่งอำนวยความสะดวกในห้องพัก</h4>
                  <div className="amenities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px', marginBottom: '20px' }}>
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

      {/* ส่วนพื้นที่ร้านค้า */}
      <div style={{ backgroundColor: '#fcfcfc' }}>
        <section style={{ maxWidth: '1100px', margin: '0px auto 20px auto', padding: '40px 20px', boxSizing: 'border-box' }}>
          <Header2 category="COMMERCIAL SPACE" title="พื้นที่ร้านค้า"/>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {shopTypes.map((shop, index) => (
              <div 
                key={index}
                className="shop-card"
                style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse', backgroundColor: '#ffffff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f2f2f2', borderRight: '5px solid #f75c1c' }}
              >
                <div 
                  className="shop-card-image"
                  style={{ flex: '1 1 400px', height: '340px', backgroundColor: '#eaeaea', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                  onClick={() => openImageModal(roomImg)}
                >
                  <img 
                    src={roomImg} 
                    alt={shop.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <span style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(4px)', color: '#000000', padding: '4px 12px', borderRadius: '15px', fontSize: '11px', fontWeight: '300' }}>
                    คลิกเพื่อดูรูปใหญ่
                  </span>
                </div>

                <div className="shop-card-content" style={{ flex: '1 1 500px', padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left', boxSizing: 'border-box' }}>
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt' }}>{shop.title}</h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#666666', lineHeight: '1.6', fontWeight: '300' }}>{shop.description}</p>
                    <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: '500', color: '#222222', fontFamily: 'Prompt' }}>จุดเด่นและความพร้อมของพื้นที่</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px' }}>
                      {shop.highlights.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#555555' }}>
                          <span style={{ color: '#f75c1c', fontSize: '14px' }}>✓</span>
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
      </div>

      <RoomFacility />

      <style>{`
        /* 📱 จัดการเฉพาะหน้าจอมือถือ (<= 768px) */
        @media (max-width: 768px) {
          .room-card, .shop-card {
            flex-direction: column !important; /* บังคับสลับเป็นแนวตั้งทั้งหมด */
          }

          .room-card-image, .shop-card-image {
            flex: none !important;
            width: 100% !important;
            height: 230px !important; /* ปรับความสูงรูปภาพให้สมดุลบนจอมือถือ */
          }

          .room-card-content, .shop-card-content {
            flex: none !important;
            width: 100% !important;
            padding: 24px 20px !important; /* ลด padding ให้ตัวหนังสือมีพื้นที่พอดี */
          }

          .amenities-grid {
            grid-template-columns: repeat(2, 1fr) !important; /* แสดงสิ่งอำนวยความสะดวกเป็น 2 คอลัมน์บนมือถือ */
            gap: 10px 6px !important;
          }
        }
      `}</style>

    </div>
  )
}

export default Rooms