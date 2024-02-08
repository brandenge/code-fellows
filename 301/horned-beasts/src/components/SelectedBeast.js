import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SelectedBeast(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.selected.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={props.selected.image_url} alt="A horned beast" className="img-fluid"/>
          {props.selected.description}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default SelectedBeast;
