import { Outlet, Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Layout } from "antd";
import HeaderLayout from '../layouts/Header';
import FooterLayout from '../layouts/Footer';



export default function Root() {


    return (
        <>
            <HeaderLayout />
            <div className='colum'>
                <div id="sidebar">
                    <h1>React Router Contacts</h1>
                    <div>
                        <form id="search-form" role="search">
                            <input
                                id="q"
                                aria-label="Search contacts"
                                placeholder="Search"
                                type="search"
                                name="q"
                            />
                            <div
                                id="search-spinner"
                                aria-hidden
                                hidden={true}
                            />
                            <div
                                className="sr-only"
                                aria-live="polite"
                            ></div>
                        </form>
                        <form method="post">
                            <button type="submit">New</button>
                        </form>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`/login`}>Login</Link>
                            </li>
                            <li>
                                <Link to={`/account`}>Account</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div id="detail">
                    {/* render children */}
                    <Outlet />
                </div>



            </div>

            <FooterLayout />


        </>

    );
}
