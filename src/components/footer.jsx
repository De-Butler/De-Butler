
import { BsTwitter } from 'react-icons/bs';
import {FiMail} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {RiMediumLine} from 'react-icons/ri';
export default function Footer() {

    function Twiiter() {
        window.open("https://twitter.com/DeButler_","_blank");
    }

    function Instagram() {
        window.open("https://www.instagram.com/de__butler/","_blank");
    }

    function Medium() {
        window.open("https://medium.com/@debutler/","_blank");
    }

    return (
        <div className='footer'>
            <div className='Contact-Box'>Contact
                <div className='icon' onClick={()=> Twiiter()}><BsTwitter size={28}/></div>
                <div className='icon' onClick={()=> Instagram()}><AiOutlineInstagram  size={30}/></div>
                <div className='icon' onClick={()=> Medium()}><RiMediumLine  size={30}/></div>
                <div className='icon' onClick={() => window.open("Mailto:debutler2023@gmail.com")}><FiMail  size={28}/></div>
            </div>
        </div>
    )
}