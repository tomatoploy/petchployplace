function Header({title, description, image}){
    return(
        <div style={{width: '100%', margin: 0}}>
            <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={image} alt={title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 2 }} />
                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', color: '#ffffff' }}>
                    <h1 style={{ margin: 0, fontFamily: 'Prompt', fontSize: '38px', fontWeight: '600', letterSpacing: '1px' }}>
                        {title}
                    </h1>
                    <p style={{ margin: '8px 0 0 0', fontFamily: 'Prompt', fontSize: '15px', fontWeight: '300', color: '#eaeaea' }}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header