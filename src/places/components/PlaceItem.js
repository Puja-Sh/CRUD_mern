import React, { useState, useContext, useCallback } from "react";
import reactRouterDom from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElement/Modal";
import { AuthContext } from "../../shared/context/auth-context";
import Auth from "../../user/pages/Auth";
import "./css/PlaceItem.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openModalHandler = () => {
    setShowMap(true);
  };

  const closeModalHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("Deleting....");
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeModalHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModalHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2> The map here</h2>
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        header="Are you sure"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>Do you want to proceed and delete this place?</p>
      </Modal>
      <li className="place-item">
        <div className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title}></img>
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openModalHandler}>
              {" "}
              Map
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}> Edit </Button>
            )}

            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                {" "}
                DELETE
              </Button>
            )}
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
