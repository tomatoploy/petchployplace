function Header3({ titleEN, titleTH }) {
  return (
    <div className="header3-wrapper">
      {titleEN && (
        <span className="header3-title-en">
          {titleEN}
        </span>
      )}
      <h2 className="header3-title-th">
        {titleTH}
      </h2>

      <style>{`
        /* 💻 ขนาดในคอมพิวเตอร์ (ค่าเดิมของคุณเป๊ะๆ) */
        .header3-wrapper {
          text-align: left;
          margin-bottom: 25px;
        }

        .header3-title-en {
          color: #f75c1c;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 2px;
          display: block;
        }

        .header3-title-th {
          font-size: 26px;
          font-weight: 600;
          margin: 4px 0 0 0;
          color: #111111;
          font-family: 'Prompt', sans-serif;
          line-height: 1.35;
        }

        /* 📱 ปรับแต่งเฉพาะตอนเปิดบนมือถือ (<= 768px) */
        @media (max-width: 768px) {
          .header3-wrapper {
            margin-bottom: 18px; /* ปรับลดระยะห่างบนมือถือ */
          }

          .header3-title-th {
            font-size: 20px; /* ย่อขนาดชื่อหัวข้อภาษาไทยลงมาให้พอดีสายตา */
          }
        }
      `}</style>
    </div>
  );
}

export default Header3;