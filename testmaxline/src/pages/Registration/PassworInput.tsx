import React, { useState } from "react";
import eye from "../../assets/openEye.png";
import eyeOff from "../../assets/closeEye.png";
import "./PasswordInput.scss";

interface PasswordInputProps {
    value?: string;
    onChange?: (value: string) => void;
    errorMessage?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value = "", onChange, errorMessage = "" }) => {
    const [show, setShow] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onChange?.(val);
    };

    return (
        <div className="password-input-wrapper">
            <label>Пароль</label>
            <div className="input-wrapper">
                <input
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={handleChange}
                    placeholder="Введите пароль"
                />
                <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShow(!show)}
                >
                    <img
                        src={show ? eye : eyeOff}
                        alt="toggle password"
                    />
                </button>
            </div>
            {errorMessage && <span className="error-text">{errorMessage}</span>}
        </div>
    );
};

export default PasswordInput;