import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import Header3 from './Header3';
import { locations } from '../Location';
import MoreMapPic from '../assets/moreMap/moreMapPic.png'; // รูปสำรอง

const DORM_LOCATION = [13.862954721879596, 100.62703664688196];

// ฟังก์ชันสร้างหมุด
const createCustomIcon = (color, isDorm = false) => {
  if (isDorm) {
    return L.divIcon({
      className: 'custom-dorm-marker',
      html: `
        <div style=" display: flex;  align-items: center;  justify-content: center;  background-color: rgba(255,255,255,0.8);  color: white;  width: 32px;  height: 32px;  border-radius: 50%;  font-size: 16px;  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);  border: 2px solid #ffffff;  transform: translate(-50%, -50%);">
          📍
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });
  }
  return L.divIcon({
    className: 'custom-cat-marker',
    html: `
      <div style=" width: 18px; height: 18px; background-color: ${color}; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.25); cursor: pointer; transition: transform 0.2s ease; transform: translate(-50%, -50%);">
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0]
  });
};

// หมุดสำหรับแต่ละหมวดหมู่
const categoryColors = {
  shopping: '#f071b9',    // ห้าง + ร้านสะดวกซื้อ
  dining: '#ba3af5',      // ร้านอาหาร + คาเฟ่
  market: '#64748b',      // ตลาด
  healthcare: '#66ee64',  // สถานพยาบาล
  education: '#4d9cf6',   // สถานศึกษา
  worship: '#eab308',     // ศาสนสถาน
};

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 15);
  return null;
}

