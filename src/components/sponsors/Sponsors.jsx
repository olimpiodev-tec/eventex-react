import { useState, useEffect } from 'react';
import axios from 'axios';
import getBaseUrlApi from '../../environment';

import Sponsor from "./Sponsor";

function Sponsors() {

    const [sponsors, setSponsors] = useState([])

    useEffect(() => {
        const getSponsors = async () => {
            try {
                const BASE_URL = getBaseUrlApi();
                const response = await axios.get(`${BASE_URL}/sponsors`);
                setSponsors(response.data)
            } catch(error) {
                alert(`Erro ao buscar os patrocinadores: ${error}`)
            }
        };

        getSponsors();
    }, [])

    return (
        <section id="sponsors">
            <div className="sponsors text-align-center row desktop-12 min-h-28 padding-bottom-2 container">

                <h2>Patrocinadores</h2>

                {sponsors.map(sponsor => 
                    <Sponsor key={sponsor.id} images={sponsor.images} category={sponsor.category} />
                )}

                <h3>Seja um patrocinador</h3>
                <p>Interessado? Descubra as oportunidades e benefícios.</p>
                <a className="btn-basic btn-blue" href="mailto:contato@eventex.com.br?Subject=Patrocínio">informe-se</a>

            </div>
        </section>
    );
}

export default Sponsors;