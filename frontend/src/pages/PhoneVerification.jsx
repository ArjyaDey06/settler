import { auth } from "../firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PhoneVerification() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const navigate = useNavigate();

    const sendOtp = async () => {
        try {
            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new RecaptchaVerifier(
                    auth,
                    "recaptcha-container",
                    {
                        size: "invisible",
                    }
                );
            }

            const confirmationResult = await signInWithPhoneNumber(
                auth,
                phone,
                window.recaptchaVerifier
            );

            setConfirmation(confirmationResult);
            alert("OTP sent successfully");
        } catch (error) {
            console.log("OTP Error:", error);
            alert(error.message);
        }
    };


    const verifyOtp = async () => {
        try {
            if (!confirmation) {
                alert("Request OTP first");
                return;
            }

            await confirmation.confirm(otp);
            alert("Phone verified successfully");
            navigate("/dashboard");
        } catch (error) {
            console.log("OTP Verify Error:", error);
            alert("Invalid OTP");
        }
    };

    return (
        <div className="flex flex-col items-center mt-20 space-y-4">
            <input
                placeholder="+91XXXXXXXXXX"
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2"
            />
            <button onClick={sendOtp} className="bg-black text-white px-4 py-2">
                Send OTP
            </button>

            <input
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                className="border p-2"
            />
            <button onClick={verifyOtp} className="bg-green-600 text-white px-4 py-2">
                Verify OTP
            </button>

            <div id="recaptcha-container"></div>
        </div>
    );
}

export default PhoneVerification;
