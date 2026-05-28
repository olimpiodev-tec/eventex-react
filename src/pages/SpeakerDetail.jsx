import { useParams } from "react-router-dom";

import Nav from "../components/nav/Nav";
import Top from "../components/Top";

import { getSpeaker } from "../model/speaker";

function SpeakerDetail() {

    const { id } = useParams()

    const speaker = getSpeaker(id)[0]
    
    return (
        <>
            <Nav />
            <Top />

            <section>
                <div className="speakers content row padding-bottom-3 desktop-8 container">
                    <h2>
                        <a href={speaker.personalSite} target="_blank">{speaker.name}</a>
                    </h2>
                    
                    <img className="photo" src={speaker.image} />
                    <p>{speaker.description}</p>
                </div>
            </section>
        </>
    );
}

export default SpeakerDetail;