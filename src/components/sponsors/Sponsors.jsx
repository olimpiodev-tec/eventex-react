import Sponsor from "./Sponsor";

import gold1 from 'url:../../assets/images/sponsorgold01.png'
import gold2 from 'url:../../assets/images/sponsorgold02.png'
import gold3 from 'url:../../assets/images/sponsorgold03.png'
import silver1 from 'url:../../assets/images/sponsorsilver01.png'
import silver2 from 'url:../../assets/images/sponsorsilver02.png'
import silver3 from 'url:../../assets/images/sponsorsilver03.png'
import silver4 from 'url:../../assets/images/sponsorsilver04.png'
import silver5 from 'url:../../assets/images/sponsorsilver05.png'
import silver6 from 'url:../../assets/images/sponsorsilver06.png'

function Sponsors() {

    const sponsorsGold = [
        gold1, gold2, gold3
    ]

    const sponsorSilver = [
        silver1, silver2, silver3, silver4, silver5, silver6
    ]

    return (
        <section id="sponsors">
            <div className="sponsors text-align-center row desktop-12 min-h-28 padding-bottom-2 container">

                <h2>Patrocinadores</h2>

                <Sponsor sponsorsList={sponsorsGold} sponsorCategory={'Gold'} />

                <Sponsor sponsorsLIst={sponsorSilver} sponsorCategory={'Silver'} />

                <h3>Seja um patrocinador</h3>
                <p>Interessado? Descubra as oportunidades e benefícios.</p>
                <a className="btn-basic btn-blue" href="mailto:contato@eventex.com.br?Subject=Patrocínio">informe-se</a>

            </div>
        </section>
    );
}

export default Sponsors;