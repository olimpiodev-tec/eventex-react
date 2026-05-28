import { Link } from 'react-router-dom'

import { getSpeakers } from '../model/speaker';

function Speaker() {

    const speakers = getSpeakers()
    
    return (
        <section id="speakers">
            <div className="speakers text-align-center row desktop-12 padding-bottom-2 container">
                <h2>Palestrantes Convidados</h2>

                {speakers.map((speaker, key) => {
                    return (
                        <div className="desktop-3" key={key}>
                            <img src={speaker.image} />
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