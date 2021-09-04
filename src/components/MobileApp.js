export default function MobileApp(){
    return(
        <div className="w-full md:container mx-auto flex flex-col md:flex-row justify-between items-center bg-primary-brand-color mobile-app rounded-none md:rounded-lg mt-6">
            <div className="flex flex-col gap-y-3 text-white p-2 md:p-10">
                <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
                <p className="font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza<br/>
                getirelim.</p>
                <nav className="mt-5 flex md:flex-row flex-col gap-y-2 md:gap-x-2">
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                    </a>
                </nav>
            </div>
                <picture className="mt-6 hidden md:block">
                    <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
                </picture>
        </div>
    )
}
