import { BiCoin } from "react-icons/bi";
import {IconContext} from "react-icons";
import s from './page.module.scss';

const Nickname = () => {

 

    return (

        <div className={s.wrapper}>
            <h1 className={s.title}>User Name</h1>
                <div className={s.divWrapper}>
             
                    <BiCoin size={20} />
                
                    <p className={s.text}>17 741 steplycoin</p>
                </div>
            <button type="button" className={s.button}>Пройти анкету</button>
        </div>  

    );
};

export default Nickname;