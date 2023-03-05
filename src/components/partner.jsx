import Creditscend from "../assets/img/CreditScend.png";
import NearKorea from "../assets/img/nearkr-white.svg";

const Partner = () => {
    return(
        <section className="PartnerSection">
            <div className="Partner_h1">Our Partner</div>
            <div className="Partners">
                <img src={Creditscend} alt = "Creditscend" className="Partner"/>
                <a href="https://nearkorea.org">
                    <img src={NearKorea} alt = "NearKorea" className="Partner" />
                </a>
            </div>
        </section>
    )
}

export default Partner;