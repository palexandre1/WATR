import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function Popup({ court, close, show }) {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [playerCount, setPlayerCount] = useState(court.player_count || 0)
  const playingHere = () => {
    axios.put(`/courts/${court.id}`)
      .then(() => {
        var newCount = playerCount;
        setPlayerCount(newCount+1)
        console.log("Player count updated");
        // close()
      })
      .catch(() => {
        console.log('Unable to update player count')
      })
    // close()
  }
  console.log(court)

  useEffect(() => {

  },[playerCount])
  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{court.location_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>There are appromixately {playerCount} hoopers playing here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" onClick={playingHere}>
            I'm playing here
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}