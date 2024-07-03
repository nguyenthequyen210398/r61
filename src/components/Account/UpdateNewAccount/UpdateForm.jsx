import React, { useState } from "react";

import axios from 'axios';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { updateAccountAPI, useGetListDataAPI } from "../../../api/AccountApi";
import { apiAccount, apiDepartment, apiPosition } from "../../../api/api";
import { useSelector, useDispatch } from 'react-redux'
import { setShowUpdateForm } from "../../../redux/Reducer/ShowForm";


function UpdateForm(props) {

    const dispath = useDispatch();


    const id = useSelector((state) => state.form.id)

    let [listDepartment, setListDepartment] = useGetListDataAPI(apiDepartment);
    // Khai báo State để quản lý danh sách Account trên hệ thống
    let [listPosition, setListPosition] = useGetListDataAPI(apiPosition);



    // Khai báo State lưu trữ giá trị của các ô nhập liệu


    let [Fullname, SetFullname] = useState("");
    let [Department, SetDepartment] = useState("");
    let [Postion, SetPostion] = useState("");



    let handleUpdate = () => {
        let accountUpdate = {
            fullname: Fullname,
            departmentId: Department,
            positionId: Postion,
        };

        console.log(id, accountUpdate)
        updateAccountAPI(id, apiAccount, accountUpdate, props.setListAccount);
        dispath(setShowUpdateForm())

    };


    // Hàm xử lý khi click vào nút Reset
    let handleReset = () => {
        // Set lại State các ô nhập liệu về ""

        SetFullname("");


    };
    // Hiển thị danh sách Department
    let departmentItem = listDepartment.map((department, index) => {
        return (
            <option value={department.id} key={index}>
                {department.name}
            </option>
        );
    });
    // Hiển thị danh sách Position
    let positionItem = listPosition.map((position, index) => {
        return (
            <option value={position.id} key={index}>
                {position.name}
            </option>
        );
    });
    //
    return (
        <Container>
            <Form>
                {/* Fullname */}
                <FormGroup>
                    <Label for="Fullname">Fullname: </Label>
                    <Input
                        id="Fullname"
                        placeholder="Input Fullname"
                        type="text"
                        name="Fullname"
                        value={Fullname}
                        onChange={(event) => {
                            SetFullname(event.target.value);
                        }}
                    />
                </FormGroup>


                {/* Department */}
                <FormGroup>
                    <Label for="Department">Select a Department: </Label>
                    <Input
                        id="Department"
                        name="Department"
                        type="select"
                        value={Department}
                        onChange={(event) => {
                            SetDepartment(event.target.value);
                        }}
                    >
                        {departmentItem}
                    </Input>
                </FormGroup>


                {/* Postion */}
                <FormGroup>
                    <Label for="Postion">Select a Postion: </Label>
                    <Input
                        id="Postion"
                        name="Postion"
                        type="select"
                        value={Postion}
                        onChange={(event) => {
                            SetPostion(event.target.value);
                        }}
                    >
                        {positionItem}
                    </Input>
                </FormGroup>
            </Form>
            {/* Nút xử lý */}
            <Button color="primary" onClick={handleUpdate}>
                Update
            </Button>
            <Button color="danger" onClick={handleReset}>
                Reset
            </Button>
        </Container>
    );
}


export default UpdateForm;


