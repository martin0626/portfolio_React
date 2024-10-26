export default function SingleTech({logo, alt, title}) {

    return (
        <div className="singleTech">
            <div className="singleTech-logo">
                <img src={logo} alt={alt} />
            </div>
            <p>{title}</p>
        </div>
    )
}