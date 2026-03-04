import React from "react";
import belarusFlag from "../../assets/flag.png";
import "./PhoneInput.scss";

interface PhoneInputProps {
    value?: string;
    onChange?: (value: string) => void;
    errorMessage?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value = "+375", onChange, errorMessage = '' }) => {
    const COUNTRY_CODE = "+375";

    const phoneValue = value;

    const formatNumber = (digits: string) => {
        const cleaned = digits.replace(/\D/g, "").slice(0, 9);
        const part1 = cleaned.slice(0, 2);
        const part2 = cleaned.slice(2, 5);
        const part3 = cleaned.slice(5, 9);
        return [part1, part2, part3].filter(Boolean).join(" ");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value;

        if (!input.startsWith(COUNTRY_CODE)) input = COUNTRY_CODE;

        const digits = input.replace(COUNTRY_CODE, "");
        const formatted = formatNumber(digits);

        const finalValue = `${COUNTRY_CODE} ${formatted}`.trim();
        onChange?.(finalValue);
    };

    return (
        <>
            <div className="phone-input">
                <div className="phone-input__flag">
                    <img src={belarusFlag} alt="Belarus flag" />
                </div>

                <input
                    type="tel"
                    value={phoneValue}
                    onChange={handleChange}
                    className="phone-input__field"
                />
            </div>
            {errorMessage && (
                <span className="error-text">{errorMessage}</span>
            )}
        </>
    );
};

export default PhoneInput;