export default function SingleProject({image, title, altImg=''}){
    return(   
        <div className="singleProject">
            <div className="singleProject-background">
                <img src={image} alt={altImg} />
            </div>
            <div className="singleProject-content text-euro">
                <p>{title}</p>
                <div className="singleProject-btnGroup">
                    <a className="mainBtn">Learn More</a>
                    <a className="mainBtn">Code</a>
                </div>
            </div>
        </div>  
    )
}