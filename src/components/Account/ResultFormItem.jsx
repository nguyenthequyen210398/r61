import { Button } from "reactstrap";
import { deleteAccountAPI, useGetListDataAPI } from "../../api/AccountApi";
import { useState } from "react";
import { apiAccount } from "../../api/api";
import { useSelector, useDispatch } from 'react-redux'
import { setShowForm, setShowUpdateForm } from "../../redux/Reducer/ShowForm";


function ResultFormItem(props) {

    // const [listAccount, setListAccount] = useGetListDataAPI(apiAccount);
    const dispath = useDispatch();


    const deleteAccount = (id) => {
        // delete account
        deleteAccountAPI(id, apiAccount, props.setListAccount);

    };

    let items = "";

    if (props.listAccount) {

        items = props.listAccount.map((account, index) => {
            return (
                <tr key={index}>
                    <td>{account.id}</td>
                    <td>{account.email}</td>
                    <td>{account.username}</td>
                    <td>{account.fullname}</td>
                    <td>{account.department}</td>
                    <td>{account.position}</td>
                    <td>{account.createDate}</td>
                    <td>
                        <Button color="warning" onClick={() => dispath(setShowUpdateForm(account.id))} >Edit</Button>
                    </td>
                    <td>
                        <Button color="warning" onClick={() => deleteAccount(account.id)}>Delete</Button>
                    </td>
                </tr>
            );
        });
    }



    return items;
}

export default ResultFormItem;