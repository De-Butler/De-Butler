const ApplyButton =() => {
    document
        .querySelectorAll('.button')
        .forEach(
            button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>'
        );
    return (
        <section className="apply">
            <a id="Recruit" rel="noreferrer" href="https://forms.gle/7uxkV7oh3xVi6Kqb8" target="_blank" className="button reverse" >
                    2기 모집 마감
            </a>
        </section>
    )
}

export default ApplyButton;