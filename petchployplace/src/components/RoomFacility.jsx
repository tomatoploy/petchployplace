import Header2 from "./Header2"

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
        <div style={{margin: '40px auto'}}>
            <Header2 category='FACILITIES' title='สิ่งอำนวยความสะดวก'/>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', maxWidth: '1100px', margin: '50px auto', padding: '0 20px', marginBottom: '10px' }}>
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

function RoomFacilityCard({ icon, title, desc }) {
  return (
    <div 
      style={{ backgroundColor: '#ffffff', padding: '30px 25px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f6f6f6', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease', cursor: 'default' }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)';
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)';
      }}
    >
      {/* วงกลมล้อมไอคอน */}
      <div style={{ width: '55px', height: '55px', borderRadius: '50%', backgroundColor: '#fff0ea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
        {icon}
      </div>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '17px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: '13px', color: '#666666', lineHeight: '1.6', fontWeight: '300', fontFamily: 'Prompt' }}>{desc}</p>
    </div>
  );
}

export default RoomFacility;