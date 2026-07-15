import { apartmentData } from "../Data";

function Footer(){
    return(
        <footer style={{margin: '20px 0 0 0'}}>
            <hr />
            <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '300'}}>© 2026 {apartmentData.nameEn}. All rights reserved.</p>
        </footer>
    )
}

export default Footer