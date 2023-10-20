import { type FC, Suspense } from 'react'
import { ConfigProvider, theme } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import "@/main.scss";

import Create from './create.tsx';
import Table from './table.tsx';
const THEME_CONFIG = {
    token: {
        colorBgContainer: "#F4F5F8",
    },
    components: {
        Menu: {
            activeBarBorderWidth: 0,
            itemSelectedColor: "#fff",
            horizontalItemSelectedBg: "#033681",
            horizontalItemHoverBg: "#033681",
            horizontalItemHoverColor: "#fff",
        },
    },
};

const list = () => {

    const heightAuto = true;
    return (
        <ConfigProvider theme={THEME_CONFIG}>
            <div className="wrapper">
                <div className="header">
                    <Link to="/">
                        <img alt="logo" src="/logoEn.png" />
                    </Link>
                </div>
                <ConfigProvider >
                    <div className="relative">
                        <div className="menu_nav">
                            <div className="flex bg-[#cf1627] justify-between items-center px-[15px] h-full">
                                <hr className="mt-[25px]" />

                            </div>
                        </div>
                        <div
                            className={`main_content ${heightAuto ? "main_content-auto" : ""
                                } `}
                        >
                            <div
                                className="h-full"
                                style={{

                                    padding: 16,
                                }}
                            >
                                {/* Main */}
                                <div className="d-flex flex-column full-height">

                                    <Table />
                                </div>

                                {/* Main */}
                            </div>
                            <div className="flex-grow-0">
                                <div className="footer1">
                                    <div className="font-bold py-[20px] text-[20px]">
                                        Viện Toán ứng dụng và Tin học - Đại học Bách Khoa Hà Nội
                                    </div>
                                    <div className="mb-[5px]">
                                        Địa chỉ: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội
                                    </div>
                                    <div>Điện thoại: 024 3869 4242</div>
                                </div>
                                <div className="footer2">
                                    <div>Copyright © 2023 SAMI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ConfigProvider>
            </div>

        </ConfigProvider>

    )
}

export default list