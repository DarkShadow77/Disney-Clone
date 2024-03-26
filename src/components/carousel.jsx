import { useState } from "react"
import carouselStyle from "../assets/css/carousel.module.css"

function Carousel() {

    let [carouselIndex, setIndex] = useState(0);

    const carouselArray = [
        { image: "https://lumiere-a.akamaihd.net/v1/images/home_2048-878_pc_698b83c6.png?region=0,0,2048,878", title: `Three Disney & Pixar “tear-jerking masterpieces” to be released in theaters`, description: `Three masterpieces nominated for the Academy Award for Best Animated Feature are coming to the big screen!`, color: "black"},
        { image: "https://lumiere-a.akamaihd.net/v1/images/20240314_hero_olaf_presents_2048_215_878_a32dadd5.jpeg?region=0,0,2048,878", title: `A story told by Olaf`, description: `10th anniversary of “Frozen” released in Japan! Olaf recreates that popular movie almost by himself⁉ The original work is now available exclusively on Disney Plus!`, color: "white" },
        { image: "https://lumiere-a.akamaihd.net/v1/images/20240314_hero_anayuki_2048_215_878_657bd06d.jpeg?region=0,0,2048,878", title: `“Frozen” 10th anniversary`, description: `Check out the latest information, character information, related videos, and more about the Disney animated movie that caused the <Frozen phenomenon> around the world!`, color: "black" }
    ]
    

    function previousImage() {
        if (carouselIndex > 0) {
            setIndex(carouselIndex - 1);
            console.log(carouselIndex);
        }
    }

    function nextImage() {
        if (carouselIndex < (carouselArray.length - 1)) {
            setIndex(carouselIndex + 1);
            console.log(carouselIndex);
        }
    }

    return (
        <>
            <div id={carouselStyle.carousel}>
                <div id={carouselStyle.carouselImage} style={{ backgroundImage: `url(${carouselArray[carouselIndex].image})` }}></div>
                <div> </div>
                <div id={carouselStyle.content}>
                    {carouselIndex > 0 ?
                        <button onClick={previousImage}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.48 11.3701 16.48 10.6001 15.47L4.08008 8.94995" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        :
                        <button> </button>
                    }

                    <div id={carouselStyle.contentContent}>
                        <div id={carouselStyle.contentText}>
                            <h2 style={{color: carouselArray[carouselIndex].color}}>{carouselArray[carouselIndex].title}</h2>
                            <p style={{color: carouselArray[carouselIndex].color}}>{carouselArray[carouselIndex].description}</p>
                        </div>

                    </div>

                    {carouselIndex < (carouselArray.length - 1) ?
                        <button onClick={nextImage}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        :
                        <button> </button>
                    }
                </div>
                <div id={carouselStyle.indicatorCont}>



                    {carouselArray.map((items, index) => {
                        return (<div id={carouselStyle.indicator} style={index == carouselIndex ? { backgroundColor: "#0077DA" } : { backgroundColor: " #DCDDDF" }}></div>)
                    })}

                </div>
            </div>
        </>
    );
}

export default Carousel;