import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function Popup({ court, close, show }) {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const playingHere = () => {
    axios.put(`/courts/${court.id}`)
      .then(() => {
        console.log("Player count updated");
      })
      .catch(() => {
        console.log('Unable to update player count')
      })
    close()
  }
  console.log(court)
  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{court.location_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>There are appromixately {court.player_count} hoopers playing here</Modal.Body>
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