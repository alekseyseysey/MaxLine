import React from "react";
import "./Checkbox.scss";

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({ label = "", checked = false, onChange }) => {

    const handleChange = () => {
        onChange?.(!checked);
    };

    return (
        <label className="custom-checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <span className="checkmark"></span>
            {label}
        </label>
    );
};

export default CustomCheckbox;