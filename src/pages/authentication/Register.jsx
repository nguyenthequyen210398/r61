import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <div className="wrapper">
                <div className="text-center text-success fs-1 brand d-flex flex-column">
                    <i className="fa-solid fa-shield-cat me-2"></i>GA Shop
                </div>
                <div className="p-3 mt-3">
                    <div className="d-flex">
                        <div className="form-field d-flex align-items-center me-2">
                            <i className="fa-solid fa-people-group"></i>
                            <input type="text" name="last-name" id="last-name" placeholder="Họ" />
                        </div>
                        <div className="form-field d-flex align-items-center ms-2">
                            <i className="fa-solid fa-signature"></i>
                            <input type="text" name="first-name" id="first-name" placeholder="Tên" />
                        </div>
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <i className="ms-2 fa-solid fa-user"></i>
                        <input type="text" name="username" id="username" placeholder="Tài khoản" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <i className="ms-2 fa-solid fa-lock"></i>
                        <input type="password" name="password" id="password" placeholder="Mật khẩu" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <i className="ms-2 fa-solid fa-lock"></i>
                        <input type="password" name="re-password" id="re-password" placeholder="Nhập lại mật khẩu" />
                    </div>
                    <div className="mb-3">
                        <label for="role" className="form-label">Vai trò</label>
                        <select className="form-select" name="role" id="role">
                            <option>ADMIN</option>
                            <option>MANAGER</option>
                            <option>EMPLOYEE</option>
                        </select>
                    </div>
                    <button id="btn-register" type="button" className="btn text-light mt-3">Đăng ký</button>
                </div>
                <div className="text-center fs-6 mt-3">

                    <Link className="fs-6" to={"/login"} >Đã có tài khoản? Đăng nhập</Link>
                </div>
            </div>
            <div id="toast-container"></div>
        </>
    )
}

export default Register;