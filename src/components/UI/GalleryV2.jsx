import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import getImageURL from "../../utils/image-util";
import LoadingComp from "./Loading";


const fetchImages = async (imageUrls) => {
    try {
        let data = await Promise.all(
            imageUrls.map((url) =>
            new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = reject;
            })
            )
        );
    
        return data
    }catch(err){
        console.log(err);
    }
};



export default function GalleryComponent({images, folder, titles=[], mode='light', size='small'}) {
    const [loadedImages, setLoadedImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [activeSlide, setActiveSlide] = useState(0)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: current => setActiveSlide(current),
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
        ]
    };

    useEffect(()=>{
        setIsloading(true);
        const setImages = async()=>{
            const urls = images.map(i => getImageURL(i, folder))
            const data = await fetchImages(urls);
            setLoadedImages(data);
            setIsloading(false);
        }
        images.length > 0 && setImages();
    }, images)



    return (
        <article className={`gallery-container-${size} ${mode}-gallery`}>
            {titles.length > 0 && <p className="gallery-label">{titles[activeSlide]}</p>}
            {
                isLoading 
                ? 
                    <div className="gallery-loading">
                        <LoadingComp/>
                    </div>
                : 
                    <Slider {...settings}>
                        {loadedImages.map((image, index) =>
                            <div className="image-container">
                                <div className={`image-wrapper ${activeSlide == index && "active-gallery-image"}`}>
                                    <img src={image} alt="Certificate Image" />
                                </div>
                            </div>
                        )}
                    </Slider>
            }
        </article>
  );
}