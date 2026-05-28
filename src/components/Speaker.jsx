import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import getBaseUrlApi from '../environment';

function Speaker() {

    const [speakers, setSpeakers] = useState([])

    useEffect(() => {
        const getSpeakers = async () => {
            try {
                const BASE_URL = getBaseUrlApi();
                const response = await axios.get(`${BASE_URL}/speakers`);
                setSpeakers(response.data)
            } catch(error) {
                alert(`Erro ao buscar palestrantes: ${error}`)
            }
        };

        getSpeakers();
    }, [])
    
    return (
        <section id="speakers">
            <div className="speakers text-align-center row desktop-12 padding-bottom-2 container">
                <h2>Palestrantes Convidados</h2>

                {speakers.map((speaker, key) => {
                    return (
                        <div className="desktop-3" key={key}>
                            <img src={speaker.imageUrl} />
                            <h4>
                                <Link to={`speakerDetail/${speaker.id}`}>{speaker.name}</Link>                                
                            </h4>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default Speaker;