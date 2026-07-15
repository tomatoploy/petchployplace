import Header2 from '../components/Header2'
import CircleBanner from "./CircleBanner";

import wash from '../assets/logo24wash.png'
import water from '../assets/logoWateri.png'
import kinkaow from '../assets/logoKinkaow.png'

function HomeFacilityCircle(){
    return(
        <div style={{width: '100%', padding: '30px 0 40px 0', backgroundColor: '#fcfcfc' }}>
            <Header2 title='ร้านค้าและบริการ' description='สะดวกสบายครบครัน ไม่ต้องเดินออกไปไหนไกล'/>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <CircleBanner name='24 Wash' detail='24 Wash' image={wash}/>
                <CircleBanner name='Wateri' detail='Wateri' image={water}/>
                <CircleBanner name='กินข้าวกันมั้ย' detail='กินข้าวกันมั้ย' image={kinkaow}/>
                
            </div>
        </div>
    )
}

export default HomeFacilityCircle