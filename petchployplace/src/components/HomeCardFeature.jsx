import { useState } from "react"

function HomeCardFeature({title, image, description}){
    const [isHovered, setIsHovered] = useState(false)
    
    return(
        <div style={{
            position: 'relative', height: '300px', borderRadius: '9px', overflow: 'hidden',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}>
            <img src={image} alt={title} 
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1}}
            />
            <div 
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2}}
            />
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            style={{position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 24px', color: '#ffffff', transition: 'transform 0.3s ease', transform: isHovered ? 'scale(1.05)' : 'scale(1)'}}>
                <h3 style={{margin: '0 0 10px 0', fontSize: '22px', fontWeight: '600', textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>
                    {title}
                </h3>
                <p style={{margin: 0, fontSize: '14px', color: '#e0e0e0', lineHeight: '1.6', fontWeight: '300'}}>{description}</p>
            </div>
        </div>
    )
}

export default HomeCardFeature