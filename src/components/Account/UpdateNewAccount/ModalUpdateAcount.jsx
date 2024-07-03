import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
} from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'


import UpdateForm from "./UpdateForm";
import { setShowUpdateForm } from "../../../redux/Reducer/ShowForm";


function ModalUpdateAccount(props) {


    const showUpdateForm = useSelector((state) => state.form.showUpdateForm)
    const dispath = useDispatch();
    return (
        <Container>
            <br />
            <Modal isOpen={showUpdateForm}>
                <ModalHeader>
                    <h3>Update Account</h3>
                </ModalHeader>
                <ModalBody>
                    <UpdateForm setListAccount={props.setListAccount} />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => dispath(setShowUpdateForm())}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}


export default ModalUpdateAccount;