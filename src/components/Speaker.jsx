import { Link } from 'react-router-dom'

import loiane from 'url:../assets/images/loiane.png'
import diego from 'url:../assets/images/diego.png'
import henrique from 'url:../assets/images/henrique.png'
import rodrigo from 'url:../assets/images/rodrigo.png'

function Speaker() {
    const speakers = [
        {
            name: "Loiane Groner", photo: loiane
        },
        {
            name: "Rodrigo Branas", photo: rodrigo
        },
        {
            name: "Henrique Bastos", photo: henrique
        },
        {
            name: "Diego Fernandes", photo: diego
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
                                <Link to={`speakerDetail/${key}`}>{speaker.name}</Link>                                
                            </h4>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default Speaker;