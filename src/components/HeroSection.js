import Slider from 'react-slick';
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import {FaFacebook} from 'react-icons/fa'

export default function HeroSection(){

    const [selected, setSelected] = useState('TR');

    const phones  = {
      US :  '+1',
      DE : '+50',
      TR : '+90',
      IT : '+20',
      IN : '+8'
    }

    const settings = {
        dots: false,
        infinite: true,
        arrows : false,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const colorFacebook  ={
        color : "blue"
      }
    return(
        <div className="relative h-auto md:h-[500] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
          <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="" />
          </div>
          </Slider>
          <div className="md:container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
            <div class="hidden sm:block ">
              <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
              <h3 className="mt-8 text-2xl md:text-4xl font-semibold text-white">
                Dakikalar içinde <br/> kapınızda
              </h3>
            </div>
            <div className="sm:w-full md:w-full w-[400px] rounded-lg bg-gray-50 p-6">
              <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2 h-14">
                <ReactFlagsSelect
                    countries={Object.keys(phones)}
                    customLabels={phones}
                    onSelect={code => setSelected(code)}
                    selected={selected}
                    className="flag-select h-full"
                  />
                  <label className="flex-1 tel-no relative block group cursor-pointer">
                    <input required type="number" className="h-full pt-2 px-2 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color group-hover:border-primary-brand-color outline-none peer"/>
                    <span className="absolute  px-4 flex items-center top-0 left-0 text-sm text-gray-500 peer-span transition-all">Telefon Numarası</span>
                  </label>
                </div>
                <button className="go-tel bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
                  Telefon numarası ile devam et
                </button>
                <hr className="h-[1px] bg-gray-300 my-2 w-1/2 mx-auto"/>
                <button className="bg-facebook h-12 w-full flex px-4 items-center rounded-md text-sm font-semibold">
                 <FaFacebook size={28} className="text-primary-brand-color"/>
                  <span className="mx-auto go-facebook-color">Facebook ile devam et</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

