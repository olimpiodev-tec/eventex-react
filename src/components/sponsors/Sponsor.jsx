function Sponsor(props) {

    return (
        <>
            <h3>{props.sponsorCategory}</h3>
            <div className="sponsor-slider min-h-6">
                {props.sponsorsList.map((sponsor, key) => 
                    <img key={key} className="img-responsive" src={sponsor} alt="logo" />
                )}

            </div>
        </>
    );
}

export default Sponsor;