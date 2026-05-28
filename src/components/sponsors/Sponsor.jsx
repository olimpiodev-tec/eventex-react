function Sponsor(props) {

    return (
        <>
            <h3>{props.category}</h3>
            <div className="sponsor-slider min-h-6">
                {props.images.map((image, key) => 
                    <img key={key} className="img-responsive" src={image} alt="logo" />
                )}

            </div>
        </>
    );
}

export default Sponsor;