function RoomFacilityCard({ icon, title, desc }) {
  return (
    <div 
      style={{
        backgroundColor: '#ffffff',
        padding: '30px 25px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
        border: '1px solid #f6f6f6',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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
export default RoomFacilityCard