function MoreMap() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sortedLocations = [...locations].sort((a, b) => a.id - b.id);
  
  const filteredLocations = selectedCategory === 'all'
    ? sortedLocations
    : sortedLocations.filter(loc => loc.category === selectedCategory);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const activeLocation = selectedLocation || filteredLocations[0] || sortedLocations[0];

  const currentIndex = filteredLocations.findIndex(loc => loc.id === activeLocation?.id);

  const handlePrev = () => {
    if (filteredLocations.length === 0) return;
    const prevIndex = (currentIndex - 1 + filteredLocations.length) % filteredLocations.length;
    setSelectedLocation(filteredLocations[prevIndex]);
  };

  const handleNext = () => {
    if (filteredLocations.length === 0) return;
    const nextIndex = (currentIndex + 1) % filteredLocations.length;
    setSelectedLocation(filteredLocations[nextIndex]);
  };

  const handleCategoryChange = (key) => {
    setSelectedCategory(key);
    setSelectedLocation(null);
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', fontFamily: 'Prompt', color: '#222222' }}>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0px 20px' }}>

        <Header3 titleEN='NEIGHBORHOOD' titleTH='สถานที่ใกล้เคียง'/>

        {/* 📱 ปุ่มเลือกหมวดหมู่ที่ปรับแต่งให้สไลด์บนมือถือได้อย่างลื่นไหล */}
        <div className="category-scroll-container">
          {[
            { key: 'all', label: 'ทั้งหมด' },
            { key: 'shopping', label: '🛍️ ห้าง | ร้านสะดวกซื้อ' },
            // { key: 'dining', label: '🍽️ ร้านอาหาร & คาเฟ่' },
            { key: 'market', label: '🧺 ตลาด' },
            { key: 'healthcare', label: '🏥 สถานพยาบาล' },
            { key: 'education', label: '🎓 สถานศึกษา' },
            { key: 'worship', label: '🛕 ศาสนสถาน' }
          ].map(btn => (
            <button
              key={btn.key}
              onClick={() => handleCategoryChange(btn.key)}
              className={`category-btn ${selectedCategory === btn.key ? 'active' : ''}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* แผนที่ + Minimal Photo Card */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', alignItems: 'start' }}>
          
          {/* ฝั่งซ้าย: แผนที่ Interactive Minimal Map */}
          <div style={{ height: '420px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #efefef', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <MapContainer center={DORM_LOCATION} zoom={15} style={{ height: '100%', width: '100%' }}>
              <ChangeView center={activeLocation ? activeLocation.coords : DORM_LOCATION} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* หมุดหอพัก */}
              <Marker position={DORM_LOCATION} icon={createCustomIcon('#f75c1c', true)}>
                <Popup>
                  <div style={{ fontFamily: 'Prompt', textAlign: 'center' }}>
                    <strong style={{ color: '#f75c1c' }}>เพชร พลอย เพลส</strong><br />ซอยรามอินทรา 39
                  </div>
                </Popup>
              </Marker>

              {/* หมุดสถานที่ใกล้เคียง */}
              {filteredLocations.map(loc => (
                <Marker
                  key={loc.id}
                  position={loc.coords}
                  icon={createCustomIcon(categoryColors[loc.category] || '#111111')}
                  eventHandlers={{
                    click: () => setSelectedLocation(loc)
                  }}
                >
                  <Popup>
                    <div style={{ fontFamily: 'Prompt' }}>
                      <strong>{loc.name}</strong><br />
                      <span style={{ fontSize: '11px', color: '#666' }}>{loc.distance}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Minimal Active Location Card */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #f0f0f0', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', textAlign: 'left', position: 'relative' }}>
            <div style={{ width: '100%', height: '220px', backgroundColor: '#eaeaea', position: 'relative' }}>
              <img 
                src={activeLocation?.image || MoreMapPic} 
                alt={activeLocation?.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              {activeLocation?.categoryLabel && (
                <span style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', color: '#111111', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  {activeLocation.categoryLabel}
                </span>
              )}
              {activeLocation?.cr && (
                <span style={{ position: 'absolute', bottom: '12px', left: '12px', backgroundColor: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(4px)', color: '#000000', padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '300', letterSpacing: '0.3px'  }}>
                  CR: {activeLocation.cr}
                </span>
              )}
              {filteredLocations.length > 1 && (
                <div style={{ position: 'absolute', bottom: '12px', right: '12px', display: 'flex', gap: '6px', zIndex: 10 }}>
                  <button
                    onClick={handlePrev}
                    title="สถานที่ก่อนหน้า"
                    style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(4px)', border: 'none', color: '#111111', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', transition: 'all 0.2s ease' }}
                  >
                    ❮
                  </button>
                  <button
                    onClick={handleNext}
                    title="สถานที่ถัดไป"
                    style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(4px)', border: 'none', color: '#111111', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', transition: 'all 0.2s ease' }}
                  >
                    ❯
                  </button>
                </div>
              )}
            </div>
            <div style={{ padding: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#111111' }}>{activeLocation?.name}</h3>

                {filteredLocations.length > 0 && (
                  <span style={{ fontSize: '12px', color: '#888888', fontWeight: '300' }}>
                    {currentIndex + 1} / {filteredLocations.length}
                  </span>
                )}
              </div>

              <div style={{ fontSize: '13px', color: '#f75c1c', fontWeight: '500', marginBottom: '12px',backgroundColor: 'rgba(247,92,28,0.1)',padding: '4px 12px',borderRadius: '12px',width: 'fit-content' }}>
                📍 {activeLocation?.distance}
              </div>

              <p style={{ margin: 0, fontSize: '13.5px', color: '#666666', lineHeight: '1.6', fontWeight: '300' }}>
                {activeLocation?.desc}
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 🎨 Style เฉพาะสำหรับแถบหมวดหมู่ในสมาร์ตโฟน */}
      <style>{`
        .category-scroll-container {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 12px;
          margin-bottom: 20px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* ซ่อน scrollbar ใน Firefox */
          scroll-snap-type: x mandatory;
        }

        /* ซ่อน scrollbar ใน Chrome / Safari / Edge */
        .category-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .category-btn {
          padding: 8px 18px;
          border-radius: 30px;
          border: 1px solid #e5e5e5;
          background-color: #ffffff;
          color: #555555;
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          font-family: 'Prompt', sans-serif;
          scroll-snap-align: start;
          flex-shrink: 0;
        }

        .category-btn.active {
          border-color: #111111;
          background-color: #111111;
          color: #ffffff;
        }

        /* 📱 ปรับระยะเฉพาะบนโทรศัพท์มือถือ */
        @media (max-width: 768px) {
          .category-scroll-container {
            padding-bottom: 8px;
            margin-bottom: 16px;
            margin-left: -20px; /* ยืดแถบสไลด์ให้ชนขอบจอด้านซ้าย */
            margin-right: -20px; /* ยืดแถบสไลด์ให้ชนขอบจอด้านขวา */
            padding-left: 20px; /* เว้นระยะปุ่มแรกไม่ให้ติดขอบเกินไป */
            padding-right: 20px; /* เว้นระยะปุ่มสุดท้าย */
          }

          .category-btn {
            padding: 8px 16px;
            font-size: 12.5px;
          }
        }
      `}</style>

    </div>
  );
}

export default MoreMap;