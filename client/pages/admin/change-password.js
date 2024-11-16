import withAuth from "@/component/dashboard/PrivateRoutes/ProtectRoutes";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import DashboardLayout from "./dashboard-layout";

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleChangePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/user/changepassword", {
                currentPassword,
                newPassword,
                confirmPassword,
            },{ withCredentials: true});

            setSuccessMessage(response.data.message);
            setErrorMessage("");
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            router.push('/admin')

        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Something went wrong.");
            setSuccessMessage("");
        }
    };

    return (
        <>
        <DashboardLayout>
            <section className="">
                <div className="container">
                    <div className="df fjc fjic mt-5">
                        <div className="box">
                            <h2 className="tac pdt20 fs20 fwb">Change Password</h2>
                            <form onSubmit={handleChangePassword}>
                                <div className="mb20 pos-r">
                                    <label htmlFor="currentPassword">Current Password</label>
                                    <input
                                        className="bxint"
                                        type={showPassword ? "text" : "password"}
                                        id="currentPassword"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb20 pos-r">
                                    <label htmlFor="newPassword">New Password</label>
                                    <input
                                        className="bxint"
                                        type={showPassword ? "text" : "password"}
                                        id="newPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb20 pos-r">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        className="bxint"
                                        type={showPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <div className="pos-a eye" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </div>
                                </div>

                                {successMessage && <p className="green">{successMessage}</p>}
                                {errorMessage && <p className="red">{errorMessage}</p>}
                                <button type="submit" className="butt">Update Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </DashboardLayout>
            <style jsx>{`
                .eye {
                    right: 5px;
                    bottom: 8px;
                    cursor: pointer;
                }
                .box {
                    background: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                }
                .red {
                    color: #ff0000;
                }
                .green {
                    color: #008000;
                }
                .bxint {
                    width: 100%;
                    padding: 8px;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .butt {
                      background:#d0ab17;
                    padding: 10px;
                    border: none;
                    color: #fff;
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    width: 100%;
                }
            `}</style>
        </>
    );
};

export default withAuth(ChangePassword);
