import Header2 from "./Header2"
import RoomFacilityCard from "./RoomFacilityCard"

const facilities = [
    { icon: "🔑", title: "ประตูคีย์การ์ด", desc: "เข้า-ออกอาคารด้วยระบบคีย์การ์ด ปลอดภัยและเป็นส่วนตัว" },
    { icon: "📷", title: "กล้องวงจรปิด CCTV", desc: "ดูแลความปลอดภัยครอบคลุมทุกชั้นตลอด 24 ชั่วโมง" },
    { icon: "🌐", title: "อินเทอร์เน็ตความเร็วสูง", desc: "บริการสัญญาณอินเทอร์เน็ตภายใน ตอบโจทย์ทุกการเชื่อมต่อ"},
    { icon: "🛠️", title: "บริการช่างซ่อมบำรุง", desc: "มีทีมช่างดูแลและซ่อมแซมอุปกรณ์ภายในห้องพักเมื่อเกิดปัญหา"},
    { icon: "✨", title: "แม่บ้านส่วนกลาง", desc: "มีเจ้าหน้าที่ดูแลทำความสะอาดพื้นที่ส่วนกลางให้สะอาดเรียบร้อยอยู่เสมอ"},
    { icon: "🧺", title: "ร้านสะดวกซัก-อบ", desc: "เครื่องซักผ้าและเครื่องอบผ้าประสิทธิภาพสูงพร้อมใช้งาน" },
    { icon: "💧", title: "ตู้น้ำหยอดเหรียญ", desc: "น้ำดื่มสะอาดด้วยระบบกรองมาตรฐาน พร้อมบริการเติมเงินมือถือในจุดเดียว"},
    { icon: "🛵", title: "ที่จอดรถมอเตอร์ไซค์", desc: "พื้นที่จอดรถจักรยานยนต์ในร่มภายในอาคาร เป็นระเบียบและปลอดภัย" }
]

function RoomFacility(){
    return(
        <div>
            <Header2 category='FACILITIES' title='สิ่งอำนวยความสะดวก'/>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', maxWidth: '1100px', margin: '40px auto 0 auto', padding: '0 20px', marginBottom: '10px'}}>
                {facilities.map((fac, index) => (
                    <RoomFacilityCard
                        key={index}
                        icon={fac.icon}
                        title={fac.title}
                        desc={fac.desc}
                    />
                ))}
            </div>

        </div>
    )
}

export default RoomFacility