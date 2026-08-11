import Header2 from '../components/Header2'
import CircleBanner from "./CircleBanner";

import wash from '../assets/logo24wash.png'
import water from '../assets/logoWateri.png'
import kinkaow from '../assets/logoKinkaow.png'

function HomeFacilityCircle(){
  return(
    <div style={{ width: '100%', padding: '30px 0 40px 0', backgroundColor: '#fcfcfc' }}>
      <Header2 title='ร้านค้าและบริการ' description='สะดวกสบายครบครัน ไม่ต้องเดินออกไปไหนไกล'/>

      <div className="facility-circle-wrapper">
        <CircleBanner name='24 Wash' detail='24 Wash' image={wash}/>
        <CircleBanner name='Wateri' detail='Wateri' image={water}/>
        <CircleBanner name='กินข้าวกันมั้ย' detail='กินข้าวกันมั้ย' image={kinkaow}/>
      </div>

      <style>{`
        /* 💻 ขนาดในคอมพิวเตอร์ (ใช้ Style เดิมของคุณเป๊ะๆ) */
        .facility-circle-wrapper {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /* 📱 ปรับแต่งเฉพาะตอนเปิดบนมือถือ/หน้าจอแคบ (<= 768px) */
        @media (max-width: 768px) {
          .facility-circle-wrapper {
            gap: 24px; /* ลดระยะห่างระหว่างวงกลมให้กระชับขึ้นบนมือถือ */
            padding: 0 16px;
          }
        }
      `}</style>
    </div>
  )
}

export default HomeFacilityCircle