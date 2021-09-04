import Menu from 'components/ui/Menu'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import {AiOutlineGlobal} from 'react-icons/ai'

export default function Footer(){

    const menus = [
        {
            "title" : "Getir'i Keşfedin",
            "items" : [
                {
                    "title" : "Hakkımızda"
                },
                {
                    "title" : "Kariyer"
                },
                {
                    "title" : "İletişim"
                },
                {
                    "title" : "COVID-19 Duyuru"
                },
                {
                    "title" : "Sosyal Sorumluluk Projeleri"
                }
            ]
        },
        {
            "title" : "Yardıma mı ihtiyacınız var?",
            "items" : [
                {
                    "title" : "Sıkça Sorulan Sorular"
                },
                {
                    "title" : "Kişisel Verilerin Korunması"
                },
                {
                    "title" : "Gizlilik Politikası"
                },
                {
                    "title" : "Kullanım Koşulları"
                },
                {
                    "title" : "Çerez Politikası"
                }
            ]
        },
        {
            "title" : "İş Ortağımız Olun",
            "items" : [
                {
                    "title" : "Bayimiz Olun"
                },
                {
                    "title" : "Deponuzu Kiralayın"
                },
                {
                    "title" : "GetirYemek Restoranı Olun"
                },
                {
                    "title" : "GetirÇarşı İşletmesi Olun"
                }
            ]
        }
    ]

    return(
        <div className="bg-white mt-10">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-y-6 lg:grid-cols-4 pt-10 mb-5">
                    <section>
                        <h6 className="text-2xl text-primary-brand-color">Getir'i indirin!</h6>
                        <nav className="flex flex-col gap-y-3 mt-5">
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                            </a>
                        </nav>
                    </section>
                    {menus.map((menu,index) => (
                         <Menu key={index} {...menu}/>
                    ))}
                </div>
                <div className="flex justify-between items-center border-t border-gray-200 mt-6 py-6">
                    <div className="text-xs text-gray-700 flex gap-x-8">
                        &copy; 2021 Getir
                        <a href="#" className="text-primary-brand-color hover:underline ">
                            Bilgi Toplumu Hizmetleri
                        </a>
                    </div>
                    <nav className="flex flex-row gap-x-10 justify-center text-center items-center">
                        <a href="#" className="text-gray-600 hover:text-primary-brand-color hover:bg-primary-brand-color cursor-pointer">
                            <FaFacebook size={25}/>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary-brand-color hover:bg-primary-brand-color cursor-pointer">
                            <FaTwitter size={25}/>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary-brand-color hover:bg-primary-brand-color cursor-pointer">
                            <FaInstagram size={25}/>
                        </a>
                        <a href="#" className="flex flex-row text-center items-start gap-x-2 text-gray-600 hover:text-primary-brand-color hover:bg-primary-brand-color cursor-pointer">
                            <AiOutlineGlobal size={18}/>
                            Türkçe(TR)
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
