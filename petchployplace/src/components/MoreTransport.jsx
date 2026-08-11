import Header3 from "./Header3"
import moreTransportBTS from "../assets/moreTransportBTS.jpg"

// Styles สำหรับ Bento Cards
const bentoCardStyle = { backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid #f0f0f0', padding: '30px 26px', boxShadow: '0 10px 35px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', textAlign: 'left', height: '100%', boxSizing: 'border-box' };

// Style สำหรับ Icon Header
const iconHeaderStyle = { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px', borderBottom: '1px solid #f2f2f2', paddingBottom: '15px' };

const iconCircleStyle = { fontSize: '20px', width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#fff1eb', color: '#f75c1c', display: 'flex', alignItems: 'center', justifyContent: 'center' };

const titleStyle = { margin: 0, fontSize: '19px', fontWeight: '600', color: '#111111', fontFamily: 'Prompt' };

const heroTransportData = [
  {
    category: "SKYTRAIN",
    icon: "🚆",
    title: "รถไฟฟ้าสายสีชมพู",
    isTwoThirds: true,
    image: moreTransportBTS,
    items: [
      { name: "สถานี", detail: "รามอินทรา กม. 4 (สถานี PK19)" },
      { name: "ระยะห่าง", detail: "ห่างจากอพาร์ทเม้นท์เพียง 750 เมตร (เชื่อมต่อสายสีเขียวและแดง)" }
    ]
  },
  {
    category: "AIRPORT",
    icon: "✈️",
    title: "ท่าอากาศยานดอนเมือง",
    isOneThird: true,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "สนามบินใกล้ที่สุด", detail: "ระยะทางประมาณ 11 กิโลเมตร (15-20 นาที)" }
    ]
  }
];

function MoreTransport() {
  return (
    <div style={{ width: '100%', backgroundColor: '#fcfcfc', fontFamily: 'Prompt, sans-serif', color: '#111111', padding: '40px 0', marginTop: '50px' }}>
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        <Header3 titleEN='PUBLIC TRANSPORTATION' titleTH='ขนส่งสาธารณะและการเดินทาง' />

        {/* แถวที่ 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {heroTransportData.map((item, index) => (
            <div 
              key={index}
              style={{ gridColumn: item.isTwoThirds ? 'span 2' : 'span 1' }}
              className={item.isTwoThirds ? 'bento-2-3' : 'bento-1-3'}
            >
              <HeroTransportCard data={item} />
            </div>
          ))}
        </div>

        {/* แถวที่ 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '20px',alignItems: 'stretch' }}>
          
          {/* รถเมล์ */}
          <div style={bentoCardStyle}>
            <div style={iconHeaderStyle}>
              <div style={iconCircleStyle}>🚌</div>
              <h3 style={titleStyle}>รถเมล์</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
              {[
                { bus: "26", route: "มีนบุรี - อนุสาวรีย์ชัยฯ" },
                { bus: "95", route: "บางเขน - รามอินทรา" },
                { bus: "150", route: "ปากเกร็ด - แฮปปี้แลนด์" },
                { bus: "512", route: "หมอชิต 2 - ปากคลองตลาด" },
                { bus: "520", route: "ตลาดไท - แฮปปี้แลนด์" },
                { bus: "554", route: "รังสิต - สุวรรณภูมิ" },
                { bus: "ปอ.พ.34", route: "หมอชิต 2 - บางกะปิ" }
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: '8px 14px',borderRadius: '12px',backgroundColor: i % 2 === 0 ? '#fafafa' : '#ffffff',fontSize: '13.5px' }}>
                  <span style={{ fontWeight: '600', color: '#f75c1c', minWidth: '65px' }}>
                    สาย {b.bus}
                  </span>
                  <span style={{ fontWeight: '300', color: '#444444', flex: 1, textAlign: 'right' }}>
                    {b.route}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px dashed #eee', fontSize: '11px', color: '#aaaaaa', textAlign: 'right', fontWeight: '300' }}>
              * ขอขอบคุณข้อมูลจาก moovit
            </div>
          </div>

          {/* รถตู้ */}
          <div style={bentoCardStyle}>
            <div style={iconHeaderStyle}>
              <div style={iconCircleStyle}>🚐</div>
              <h3 style={titleStyle}>รถตู้</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
              {[
                { code: "ต.15B", dest: "มีนบุรี - เดอะมอลล์งามวงศ์วาน" },
                { code: "ต.15C", dest: "มีนบุรี - สวนจตุจักร" },
                { code: "ต.16", dest: "มีนบุรี - หมอชิต 2" },
                { code: "ต.22", dest: "มีนบุรี - ปากเกร็ด" },
                { code: "ต.39", dest: "มีนบุรี - รังสิต" }
              ].map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justify: 'space-between', padding: '8px 14px', borderRadius: '12px', backgroundColor: i % 2 === 0 ? '#fafafa' : '#ffffff', fontSize: '13.5px' }}>
                  <span style={{ fontWeight: '600', color: '#f75c1c', minWidth: '65px' }}>
                    {v.code}
                  </span>
                  <span style={{ fontWeight: '300', color: '#444444', flex: 1, textAlign: 'right' }}>
                    {v.dest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 🛵 3. การ์ดสองแถว & วินมอเตอร์ไซค์ */}
          <div style={bentoCardStyle}>
            <div style={iconHeaderStyle}>
              <div style={iconCircleStyle}>🛵</div>
              <h3 style={titleStyle}>รถสองแถว & วินมอเตอร์ไซค์</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
              <div style={{ padding: '18px', borderRadius: '18px', backgroundColor: '#fffaf8', border: '1px solid #ffefe8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#f75c1c', marginBottom: '8px' }}>
                  <span>🛺</span> รถสองแถว
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: '300', color: '#444444', lineHeight: '1.6', paddingLeft: '24px' }}>
                  บริเวณลานจอดรถด้านหลังตลาดมงคลไชย (รามอินทรา กม. 4) มีรถสองแถววิ่งให้บริการ
                </div>
              </div>

              <div style={{ padding: '18px', borderRadius: '18px', backgroundColor: '#fafafa', border: '1px solid #edf2f7' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '8px' }}>
                  <span>🛵</span> วินมอเตอร์ไซค์
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: '300', color: '#444444', lineHeight: '1.6', paddingLeft: '24px' }}>
                  <span style={{ color: '#f75c1c' }}>•</span> บริเวณหน้าปากซอยรามอินทรา 39<br/>
                  <span style={{ color: '#f75c1c' }}>•</span> จุดบริการตรงข้ามเพชร พลอย เพลส <span style={{ fontWeight: '500', color: '#111' }}>(บริการ 24 ชม.)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ปุ่ม Google Maps */}
        <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a
            href="https://maps.app.goo.gl/8jK4B362feH7MZLg8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '14px 32px', borderRadius: '30px', backgroundColor: '#111111', color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: '500', fontFamily: 'Prompt, sans-serif', transition: 'all 0.25s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f75c1c'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
        >
            <span>📍 นำทางด้วย Google Maps</span>
        </a>
        </div>

      </section>

      <style>{`
        @media (max-width: 768px) {
          .bento-2-3 {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  )
}

function HeroTransportCard({ data }) {
  const imageUrl = typeof data.image === 'object' && data.image !== null 
    ? (data.image.default || data.image) 
    : data.image;

  return (
    <div style={{ position: 'relative', borderRadius: '24px',  overflow: 'hidden', backgroundColor: '#ffffff', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justify: 'space-between', padding: '28px 26px', height: '100%', boxSizing: 'border-box', textAlign: 'left' }}>
      <img 
        src={imageUrl}
        alt={data.title}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '50px', backgroundColor: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
            {data.icon}
          </div>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#ffffff', fontFamily: 'Prompt' }}>
            {data.title}
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {data.items.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px' }}>
              <span style={{ fontSize: '12px',fontWeight: '600', color: '#ffffff', backgroundColor: 'rgba(247, 94, 28, 0.85)', padding: '3px 10px', borderRadius: '8px',whiteSpace: 'nowrap',marginTop: '1px' }}>
                {item.name}
              </span>
              <span style={{ fontWeight: '300', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoreTransport