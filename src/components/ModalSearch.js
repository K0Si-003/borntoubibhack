import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, CustomInput } from 'reactstrap';

function ModalSearch (props){
  return(
    <div>
      <Button color='link' onClick={toggle}><h3>Changer de mot de passe</h3></Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Changement de mot de passe</ModalHeader>
        <ModalBody>

          <Form.Group as={Col} controlid='formBasicCurrentPassword'>
            <Form.Label>Mot de passe actuel</Form.Label>
            <Form.Control type='currentpassword' placeholder='' />
          </Form.Group>

          <Form.Group as={Col} controlid='formBasicCurrentPassword'>
            <Form.Label>Nouveau mot de passe</Form.Label>
            <Form.Control type='newpassword' placeholder='' />
          </Form.Group>

          <Form.Group as={Col} controlid='formBasicCurrentPassword'>
            <Form.Label>Confirmer mot de passe</Form.Label>
            <Form.Control type='newpasswordconfirmed' placeholder='' />
          </Form.Group>
        </ModalBody>
        <ModalFooter>
          <Button style={{ backgroundColor: 'var(--red)', border: 'solid 1px var(--red)' }} onClick={toggle}>Confirmer</Button>{' '}
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
};

export default ModalSearch;