import { Container, Button } from "reactstrap";

import { useSelector, useDispatch } from 'react-redux'
import { setShowForm } from "../../redux/Reducer/ShowForm";

function CreateButton(props) {
    const dispath = useDispatch();


    return (
        <Container>
            <br />
            <Button color="primary" onClick={() => dispath(setShowForm())}>Create New Account</Button>
        </Container>
    );
}


export default CreateButton;