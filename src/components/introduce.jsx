import Activity from "./activity";

const Intro = () => {
    return (
      <>
        <div id="About" className="IntroTextSection">
          <div className="IntroTextBox">
            <div className="DeBulter">
              <div className="Qustion">What is De-Butler?</div>
              <div className="Qustion_description">
                <div className="Qustion_description_text">
                  De-Butler는 Decentralized Butler로 탈중앙화 세계인
                  Web3.0세상으로 가는데 도움을 주는 집사를 의미합니다.
                </div>
                <div className="Qustion_description_text">
                  Web3를 누구나 쉽게 접하게 하기 위해, 진입장벽을 낮추는 Web3
                  Mass Adoption을 목표로 세워진 학회입니다.
                </div>
              </div>
            </div>
            <div className="OurMission">
              <div className="Qustion">Our Mission</div>
              <div className="Qustion_description">
                <div className="Qustion_description_text">
                  다양한 Web3 프로젝트 경험을 통해 Web3 생태계에 많은 Builder를
                  Incubating 시킬 것 입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Activity />
      </>
    );
}

export default Intro;