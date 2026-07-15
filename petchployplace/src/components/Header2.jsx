function Header2({category, title, description}){
    return(
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#f75c1c', fontWeight: '600', fontSize: '11px', letterSpacing: '2px' }}>{category}</span>
            <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#222222', fontFamily: 'Prompt', margin: '6px 0 0 0' }}>{title}</h2>
            <p style={{ fontSize: '15px', color: '#666666', margin: 0 }}>{description}</p>
            <div style={{ width: '50px', height: '3px', backgroundColor: '#f75c1c', margin: '12px auto 0 auto' }} />
          </div>
        </div>
    )
}

export default Header2