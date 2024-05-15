import "./TourDetails.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toursData from "../../data/db.json";

export default function TourDetails() {

    let { id } = useParams();
    const [city, setCity] = useState(null);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        const result = toursData.find((item) => item.id === id);
        setCity(result);
    }, [id]);


    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    return (
        <>
            <div className="container content-container">
                {city && (
                    <>
                    <div className="row">
                    <div className="col-12">
                        <img src={city.image} alt={city.name} className="img-fluid" />
                    </div>
                    </div>
                        <div className="row mt-4">
                        <div className="col-12">
                            <h2>{city.name}</h2>
                            <p>
                                {showFullDescription
                                    ? city.info
                                    : `${city.info.substring(0, 180)}...`}
                                {!showFullDescription && (
                                    <button className="btn btn-info" onClick={toggleDescription}>See more</button>
                                )}
                            </p>
                            {showFullDescription && (
                                <button className="btn btn-info" onClick={toggleDescription}>See less</button>
                            )}
                        </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}