import { useState } from 'react';
import Header2 from '../components/Header2';

const faqData = [
  {
    category: "เงื่อนไขผู้เข้าพัก",
    question: "มีข้อจำกัดหรือเงื่อนไขในการเข้าพักอย่างไรบ้าง?",
    answer: `เพื่อรักษาความสงบเรียบร้อย ความเป็นส่วนตัว และความปลอดภัยสูงสุดของผู้พักอาศัยทุกท่าน ทางอะพาร์ตเมนต์มีเงื่อนไขดังนี้
    • ผู้เข้าพัก : รับสัญชาติไทยเท่านั้น (ไม่รับเด็กเล็ก ผู้สูงอายุ และชาวต่างชาติ)
    • สัตว์เลี้ยง : ไม่อนุญาตให้เลี้ยงสัตว์เลี้ยงทุกชนิดภายในอาคาร
    • ยานพาหนะ : รองรับเฉพาะผู้ใช้ รถจักรยานยนต์ เท่านั้น (ไม่มีบริการที่จอดรถยนต์ส่วนบุคคล)
    • สัญญาเช่า : บริการเช่ารายเดือนเท่านั้น (ไม่มีบริการเช่ารายวัน)`
  },
  {
    category: "สิ่งอำนวยความสะดวก",
    question: "ภายในห้องพักมีเฟอร์นิเจอร์ให้อะไรบ้าง?",
    answer: "ห้องพักพร้อมเข้าอยู่ ครบครันด้วยสิ่งอำนวยความสะดวกหลัก ประกอบด้วย เตียงนอนพร้อมฟูกขนาด 5 ฟุต, ตู้เสื้อผ้า, โต๊ะเครื่องแป้ง, พัดลมเพดาน, เครื่องปรับอากาศ (สำหรับห้องแอร์), ห้องน้ำ, และระเบียง"
  },
  {
    category: "สิ่งอำนวยความสะดวก & ระบบความปลอดภัย",
    question: "ภายในอาคารมีลิฟต์ ที่จอดรถ และระบบความปลอดภัยอย่างไร?",
    answer: `• ภายในอาคารไม่มีลิฟต์โดยสาร 
   • มีพื้นที่จอดรถจักรยานยนต์ให้บริการภายในโครงการ
   • ระบบความปลอดภัย : เข้า-ออกอาคารด้วยระบบประตูคีย์การ์ด พร้อมกล้องวงจรปิด CCTV ดูแลรักษาความปลอดภัยตลอด 24 ชั่วโมง`
  },
  {
    category: "ระเบียบและข้อบังคับ",
    question: "สามารถประกอบอาหารในห้องพักได้หรือไม่?",
    answer: `อนุญาตให้ประกอบอาหารเบา ๆ ภายในห้องพักได้ โดยใช้เครื่องใช้ไฟฟ้า เช่น กระทะไฟฟ้า หรือไมโครเวฟ เท่านั้น

⚠️ ข้อห้ามสำคัญเพื่อความปลอดภัยของส่วนรวม
• ห้ามใช้เตาแก๊สหรือถังแก๊สทุกชนิดภายในอาคารเด็ดขาด
• ห้ามใช้ครกหรืออุปกรณ์ประกอบอาหารที่มีเสียงดังซึ่งส่งผลกระทบผู้พักอาศัยห้องอื่น`
  },
{
    category: "ทำเลและการเดินทาง",
    question: "เดินทางสะดวกไหม อยู่ใกล้สถานที่สำคัญอะไรบ้าง?",
    answer: `เพชร พลอย เพลส ตั้งอยู่ในซอยรามอินทรา 39 (เข้าซอยเพียง 600 เมตร บรรยากาศโปร่ง ปลอดภัย ไม่ลึก ไม่เปลี่ยว)
• การเดินทางด้วยรถไฟฟ้า ระยะทางเพียง 750 เมตร จากรถไฟฟ้าสายสีชมพู สถานีรามอินทรา กม. 4 (PK19)
• ตั้งอยู่ในย่านชุมชน หาของกินง่าย ใกล้ตลาดและร้านสะดวกซื้อ

*(สามารถดูรายละเอียดเส้นทาง ขนส่งสาธารณะ และสถานที่ใกล้เคียงเพิ่มเติมได้ที่หน้า "เกี่ยวกับเรา")*`
  },
  {
    category: "ร้านค้าและบริการ",
    question: "ใต้อะพาร์ตเมนต์มีร้านค้าหรือสิ่งอำนวยความสะดวกอะไรบ้าง?",
    answer: "สะดวกสบายโดยไม่ต้องเดินทางไปไหนไกล ใต้อะพาร์ตเมนต์มีบริการร้านสะดวกซัก 24WASH (เปิด 24 ชั่วโมง), ตู้น้ำดื่มหยอดเหรียญ Wateri และร้านอาหารอาหารตามสั่ง 'กินข้าวกันมั้ย' รวมถึงใกล้ร้านสะดวกซื้อหาของกินง่ายตลอดทั้งวัน"
  },
  {
    category: "สัญญาเช่า & ค่าใช้จ่ายแรกเข้า",
    question: "สนใจเข้าพัก ต้องใช้เอกสารและมีสัญญาเช่าอย่างไร?",
    answer: `• เอกสารที่ใช้: บัตรประชาชนตัวจริงของผู้เช่าหลัก
• สัญญาเช่า: ระยะเวลาสัญญาเช่าขั้นต่ำ 4 เดือน
• ค่าใช้จ่ายแรกเข้า: ค่าประกันห้องพัก + ค่าเช่าล่วงหน้า 1 เดือน + ค่ากุญแจ (สามารถเข้าอยู่ได้ทันที)`
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', paddingBottom: '50px', backgroundColor: '#ffffff', fontFamily: 'Prompt, sans-serif' }}>
      <Header2 
        category="FREQUENTLY ASKED QUESTIONS" 
        title="คำถามที่พบบ่อย (FAQ)" 
        description="รวมข้อสงสัยเกี่ยวกับการเข้าพัก กฎระเบียบ และการบริการภายในโครงการ" 
      />

      <div style={{ maxWidth: '800px', margin: '30px auto 0 auto', padding: '0 20px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                style={{
                  borderRadius: '16px',
                  border: '1px solid #f0f0f0',
                  backgroundColor: isOpen ? '#fffdfc' : '#ffffff',
                  boxShadow: isOpen ? '0 8px 25px rgba(247, 92, 28, 0.06)' : '0 2px 10px rgba(0,0,0,0.02)',
                  transition: 'all 0.25s ease',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'Prompt, sans-serif',
                    gap: '15px'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '11px', color: '#f75c1c', fontWeight: '600', letterSpacing: '0.5px' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '15.5px', fontWeight: '500', color: isOpen ? '#f75c1c' : '#222222', lineHeight: '1.4' }}>
                      {item.question}
                    </span>
                  </div>
                  <span style={{ 
                    fontSize: '16px', 
                    color: isOpen ? '#f75c1c' : '#888888', 
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0
                  }}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px 24px', color: '#444444', fontSize: '14px', lineHeight: '1.7', fontWeight: '300', borderTop: '1px dashed #f5f5f5', paddingTop: '15px', whiteSpace: 'pre-line' }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;