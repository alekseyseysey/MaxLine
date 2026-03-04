import {RegistrationForm} from "../Registration/RegistrationForm.tsx";
import {LandingPageBody} from "../LandingBody/LandinPageBody.tsx";
import './HomePage.scss'
export const HomePage = () => {
    return (
        <div>
            <LandingPageBody/>
            <RegistrationForm/>
        </div>
    )
}