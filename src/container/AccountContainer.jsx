import { Container } from "reactstrap";
import CreateButton from "../components/Account/CreateButton";
import ResultForm from "../components/Account/ResultForm";
import ModalCreateNewAccount from "../components/Account/CreateNewAccount/ModalCreateNewAccount";
import ModalUpdateAccount from "../components/Account/UpdateNewAccount/ModalUpdateAcount";
import { useGetListDataAPI } from "../api/AccountApi";
import { apiAccount } from "../api/api";

function AccountContainer(props) {


    const [listAccount, setListAccount] = useGetListDataAPI(apiAccount);

    return (
        <Container>
            {/* Nút thêm mới */}
            <CreateButton />
            {/* Form thêm mới Account */}
            <ModalCreateNewAccount setListAccount={setListAccount} />
            {/* Form Update Account*/}
            <ModalUpdateAccount setListAccount={setListAccount} />
            {/* Form kết quả */}
            <ResultForm listAccount={listAccount} setListAccount={setListAccount} />

        </Container>
    );
}


export default AccountContainer;