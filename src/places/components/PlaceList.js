import React from "react";
import Button from "../../shared/components/FormElements/Button";

import "./css/PlaceList.css";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length == 0) {
    return (
      <div className="place-list center">
        <h2>No places found, Maybe create one</h2> 
        <Button to="places/new"> Share Place</Button>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => {
        return <PlaceItem
        key={place.id}
        id={place.id}
        image={place.imageUrl}
        title={place.title}
        description={place.description}
        address={place.address}
        createId={place.creator}
        coordinates={place.location}
      />;
      })}
    </ul>
  );
};

export default PlaceList;
