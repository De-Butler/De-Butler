const ApplyButton =() => {
    document
        .querySelectorAll('.button')
        .forEach(
            button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>'
        );
    return (
        <section className="apply">
            <a id="Recruit" rel="noreferrer" href="https://forms.gle/HuQRzbZqdW2vMWhf9" target="_blank" className="button reverse" >
                    1.5기 지원 하기
            </a>
        </section>
    )
}

export default ApplyButton;