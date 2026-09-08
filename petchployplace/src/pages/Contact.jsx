import Header2 from '../components/Header2'

import apartment from '../assets/apartment.jpg'
import logo from '../assets/logoOrange.png'
import { apartmentData } from '../Data'

function Contact() {
  return (
    <section style={{ width: '100%', margin: 0 }}>
      <Header2 category="CONTACT US" title={apartmentData.nameTH} description="ช่องทางการติดต่อ"/>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
        {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '36px 0' }}>
          <img src={logo} alt={apartmentData.nameTH} style={{ width: '55px', height: '55px', marginBottom: '12px' }} />
          <h2 style={{ margin: '0', fontSize: '24px', fontWeight: '600', color: '#000000', fontFamily: 'Prompt' }}>{apartmentData.nameTH}</h2>
          <p style={{ margin: 0, fontSize: '15px', color: '#222222', fontWeight: '400', fontFamily: 'Prompt' }}>อะพาร์ตเมนต์</p>
        </div> */}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px', marginBottom: '24px', alignItems: 'start'
        }}>
          <div style={columnStyle}>
            <h3 style={titleStyle}>ที่อยู่</h3>
            <p style={detailStyle}>
              91 ซอยรามอินทรา 39<br />
              ระหว่างแยก 1 และ 3<br />
              ถนนรามอินทรา แขวงอนุสาวรีย์<br />
              เขตบางเขน กรุงเทพฯ 10220
            </p>
          </div>
          <div style={columnStyle}>
            <h3 style={titleStyle}>โทรศัพท์</h3>
            <p style={{ ...detailStyle, marginBottom: '20px' }}>
              087-712-9327<br />
              099-396-1919
            </p>
            <p style={detailStyle}>
              petchployplace@gmail.com
            </p>
          </div>
          <div style={columnStyle}>
            <h3 style={titleStyle}>เวลาทำการ</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', fontSize: '15px', color: '#000000', fontFamily: 'Prompt', fontWeight: '400' }}>
              <span>ทุกวัน</span>
              <span>09:00 - 18:00 น.</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
              <a 
                href="https://lin.ee/o8bCSwB" 
                target="_blank" // สั่งให้เปิดแท็บใหม่
                rel="noopener noreferrer"
                style={iconLinkStyle}
                title="แอดไลน์สอบถาม"
              >
                <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#f75c1c">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
              </a>
              {/* <a 
                href="https://facebook.com/petchployplace39"
                target="_blank" 
                rel="noopener noreferrer"
                style={iconLinkStyle}
                title="ไปที่หน้า Facebook เพจ"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24" fill="#f75c1c">
                <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
              </a> */}
              <a 
                href="tel:0877129327"
                style={iconLinkStyle}
                title="โทรสอบถามทันที"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24" fill="#f75c1c">
                <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '450px', margin: 0, padding: 0, overflow: 'hidden', display: 'flex' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.6027792534437!2d100.62445847509227!3d13.86286608654071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d62ac3c87b9a7%3A0xd2316acec8a3fcf7!2z4LmA4Lie4LiK4LijIOC4nuC4peC4reC4oiDguYDguJ7guKXguKogLSDguK3guJ7guLLguKPguYzguJfguYDguKHguJnguJfguYw!5e0!3m2!1sth!2sth!4v1783567400154!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="แผนที่ เพชร พลอย เพลส"
        />
      </div>
    </section>
  )
}

const columnStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '10px'}
const titleStyle = { fontSize: '22px', fontWeight: '500', color: '#000000', margin: '0 0 20px 0', fontFamily: 'Prompt', letterSpacing: '0.5px'}
const detailStyle = { fontSize: '15px', color: '#222222', lineHeight: '1.8', margin: 0, fontFamily: 'Prompt', fontWeight: '400'}
const iconLinkStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', // ดัดกรอบล้อมรอบไอคอนให้เป็นวงกลมมนๆ
  backgroundColor: '#f9f9f9', border: '1px solid #eeeeee', cursor: 'pointer', transition: 'all 0.2s ease', textDecoration: 'none'}

export default Contact