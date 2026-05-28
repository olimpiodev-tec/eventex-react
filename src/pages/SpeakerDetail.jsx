import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import getBaseUrlApi from '../environment';

import Nav from "../components/nav/Nav";
import Top from "../components/Top";


function SpeakerDetail() {

    const { id } = useParams()

    const [speaker, setSpeaker] = useState([])

    useEffect(() => {
        const getSpeaker = async () => {
            try {
                const BASE_URL = getBaseUrlApi();
                const response = await axios.get(`${BASE_URL}/speaker/${id}`);
                setSpeaker(response.data)
            } catch(error) {
                alert(`Erro ao buscar palestrante: ${error}`)
            }
        };

        getSpeaker();
    }, [])
    
    return (
        <>
            <Nav />
            <Top />

            <section>
                <div className="speakers content row padding-bottom-3 desktop-8 container">
                    <h2>
                        <a href={speaker.personalSite} target="_blank">{speaker.name}</a>
                    </h2>
                    
                    <img className="photo" src={speaker.imageUrl} />
                    <p>{speaker.description}</p>
                </div>
            </section>
        </>
    );
}

export default SpeakerDetail;