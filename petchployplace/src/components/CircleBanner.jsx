import { useState } from "react";

function CircleBanner({name, detail, image}){
    const [isHovered, setIsHovered] = useState(false)

    return(
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'transform 0.3s ease', transform: isHovered ? 'scale(1.08)' : 'scale(1)'}}>
            <div style={{width: '110px', height: '110px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eeeeee', overflow: 'hidden', padding: '10px'}}>
                <img src={image} alt={name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }}/>
            </div>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#444444'}}>
                {detail}
            </span>
        </div>
    )
}

export default CircleBanner