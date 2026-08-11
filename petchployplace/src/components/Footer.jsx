import { apartmentData } from "../Data";

function Footer() {
  return (
    <footer style={{ width: '100%', padding: '0 20px 20px 20px', boxSizing: 'border-box' }}>
      <hr style={{ border: 'none', borderTop: '1px solid #eeeeee', marginBottom: '20px' }} />
      <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '300', fontSize: '13px', color: '#666666', textAlign: 'center', lineHeight: '1.6', margin: 0, fontFamily: 'Prompt, sans-serif' }}>
        © 2026 {apartmentData.nameEn}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;