import Intro from "./secondpage"

const MainCopy = () => {
    return (
        <>
            <div id="Home" className="firstpage">
                <div className="CopyTextSection">
                    <div className="CopyTextBox"><div className="CopyText1">NEW WORLD</div></div>
                    <div className="CopyTextBox" style={{top:"-1px"}}><div className="CopyText2">NEW SHIFT</div></div>
                    <div className="CopyTextBox" style={{top:"-2px"}}><div className="CopyText3">NEW VALUE</div></div>
                    
                </div>
            </div>
            <Intro />
        </>
    )
}
export default MainCopy