import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState } from 'react';


export async function ApiModal(props) {
  const response = await fetch('https://api.datamuse.com/words?ml=soft');
  const data = await response.json();
  const [show, setShow] = React.useState(props.showModal);
  const handleClose = () => setShow(false);
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>API Ideas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {data.map((item) => (
            <li key={item.word}>{item.word}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
      </Modal>
  );
}