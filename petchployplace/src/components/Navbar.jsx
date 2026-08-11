import { useState } from 'react';
import logo from '../assets/logoOrange.png';
import { apartmentData } from '../Data';

function Navbar({ currentPage, setCurrentPage }) {
  const [hoveredPage, setHoveredPage] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getMenuColor = (pageName) => {
    if (currentPage === pageName) return '#f75c1c';
    if (hoveredPage === pageName) return '#000000';
    return '#3c3c3c';
  };

  const getMenuWeight = (pageName) => {
    return currentPage === pageName || hoveredPage === pageName ? 'bold' : 'normal';
  };

  const menuItems = [
    { id: 'home', label: 'หน้าหลัก' },
    { id: 'announcement', label: 'ข่าวสาร' },
    { id: 'rooms', label: 'พื้นที่ให้เช่า' },
    { id: 'more', label: 'เกี่ยวกับเรา' },
    { id: 'faq', label: 'ถามตอบ' },
    { id: 'contact', label: 'ติดต่อ' },
  ];

  // ฟังก์ชันช่วยจัดการการคลิกเมนู (เปลี่ยนหน้า + ปิดเมนูมือถืออัตโนมัติ)
  const handleMenuClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false); // พอกดเลือกหน้าแล้ว ให้หดเมนูกลับไป
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '10px 15px' }}>
      
      <header
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px', borderRadius: isMobileMenuOpen ? '24px' : '30px', backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.08)', transition: 'all 0.3s ease'}}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div 
            onClick={() => handleMenuClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          >
            <img src={logo} alt={apartmentData.nameTH} style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left' }}>
              <h2 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt' }}>
                {apartmentData.nameTH}
              </h2>
              <p style={{ margin: 0, fontSize: '12px', color: '#666666', lineHeight: '1.2', fontFamily: 'Prompt', fontWeight: '300' }}>
                อะพาร์ตเมนต์ ซ.รามอินทรา 39
              </p>
            </div>
          </div>

          <menu
            className="desktop-menu"
            style={{ margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '24px', listStyle: 'none' }}
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                onMouseEnter={() => setHoveredPage(item.id)}
                onMouseLeave={() => setHoveredPage(null)}
                style={{ 
                  textDecoration: 'none', 
                  cursor: 'pointer', 
                  color: getMenuColor(item.id), 
                  fontWeight: getMenuWeight(item.id), 
                  fontSize: '14.5px', 
                  fontFamily: 'Prompt', 
                  transition: 'all 0.2s ease', 
                  padding: '4px 0', 
                  borderBottom: currentPage === item.id ? '2px solid #f75c1c' : '2px solid transparent'
                }}
              >
                {item.label}
              </a>
            ))}
          </menu>

          <button
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', justifyContent: 'center', gap: '5px', zIndex: 1001 }}
          >
            <span style={{ width: '22px', height: '2px', backgroundColor: '#222222', borderRadius: '2px', transition: 'all 0.3s ease', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ width: '22px', height: '2px', backgroundColor: '#222222', borderRadius: '2px', transition: 'all 0.3s ease', opacity: isMobileMenuOpen ? 0 : 1 }} />
            <span style={{ width: '22px', height: '2px', backgroundColor: '#222222', borderRadius: '2px', transition: 'all 0.3s ease', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>

        </div>

        {isMobileMenuOpen && (
          <menu
            className="mobile-menu"
            style={{ margin: '15px 0 5px 0', padding: '15px 0 5px 0', borderTop: '1px solid #eeeeee', display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', textAlign: 'center', animation: 'fadeIn 0.3s ease-out' }}
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                style={{ 
                  textDecoration: 'none', 
                  cursor: 'pointer', 
                  color: currentPage === item.id ? '#f75c1c' : '#3c3c3c', 
                  fontWeight: currentPage === item.id ? 'bold' : 'normal', 
                  fontSize: '15px', 
                  fontFamily: 'Prompt', 
                  padding: '10px 0', 
                  borderRadius: '12px', 
                  backgroundColor: currentPage === item.id ? '#fff0ea' : 'transparent', 
                  transition: 'all 0.2s ease'
                }}
              >
                {item.label}
              </a>
            ))}
          </menu>
        )}

      </header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}

export default Navbar;