import Header2 from "./Header2"
import HomeCardFeature from "./HomeCardFeature"

import btsPink from '../assets/btsPink.png'
import mart from '../assets/mart.jpg'
import path from '../assets/path.png'
import camera from '../assets/camera.jpg'

function HomeCard(){
    return(
        <div style={{width: '100%', padding: '30px 0 40px 0', backgroundColor: '#ffffff' }}>
            <Header2 title='ทำไมต้องเลือกเรา' description='สิ่งอำนวยความสะดวกและทำเลทอง ตอบโจทย์ทุกการอยู่อาศัย'/>

            <div className="home-card-grid">
                {/* card 1 */}
                <HomeCardFeature
                    title='ใกล้รถไฟฟ้าสายสีชมพู'
                    image={btsPink}
                    description='ห่างจากสถานีรามอินทรา กม. 4 เพียง 750 เมตร'
                />
                <HomeCardFeature
                    title='ความปลอดภัยระดับมาตรฐาน'
                    image={camera}
                    description='อุ่นใจด้วยระบบประตูคีย์การ์ด และกล้องวงจรปิด CCTV ทั่วทั้งอาคาร'
                />
                <HomeCardFeature
                    title='ทำเลดี'
                    image={path}
                    description='อยู่ห่างจากถนนใหญ่รามอินทราเพียง 600 เมตร เข้าซอยไม่ลึก ไม่เปลี่ยว'
                />
                <HomeCardFeature
                    title='แหล่งของกินครบครัน'
                    image={mart}
                    description='ใกล้ร้านสะดวกซื้อ หาของกินง่ายตลอด 24 ชั่วโมง'
                />
            </div>

            <style>{`
                /* 💻 ขนาดในคอมพิวเตอร์ (ค่าเดิมของคุณเป๊ะๆ) */
                .home-card-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                }

                /* 📱 ปรับแต่งเฉพาะตอนเปิดบนมือถือ/หน้าจอแคบ (<= 768px) */
                @media (max-width: 768px) {
                    .home-card-grid {
                        grid-template-columns: repeat(1, 1fr);
                        padding: 0 16px;
                    }
                }
            `}</style>
        </div>
    )
}

export default HomeCard