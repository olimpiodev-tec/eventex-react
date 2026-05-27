function MenuItem() {
    const itens = [
        {
            interno: true, href: "#overview", title: "Conferência"
        },
        {
            interno: false, href: "#speakers", title: "Palestras"
        },
        {
            interno: true, href: "#sponsors", title: "Patrocinadores"
        },
        {
            interno: true, href: "#register", title: "Inscrição"
        },
        {
            interno: true, href: "#venue", title: "Local"
        }
    ]
    return (
        <ul>
            {itens.map((item, key) => {
                return (
                    <li key={key}>
                        <a data-scroll href={item.href}>{item.title}</a>
                    </li>
                )
            })}
        </ul>
    );
}

export default MenuItem;