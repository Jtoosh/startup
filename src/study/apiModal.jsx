import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ApiModal()  {
  const [showModal, setShowModal] =  React.useState(false);
  const  handleShow = () => setShowModal(true);
  const handleClose = () =>  setShowModal(false);
  const [modalData, setModalData] = React.useState({});
  const [searchTerm, setSearchTerm] = React.useState('');
  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://api.datamuse.com/words?ml=${searchTerm}`);
      const data = await response.json();
      await setModalData(data)
    }
    fetchData()
    return () => {

    }
  },[searchTerm])
  function handleSubmit(e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    const formObject = Object.fromEntries(formData.entries());
  
    const formSearchTerm = formObject.wordSearch
    
    setSearchTerm(formSearchTerm)
  }


  console.log((modalData))
  console.log(`https://api.datamuse.com/words?ml=${searchTerm}`)
  return (
    <>
        <button className="btn btn-warning" onClick={handleShow}>
            Need ideas?
        </button>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>API Ideas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {searchTerm ? (
         <>
          <form action="submit" onSubmit={handleSubmit}>
            <input type="text" name="wordSearch" id="wordSearch"  placeholder='Enter a word to see similar-meaning words' className='form-control'/>
            <button className='btn btn-secondary my-4'>Go</button>
          </form>
          
          <p>Here are some words with similar meaning as ____</p>
          <ul>
            {Object.entries(modalData).map((entry) => (
              <li key={entry[1].word}>{entry[1].word}</li>
            ))}
            
          </ul>
        </>)
        :
        (
          <>
            <form action="submit" onSubmit={handleSubmit}>
            <input type="text" name="wordSearch" id="wordSearch"  placeholder='Enter a word to see similar-meaning words' className='form-control'/>
            <button className='btn btn-secondary my-4'>Go</button>
          </form>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
      </Modal>
    </>
  );
}
// value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)}