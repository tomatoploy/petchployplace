function Header2({ category, title, description }) {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}>
      <div className="header2-wrapper">
        {category && (
          <span className="header2-category">
            {category}
          </span>
        )}
        <h2 className="header2-title">
          {title}
        </h2>
        {description && (
          <p className="header2-description">
            {description}
          </p>
        )}
        <div className="header2-divider" />
      </div>

      <style>{`
        /* 💻 ขนาดในคอมพิวเตอร์ (ค่าเดิมของคุณเป๊ะๆ) */
        .header2-wrapper {
          text-align: center;
          margin-bottom: 50px;
        }

        .header2-category {
          color: #f75c1c;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 2px;
          display: block;
        }

        .header2-title {
          font-size: 28px;
          font-weight: 600;
          color: #222222;
          font-family: 'Prompt', sans-serif;
          margin: 6px 0 0 0;
          line-height: 1.3;
        }

        .header2-description {
          font-size: 15px;
          color: #666666;
          margin: 0;
          font-family: 'Prompt', sans-serif;
          line-height: 1.5;
        }

        .header2-divider {
          width: 50px;
          height: 3px;
          background-color: #f75c1c;
          margin: 12px auto 0 auto;
        }

        /* 📱 ปรับแต่งเฉพาะตอนเปิดบนมือถือ (<= 768px) */
        @media (max-width: 768px) {
          .header2-wrapper {
            margin-bottom: 30px; /* ลดระยะห่างล่างให้อ่านกระชับขึ้น */
          }

          .header2-title {
            font-size: 22px; /* ย่อขนาดหัวข้อหลัก */
            margin-top: 4px;
          }

          .header2-description {
            font-size: 13.5px; /* ย่อขนาดคำอธิบาย */
            margin-top: 4px;
          }

          .header2-divider {
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default Header2;