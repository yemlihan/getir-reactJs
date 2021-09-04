export default function Category({category : {id,title,image}}){
    return(
        <a href="" className="flex flex-col text-center group p-4 items-center gap-y-2 transition hover:bg-purple-50">
            <img src={image} alt={title} className="w-12 h-12 rounded border-gray-200"/>
            <span className="text-sm whitespace-nowrap font-semibold text-gray-700 group-hover:text-blue-800 tracking-tighter">{title}</span>
        </a>
    )
}