import { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { generateId } from "../../../utils/Helpers/generateId";
import { getNowDate } from "../../../utils/Helpers/getNowDate";
import { addAccountNewAPI, useGetListDataAPI } from "../../../api/AccountApi";
import { apiAccount, apiDepartment, apiPosition } from "../../../api/api";



function InputForm(props) {
    let [listDepartment, setListDepartment] = useGetListDataAPI(apiDepartment);
    // Khai báo State để quản lý danh sách Account trên hệ thống
    let [listPosition, setListPosition] = useGetListDataAPI(apiPosition);

    const [Email, SetEmail] = useState("");
    const [Username, SetUsername] = useState("");
    const [Fullname, SetFullname] = useState("");
    const [Department, SetDepartment] = useState("");
    const [Position, SetPosition] = useState("");

    // Hàm xử lý khi click vào nút Create
    const handleClick = () => {
        const accountNew = {
            email: Email,
            username: Username,
            fullname: Fullname,
            department: Number(Department),
            position: Number(Position)
        };

        console.log(accountNew)

        addAccountNewAPI(apiAccount, accountNew);


    };

    const handleReset = () => {
        // Set lại State các ô nhập liệu về ""
        SetEmail("");
        SetUsername("");
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




    return (
        <Container>
            <Form>
                {/* Email */}
                <FormGroup>
                    <Label for="Email">Email: </Label>
                    <Input
                        id="Email"
                        name="Email"
                        placeholder="Input Email"
                        type="email"
                        value={Email}
                        onChange={(event) => {
                            SetEmail(event.target.value);
                        }}

                    />
                </FormGroup>


                {/* Username */}
                <FormGroup>
                    <Label for="Username">Username: </Label>
                    <Input
                        id="Username"
                        name="Username"
                        placeholder="Input Username"
                        type="text"
                        value={Username}
                        onChange={(event) => {
                            SetUsername(event.target.value);
                        }}
                    />
                </FormGroup>


                {/* Fullname */}
                <FormGroup>
                    <Label for="Fullname">Fullname: </Label>
                    <Input
                        id="Fullname"
                        name="Fullname"
                        placeholder="Input Fullname"
                        type="text"
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
                        id="Department" name="Department" type="select"
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
                        id="Postion" name="Postion" type="select"
                        value={Position}
                        onChange={(event) => {
                            SetPosition(event.target.value);
                        }} >

                        {positionItem}
                    </Input>
                </FormGroup>
            </Form>
            {/* Nút xử lý */}
            <Button color="primary" onClick={handleClick}>Create</Button>
            <Button color="danger" onClick={handleReset}>Reset</Button>
        </Container>
    );
}


export default InputForm;