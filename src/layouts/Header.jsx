import { Link } from 'react-router-dom';
import './layout.scss'
function HeaderLayout() {

    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-md">
                    <a className="navbar-brand text-warning fs-1 fw-bold" href="#"><i className="fa-solid fa-shield-cat"></i> GA Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-supported-content" aria-controls="navbar-supported-content"
                        aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-supported-content">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/home"}>Trang chủ</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Danh mục sản phẩm
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Điện thoại</a></li>
                                    <li><a className="dropdown-item" href="#">Laptop</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Đồng hồ</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Liên hệ</a>
                            </li>
                        </ul>
                        <ul id="profile" className="navbar-nav me-4 mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-primary fs-5 btn" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <b id="profile-full-name"></b>
                                    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                        99+
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link id="btn-change-password" to={"/change-password"} className="dropdown-item btn btn-outline-warning">
                                            <i className="fa-solid fa-key me-2"></i>
                                            Đổi mật khẩu
                                        </Link>

                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link id="btn-logout" to={"/login"} className="dropdown-item btn btn-outline-danger">
                                            <i className="fa-solid fa-right-from-bracket me-2"></i>
                                            Đăng xuất
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <Link id="btn-login" to={"/login"} className="btn btn-outline-success me-4">
                            <i className="fa-solid fa-right-to-bracket me-2"></i>
                            Đăng nhập
                        </Link>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search" />
                            <button className="col-auto btn btn-outline-success" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                Tìm kiếm
                            </button>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item dropdown">
                                <button id="btn-language" className="nav-link dropdown-toggle btn text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tiếng Việt
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button type="button" className="dropdown-item">Tiếng Việt</button></li>
                                    <li><button type="button" className="dropdown-item">Tiếng Anh</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default HeaderLayout;