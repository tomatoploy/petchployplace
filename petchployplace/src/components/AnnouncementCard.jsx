// src/components/AnnouncementCard.jsx
import { useState } from 'react'

function AnnouncementCard({ image, date, title, excerpt, isImportant, onClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} //เปิด Pop-up
      style={{
        backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: isHovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.02)',
        display: 'flex', flexDirection: 'column', transform: isHovered ? 'translateY(-5px)' : 'translateY(0)', transition: 'all 0.3s ease', textAlign: 'left', position: 'relative', cursor: 'pointer' 
      }}
    >

      {isImportant && (
        <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: '#f75c1c', color: '#ffffff', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', fontFamily: 'Prompt', zIndex: 10 }}>
          สำคัญ
        </span>
      )}

      <div style={{ width: '100%', height: '180px', backgroundColor: '#eaeaea', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s ease' }} />
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '12px', color: '#999999', fontFamily: 'Prompt', fontWeight: '300' }}>📅 {date}</span>
          <h3 style={{ margin: '8px 0', fontSize: '17px', fontWeight: '650', color: '#222222', fontFamily: 'Prompt', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {title}
          </h3>
          <p style={{ margin: '0 0 20px 0', fontSize: '13.5px', color: '#666666', lineHeight: '1.6', fontFamily: 'Prompt', fontWeight: '300', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {excerpt}
          </p>
        </div>

        <span style={{ color: isHovered ? '#f75c1c' : '#222222', fontFamily: 'Prompt', fontSize: '13.5px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px', transition: 'color 0.2s ease' }}>
          อ่านรายละเอียดเพิ่มเติม {isHovered ? '→' : '›'}
        </span>
      </div>
    </div>
  )
}

export default AnnouncementCard