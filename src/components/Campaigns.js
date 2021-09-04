import Slider from 'react-slick';
import Banners from 'api/banners.json'; 
import { useState,useEffect } from 'react';

export default function Campaigns(){

    const [banners,setBanners] = useState([]);

    useEffect(() => {
        setBanners(Banners)
    },[])

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              }
          },
          {
            breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
          },
          {
            breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
          }
        ]
      };

    return(
        <div className="container mx-auto">
          <h3 className="text-sm font-semibold mb-3 mt-5">Kampanyalar</h3>
          <Slider {...settings} className="-mx-2">
            {banners.length && banners.map((banner, index) => (
                <div key={banner.id} className="px-2">
                    <img src={banner.image} alt="" className="rounded-lg"/>
                </div>
            ))}
          </Slider>
        </div>
    )
}
