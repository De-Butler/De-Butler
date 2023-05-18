import Creditscend from "../assets/img/CreditScend.png";
import NearKorea from "../assets/img/nearkr-white.svg";
import YourD from "../assets/img/YourD-white.png";

const Partner = () => {
    return(
        <section className="PartnerSection">
            <div className="Partner_h1">Our Partner</div>
            <div className="Partners">
                <img src={YourD} alt="YourD" className="Partner"/>
                <a href="https://nearkorea.org">
                    <img src={NearKorea} alt = "NearKorea" className="Partner" />
                </a>
                <img src={Creditscend} alt = "Creditscend" className="Partner"/>
            </div>
        </section>
    )
}

export default Partner;