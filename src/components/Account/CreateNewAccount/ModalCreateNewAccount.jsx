import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
} from "reactstrap";
import InputForm from "./InputForm";
import { useSelector, useDispatch } from 'react-redux'
import { setShowForm } from "../../../redux/Reducer/ShowForm";

function ModalCreateNewAccount(props) {


    const showForm = useSelector((state) => state.form.showForm)
    const dispath = useDispatch();

    return (
        <Container>
            <br />
            <Modal isOpen={showForm}>
                <ModalHeader>
                    <h3>Create New Account</h3>
                </ModalHeader>
                <ModalBody>
                    <InputForm
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => dispath(setShowForm())}>Close</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}


export default ModalCreateNewAccount;