import {AiOutlinePlus} from 'react-icons/ai'

export default function ProductItem({product}){
    return(
        <div className="bg-white flex flex-col relative items-center text-center gap-y-1 p-3">
            <div className="absolute text-primary-brand-color cursor-pointer p-2 shadow top-3 right-3 bg-white border border-gray-200  flex items-center justify-center rounded-lg">
            <AiOutlinePlus size={18}/>
            </div>
            <img src={product.image} alt={product.title} />
            <div className="text-sm font-semibold text-primary-brand-color">{product.price}</div>
            <div className="text-sm font-bold text-gray-900">{product.title}</div>
            <div className="text-gray-500">{product.alt}</div>
        </div>
    )
}