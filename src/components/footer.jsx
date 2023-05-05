
import { BsTwitter } from 'react-icons/bs';
import {FiMail} from 'react-icons/fi';
export default function Footer() {

    function Twiiter() {
        window.open("https://twitter.com/DeButler_","_blank");
    }


    return (
        <div className='footer'>
            <div>Contact</div>
                <div className='icon' onClick={()=> Twiiter()}><BsTwitter color='#00acee' size={20}/></div>
                <div className='icon' onClick={() => window.open("Mailto:debutler2023@gmail.com")}><FiMail  size={20}/></div>
        </div>
    )
}