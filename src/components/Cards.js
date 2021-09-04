import cardsData from 'api/cards.json'
import { useState, useEffect } from 'react'

export default function Cards(){

    const [cards,setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)
    },[])

    return(
        <div className="w-full md:container mx-auto grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4 mt-10">
            {cards.length && cards.map((card,index) => (
                <div className="flex flex-col p-16 justify-center text-center items-center rounded-lg shadow-2xl">
                    <img src={card.image} alt="" className="w-[150px] h-[150px] mb-6"/>
                    <h6 className="text-primary-brand-color font-semibold text-lg ">{card.title}</h6>
                    <p className="mt-2 text-sm">{card.description}</p>
                </div>
            ))}
        </div>
    )
}
