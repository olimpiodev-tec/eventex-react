import loiane from 'url:../assets/images/loiane.png'
import diego from 'url:../assets/images/diego.png'
import henrique from 'url:../assets/images/henrique.png'
import rodrigo from 'url:../assets/images/rodrigo.png'

function Speaker() {
    const speakers = [
        {
            name: "Loiane Groner", photo: loiane, link: "palestrante_detalhes_lg.html"
        },
        {
            name: "Rodrigo Branas", photo: rodrigo, link: "palestrante_detalhes_rb.html"
        },
        {
            name: "Henrique Bastos", photo: henrique, link: "palestrante_detalhes_hb.html"
        },
        {
            name: "Diego Fernandes", photo: diego, link: "palestrante_detalhes_df.html"
        }
    ]
    return (
        <section id="speakers">
            <div className="speakers text-align-center row desktop-12 padding-bottom-2 container">
                <h2>Palestrantes Convidados</h2>

                {speakers.map((speaker, key) => {
                    return (
                        <div className="desktop-3" key={key}>
                            <img src={speaker.photo} />
                            <h4>
                                <a href={speaker.link}>
                                    {speaker.name}
                                </a>
                            </h4>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default Speaker;