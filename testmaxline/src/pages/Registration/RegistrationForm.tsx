import './RegistrationForm.scss';
import PhoneInput from "./InputPhone.tsx";
import PasswordInput from "./PassworInput.tsx";
import CheckBox from "./CheckBox.tsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerPhone } from "../../redux/registrationSlice";
import type { RootState } from "../../redux/store";

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const registeredPhones = useSelector((state: RootState) => state.registration.registeredPhones);

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [agree21, setAgree21] = useState(false);
    const [agreeBonus, setAgreeBonus] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!phone || !password) {
            setError("Заполните все поля");
            return;
        }

        const digitsOnly = phone.replace(/\D/g, "");
        if (digitsOnly.length < 12) {
            setPhoneError("Введите корректный номер телефона");
            return;
        }

        if(password.length < 6){
            setPasswordError("Пароль должен содержать минимум 6 символов")
            return
        }

        if (!agree21 || !agreeBonus) {
            setError("Необходимо согласиться с условиями");
            return;
        }

        if (registeredPhones.includes(phone)) {
            setError("Этот номер уже зарегистрирован");
            return;
        }

        setSuccess("Отправка...");
        await new Promise(res => setTimeout(res, 1000));

        dispatch(registerPhone(phone));
        setSuccess("Регистрация прошла успешно!");
        setPhone("");
        setPassword("");
        setAgree21(false);
        setAgreeBonus(false);
        setPhoneError("")
        setPasswordError("")
    };

    return (
        <div className="promo__right">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form__title">Регистрация</h2>

                <PhoneInput value={phone} onChange={setPhone} errorMessage={phoneError} />
                <PasswordInput value={password} onChange={setPassword} errorMessage={passwordError} />

                <div className='form__container'>
                    <div className='form__checkboxContainer'>
                        <CheckBox checked={agree21} onChange={setAgree21} />
                        <span className="form__text">
              Мне больше 21 года. <br/>
              Я согласен и принимаю{" "}
                            <a href="#" rel="noopener noreferrer">«Правила приема ставок»</a> и{" "}
                            <a href="#" rel="noopener noreferrer">«Политику конфиденциальности»</a>
            </span>
                    </div>
                    <div className='form__checkboxContainer'>
                        <CheckBox checked={agreeBonus} onChange={setAgreeBonus} />
                        <span className='form__text'>
              Я принимаю участие и согласен с <a href="#" rel="noopener noreferrer">условиями бонуса</a>
            </span>
                    </div>
                </div>

                {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
                {success && <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>}

                <button className="form__button" type="submit">
                    РЕГИСТРАЦИЯ
                </button>
            </form>
        </div>
    );
};