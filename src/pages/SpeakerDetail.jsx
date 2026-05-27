import { useParams } from "react-router-dom";

import Nav from "../components/nav/Nav";
import Top from "../components/Top";

import loiane from 'url:../assets/images/loiane.png'
import diego from 'url:../assets/images/diego.png'
import henrique from 'url:../assets/images/henrique.png'
import rodrigo from 'url:../assets/images/rodrigo.png'

function SpeakerDetail() {

    const { id } = useParams()

    let imageTag = null

    if (id == 0) imageTag = <img className="photo" src={loiane} />
    if (id == 1) imageTag = <img className="photo" src={rodrigo} />
    if (id == 2) imageTag = <img className="photo" src={henrique} />
    if (id == 3) imageTag = <img className="photo" src={diego} />

    return (
        <>
            <Nav />
            <Top />

            <section>
                <div className="speakers content row padding-bottom-3 desktop-8 container">
                    <h2>
                        <a href="https://blog.rocketseat.com.br/author/diego/" target="_blank">Diego Fernandes</a>
                    </h2>
                    
                    {imageTag}
                    
                    <p>
                        Programador full-stack, apaixonado pelas melhores tecnologias de desenvolvimento back-end, front-end e mobile, é co-fundador e CTO na Rocketseat.
                    </p>
                </div>
            </section>
        </>
    );
}

export default SpeakerDetail;