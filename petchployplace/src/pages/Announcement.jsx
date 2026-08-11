import { useState } from "react"

import Header2 from "../components/Header2"
import AnnouncementCard from "../components/AnnouncementCard"

import defaultImg from "../assets/apartment2.jpg"
import announce_parking from "../assets/announce_parking.png"
import announce_line from "../assets/announce_line.png"
import announce_service from "../assets/announce_service.png"
import announce_warning from "../assets/announce_warning.png"

const announcements = [
  {
    image: announce_line,
    date: "17 กรกฎาคม 2569",
    title: "ขั้นตอนการลงทะเบียนรับบิลออนไลน์ผ่าน LINE",
    excerpt: `ขั้นตอนง่ายๆ ในการลงทะเบียนรับบิลออนไลน์ผ่าน LINE Official:

1. กดเลือกเมนู "ลงทะเบียน Line" บนหน้าต่างแชท
2. กรอกข้อมูล "หมายเลขห้องพัก" และ "เบอร์โทรศัพท์" จากนั้นกดปุ่ม "ยืนยันการลงทะเบียน"`,
    isImportant: false
  },
  {
    image: announce_service,
    date: "3 กรกฎาคม 2569",
    title: "แจ้งอัตราการใช้บริการจากเจ้าหน้าที่",
    excerpt: `สรุปอัตราค่าบริการกรณีขอความช่วยเหลือจากเจ้าหน้าที่อพาร์ตเมนต์เพชร พลอย เพลส ตามช่วงเวลาดังนี้:

⏰ เวลา 08:00 - 18:00 น. : ค่าบริการ 50 บาท
⏰ เวลา 18:00 - 22:00 น. : ค่าบริการ 200 บาท
⏰ เวลา 22:00 - 08:00 น. : ค่าบริการ 300 บาท

จึงเรียนมาเพื่อทราบ`,
    isImportant: false
  },
  {
    image: announce_parking,
    date: "1 พฤษภาคม 2568",
    title: "ประกาศกฎระเบียบการจอดรถจักรยานยนต์",
    excerpt: `ไม่อนุญาตให้ผู้เช่าห้องพัก เพชร พลอย เพลส จอดรถจักรยานยนต์บริเวณหน้าร้านสะดวกซัก 24WASH เนื่องจากทางอาคารจำเป็นต้องสำรองพื้นที่จอดรถไว้สำหรับผู้มาใช้บริการร้านสะดวกซัก

ขอความร่วมมือผู้เช่าทุกท่าน กรุณานำรถจักรยานยนต์ของท่านไปจอดในพื้นที่จอดรถที่ได้จัดเตรียมไว้ให้อย่างเป็นระเบียบ

⚠️ หากพบผู้ฝ่าฝืน ทางโครงการมีความจำเป็นต้องดำเนินการล็อคล้อและปรับครั้งละ 300 บาท

จึงเรียนมาเพื่อทราบและโปรดให้ความร่วมมือ`,
    isImportant: false
  },
  {
    image: announce_warning,
    date: "15 เมษายน 2568",
    title: "ประกาศเตือนภัย! ระวังมิจฉาชีพแอบอ้างและการก่อกวนในยามวิกาล",
    excerpt: `อย่าหลงเชื่อมิจฉาชีพ! หลอกให้โอนเงินเป็นค่าสินค้าออนไลน์, บริการทางเพศ หรือบริการอื่น ๆ โปรดตรวจสอบข้อมูลให้ถี่ถ้วนก่อนทำการโอนเงิน มิฉะนั้นอาจสูญเสียทรัพย์สินได้

ทาง เพชร พลอย เพลส ขอแจ้งให้ทราบว่า ทางเราไม่มีส่วนเกี่ยวข้องใด ๆ กับกลุ่มมิจฉาชีพดังกล่าวทั้งสิ้น 

ขอความร่วมมือผู้เช่าและบุคคลภายนอก
❌ ห้ามโทรศัพท์เรียกเจ้าหน้าที่, กดกริ่ง, หรือบุกรุกเข้ามาในอาคาร เพื่อตามหาบุคคลในยามวิกาลโดยเด็ดขาด

โปรดรักษามารยาทและเกรงใจผู้พักอาศัยท่านอื่นในอาคาร ขอบคุณครับ`,
    isImportant: false
  }
]

function Announcements() {
  const [activePost, setActivePost] = useState(null)

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '40px', position: 'relative' }}>
      
      <Header2 category="NEWS & UPDATES" title="ประกาศและข่าวสาร" description="ติดตามข่าวสาร กฎระเบียบ และอัปเดตสิทธิพิเศษต่าง ๆ" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px' }}>
        {announcements.map((post, index) => (
          <AnnouncementCard 
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
            isImportant={post.isImportant}
            onClick={() => setActivePost(post)}
          />
        ))}
      </div>

      {/* Pop-up Responsive */}
      {activePost && (
        <div 
          onClick={() => setActivePost(null)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '16px', boxSizing: 'border-box', backdropFilter: 'blur(4px)' }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="announcement-modal-card"
          >
            <div className="announcement-modal-image">
              <img src={activePost.image} alt={activePost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="announcement-modal-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '13px', color: '#999999', fontWeight: '300' }}>📅 {activePost.date}</span>
                <button 
                  onClick={() => setActivePost(null)}
                  style={{ background: 'none', border: 'none', fontSize: '20px', color: '#999999', cursor: 'pointer', padding: '5px' }}
                >
                  ✕
                </button>
              </div>

              <h2 className="announcement-modal-title">
                {activePost.title}
              </h2>
              
              <p className="announcement-modal-excerpt">
                {activePost.excerpt}
              </p>

              <button 
                onClick={() => setActivePost(null)}
                style={{
                  width: '100%',
                  padding: '12px 0',
                  borderRadius: '12px',
                  backgroundColor: '#222222',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '14.5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  marginTop: 'auto'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f75c1c'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#222222'}
              >
                ปิดหน้าต่างนี้
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* 💻 ขนาดในคอมพิวเตอร์ */
        .announcement-modal-card {
          background-color: #ffffff;
          width: 100%;
          max-width: 600px;
          max-height: 85vh;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .announcement-modal-image {
          width: 100%;
          height: 240px;
          background-color: #eaeaea;
          flex-shrink: 0;
        }

        .announcement-modal-content {
          padding: 30px;
          font-family: 'Prompt', sans-serif;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .announcement-modal-title {
          font-size: 20px;
          font-weight: 600;
          color: #222222;
          margin: 0 0 15px 0;
          line-height: 1.4;
        }

        .announcement-modal-excerpt {
          font-size: 14.5px;
          color: #555555;
          line-height: 1.7;
          font-weight: 300;
          margin: 0 0 25px 0;
          white-space: pre-line;
        }

        /* 📱 ปรับแต่งสำหรับมือถือ (<= 768px) */
        @media (max-width: 768px) {
          .announcement-modal-card {
            max-height: 90vh; /* จำกัดความสูงของป๊อปอัพไม่ให้หลุดขอบจอ */
            border-radius: 20px;
          }

          .announcement-modal-image {
            height: 180px; /* ลดความสูงของภาพลงเพื่อให้ข้อความมีพื้นที่มากขึ้น */
          }

          .announcement-modal-content {
            padding: 20px; /* ลด Padding ให้พอดีจอมือถือ */
          }

          .announcement-modal-title {
            font-size: 17px;
            margin-bottom: 10px;
          }

          .announcement-modal-excerpt {
            font-size: 13.5px;
            margin-bottom: 20px;
          }
        }
      `}</style>

    </div>
  )
}

export default Announcements