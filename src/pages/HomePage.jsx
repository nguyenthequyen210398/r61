import HeaderLayout from "../layouts/Header";

import FooterLayout from "../layouts/Footer";
import { useState } from "react";
import Content from "../layouts/Content";

function HomePage() {
    const [number, setNumber] = useState("");

    return (
        <>
            {/* <HeaderLayout />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="text-center fs-1">
                        <p className="text-bg-warning"><b>HOME PAGE</b></p>
                        <b className="text-danger">Chào bạn, <span id="full-name"></span></b>
                    </div>
                </div>
            </div>

            <FooterLayout /> */}
            <input type="number" onChange={(e) => { setNumber(e.target.value) }} />
            <Content data={number} />

        </>
    )


}

export default HomePage;