import { ModalBody, Modal, Title, Message, CancelButton, ConfirmButton, ButtonsArea } from "./ConfirmModal.styled";


export default function ConfirmationDialog({ open, onDismiss, onConfirm }) {
  return (
    <ModalBody open={open} onClose={onDismiss}>
      <Modal>
        <Title>Are you sure it's deleted ?</Title>
        <Message>Attention! If you delete this<br /> item, it will not come back...</Message>
        <ButtonsArea>
          <CancelButton onClick={onDismiss}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Delete </ConfirmButton>
        </ButtonsArea>
      </Modal>
    </ModalBody>
  );
};