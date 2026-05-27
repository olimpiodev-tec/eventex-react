function Local() {
    return (
        <section id="venue">
            <div className="row min-h-10">

                <div id="map-canvas"></div>
                <div className="row desktop-12 container">
                    <div className="venue row">
                        <div className="venue-address desktop-4 gutter">
                            <h2>Bar Samba Caffé</h2>
                            <p>Melhor que qualquer centro de convenções.</p>
                            <p className="address">
                                <i className="fa fa-2x fa-map-marker fa-inverse"></i>
                                Rua do Ouvidor 23, Centro<br />
                                Rio de Janeiro, RJ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Local;