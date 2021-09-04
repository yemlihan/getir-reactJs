
export default function Menu({title,items}){
    return(
        <section>
            <nav className="grid gap-y-4">
                <h6 className="text-2xl text-primary-brand-color">{title}</h6>
                <nav>
                    <ul>
                        {items.map((item,index) => (
                            <li className="mb-3 text-gray-600 text-sm">
                                <a href="#">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </nav>
        </section>
    )
}