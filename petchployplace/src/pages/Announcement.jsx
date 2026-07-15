import { useState } from "react"

import Header2 from "../components/Header2"
import AnnouncementCard from "../components/AnnouncementCard"
import defaultImg from "../assets/apartment2.jpg"

const announcements = [
  {
    image: defaultImg,
    date: "12 กรกฎาคม 2026",
    title: "เปิดจองห้องพักล่วงหน้าสำหรับเทอมปีการศึกษาใหม่ พร้อมโปรโมชั่นพิเศษ!",
    excerpt: "ต้อนรับเปิดเทอมใหม่กับสเปซที่ลงตัว! เพชร พลอย เพลส เปิดให้จองห้องพักล่วงหน้าแล้ววันนี้ ทั้งห้องแอร์มาตรฐานและห้องหัวมุมวิวสวย รับสิทธิ์ฟรีอินเทอร์เน็ตความเร็วสูง 3 เดือนแรก จองด่วนจำนวนจำกัด หอพักของเราตั้งอยู่ใกล้สถานศึกษา เดินทางสะดวก ปลอดภัยด้วยระบบคีย์การ์ดตลอด 24 ชั่วโมง สนใจติดต่อจองล็อกห้องพักก่อนใครได้ที่สำนักงานหรือ LINE Official ของโครงการ",
    isImportant: true
  },
  {
    image: defaultImg,
    date: "1 กรกฎาคม 2026",
    title: "แจ้งกำหนดการบิ๊กคลีนนิ่ง (Big Cleaning) ประจำปีพื้นที่ส่วนกลาง",
    excerpt: "เพื่อสุขอนามัยที่ดีของผู้พักอาศัย ทางโครงการจะดำเนินงานทำความสะอาดใหญ่และฉีดพ่นน้ำยาฆ่าเชื้อบริเวณโถงทางเดิน มุมสะดวกซัก และพื้นที่จอดรถ ในวันเสาร์ที่ 18 กรกฎาคมนี้ ตั้งแต่เวลา 09.00 - 15.00 น. ระหว่างการดำเนินงานอาจมีเสียงดังรบกวนชั่วคราว ทางโครงการขออภัยในความไม่สะดวกมา ณ ที่นี้",
    isImportant: false
  }
]

function Announcements() {
  const [activePost, setActivePost] = useState(null)

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '80px', position: 'relative' }}>
      
      <Header2 
        category="NEWS & UPDATES" 
        title="ประกาศและข่าวสาร" 
        description="ติดตามข่าวสาร กฎระเบียบ และอัปเดตสิทธิพิเศษต่าง ๆ จากทางโครงการ" 
      />

      {/* แผง Grid รายการประกาศ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px' }}>
        {announcements.map((post, index) => (
          <AnnouncementCard 
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
            isImportant={post.isImportant}
            onClick={() => setActivePost(post)} // 🌟 คลิกแล้วเอาข้อมูลชิ้นนี้ไปใส่ใน State
          />
        ))}
      </div>

      {/* 📥 3. โค้ดส่วนหน้าต่าง Pop-up (เงื่อนไข: จะเรนเดอร์เมื่อ activePost ไม่เป็น null เท่านั้น) */}
      {activePost && (
        <div 
          onClick={() => setActivePost(null)} // 🌟 คลิกพื้นที่สีดำรอบๆ เพื่อปิด Pop-up
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // พื้นหลังมืดโปร่งแสง
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
            backdropFilter: 'blur(4px)' // ทำพื้นหลังเบลอหรูๆ
          }}
        >
          {/* กล่องสีขาวหน้าต่าง Pop-up */}
          <div 
            onClick={(e) => e.stopPropagation()} // 🌟 ดักไว้ไม่ให้คลิกข้างในกล่องขาวแล้ว Pop-up ปิด
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              maxWidth: '600px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              animation: 'fadeIn 0.2s ease-out',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* รูปภาพใน Pop-up */}
            <div style={{ width: '100%', height: '240px', backgroundColor: '#eaeaea' }}>
              <img src={activePost.image} alt={activePost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* เนื้อหาด้านใน */}
            <div style={{ padding: '30px', fontFamily: 'Prompt' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '13px', color: '#999999', fontWeight: '300' }}>📅 {activePost.date}</span>
                {/* ❌ ปุ่มกดปิดมุมขวา */}
                <button 
                  onClick={() => setActivePost(null)}
                  style={{ background: 'none', border: 'none', fontSize: '20px', color: '#999999', cursor: 'pointer', padding: '5px' }}
                >
                  ✕
                </button>
              </div>

              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#222222', margin: '0 0 15px 0', lineHeight: '1.4' }}>
                {activePost.title}
              </h2>

              {/* ข้อความแบบเต็ม (ไม่อั้นบรรทัดแล้ว) */}
              <p style={{ fontSize: '14.5px', color: '#555555', lineHeight: '1.7', fontWeight: '300', margin: '0 0 25px 0', whiteSpace: 'pre-line' }}>
                {activePost.excerpt}
              </p>

              {/* ปุ่มปิดด้านล่าง */}
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

    </div>
  )
}

export default Announcements