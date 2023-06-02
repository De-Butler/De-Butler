
const Activity = () => {

    return(
        <div id="Activity" className="ActivitySection">
            <div className="Web3Text">
                Web3의 시작, De-Butler
            </div>
            <div className="ActivityBoxSection">
                <div className="ActivityBox" style={{backgroundColor: "#F1B2D7"}}>
                    <div className="order">01.</div>
                    <div className="smallTitle">Blockchain Activity</div>
                    <div className="activedescriptionbox">
                        <ul>
                            <li className="description">블록체인 스터디</li>
                            <li className="description">블록체인 관련 리서치 후 미디움 기사 작성</li>
                            <li className="description">블록체인 해커톤 참여(기획, 디자인, 개발)</li>
                            <li className="description">0xCatbox의 web3 생태계 이야기</li>
                        </ul>
                    </div>
                </div>
                <div className="ActivityBox" style={{backgroundColor: "#D0E957"}}>
                <div className="order">02.</div>
                    <div className="smallTitle">W3C DID</div>
                    <div className="activedescriptionbox">
                        <ul>
                            <li className="description">W3C DID 학습 및 Docs 번역</li>
                            <li className="description">간단한 DID 구현</li>
                            <li className="description">연사 초청 및 강의</li>
                        </ul>
                    </div>
                </div>
                <div className="ActivityBox" style={{backgroundColor: "#FFBC02"}}>
                <div className="order">03.</div>
                    <div className="smallTitle">Networking & Mingling</div>
                    <div className="activedescriptionbox">
                        <ul>
                            <li className="description">연합 학교들과 지속적인 Mingling</li>
                            <li className="description">연합 학교와 해커톤 개최</li>
                            <li className="description">다양한 블록체인 현업자들과의 만남</li>
                        </ul>
                    </div>
                </div>
                <div className="ActivityBox" style={{backgroundColor: "#FFF9F7"}}>
                <div className="order">04.</div>
                    <div className="smallTitle">Technical</div>
                     <div className="activedescriptionbox">
                        <ul>
                            <li className="description">Web3를 위한 기본 개발 지식 습득</li>
                            <li className="description">다양한 체인별 컨트랙트 개발</li>
                            <li className="description">기초 암호학 학습</li>
                            <li className="description">블록체인 Wallet 만들기</li>
                            <li className="description">Iden3 관련 영지식증명(ZKP) 학습</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity;