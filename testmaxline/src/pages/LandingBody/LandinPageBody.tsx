import './LandinPageBody.scss';
import olympusImg from '../../assets/olympus.png';
import effectImg from '../../assets/effect1.png';
import logoImg from '../../assets/logo.png';
import goldImg from '../../assets/Gold2.png';
import goldSecondImg from '../../assets/Gold.png';
import freeSpinsImg from '../../assets/freespin.png';
import effectColor from '../../assets/effectColor.png';
import effectColorSecond from '../../assets/effectColorSecond.png';
export const LandingPageBody = () => {
    return (
        <div className="containerLanding">
            <div className="containerBodyLanding"></div>

            <img src={olympusImg} alt="Olympus" loading="lazy" className="olympus" />
            <img src={effectColor} alt="EffectColor" loading="lazy" className="effectColor" />
            <img src={effectImg} alt="Effect" loading="lazy" className="effect" />
            <img src={logoImg} alt="Logo" loading="lazy" className="logo" />
            <img src={effectColorSecond} alt="EffectColorSecond" loading="lazy" className="effectColorSecond" />
            <img src={goldImg} alt="Gold" loading="lazy" className="gold" />
            <img src={goldSecondImg} alt="Gold Second" loading="lazy" className="goldSecond" />
            <img src={freeSpinsImg} alt="Free Spins" loading="lazy" className="freeSpins" />
        </div>
    );
};