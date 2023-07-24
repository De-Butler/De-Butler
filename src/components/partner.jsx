import Creditscend from "../assets/img/CreditScend.png";
import NearKorea from "../assets/img/nearkr-white.svg";
import YourD from "../assets/img/YourD-white.png";
import SeoulMetaweek from "../assets/img/SeoulMetaweek.png";
import SWF from "../assets/img/swf_logo.png";

const Partner = () => {
    return(
        <section className="PartnerSection">
            <div className="Partner_h1">Our Partner</div>
            <div className="Partners">
                <img src={YourD} alt="YourD" className="Partner"/>
                <a href="https://nearkorea.org" target="_blank" rel="noreferrer">
                    <img src={NearKorea} alt = "NearKorea" className="Partner" />
                </a>
                {/* <img src={Creditscend} alt = "Creditscend" className="Partner"/> */}
                <a href="https://seoulmetaweek.com/ko/" target="_blank" rel="noreferrer">
                    <img src={SeoulMetaweek} alt={"SeoulMetaweek"} className="Partner"/>
                </a>
                <a href="https://seoulweb3festival.com/" target="_blank" rel="noreferrer">
                    <img src={SWF} alt = "NearKorea" className="Partner" />
                </a>
            </div>
        </section>
    )
}

export default Partner;