
function ImgFigure({src, caption, subCaption}){

    return (
        <figure>
            <img src={src} alt={caption} />
            <figcaption>{caption}<br/> <span className="job-title">{subCaption}</span></figcaption>
        </figure>
    )
}

export default ImgFigure;