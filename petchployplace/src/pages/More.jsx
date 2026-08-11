import Header2 from "../components/Header2"
import MoreMap from "../components/MoreMap"
import MoreTransport from "../components/MoreTransport"

function More(){
    return(
        <div>
            <Header2 category='ABOUT US' title='เกี่ยวกับเรา' description='สถานที่ใกล้เคียง | ขนส่งสาธารณะและการเดินทาง'/>

            <MoreMap />

            <MoreTransport />
        </div>
    )
}

export default More