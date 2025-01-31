import './DraggableMenu.css';
function Slide({imgSrc, nome,  children}){
    return <>
        <div className="slider-img">
            <img src={imgSrc} alt="" />
            <h2>{nome}</h2>
            <p>{children}</p>
        </div>
    </>
}

export default Slide;