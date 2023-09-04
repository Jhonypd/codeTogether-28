import { Link } from 'react-router-dom'
import iconSccess from './layout/img/icon-success.svg'

function SucessPage() {
    return (
        <div className='successPage-container'>
            <Link to={'/items'} className='cost btn'>
                <input type='submit' value={'see offers'} />
            </Link>
            <div className='successPage'>
                <span><img src={iconSccess} alt='icon-success' /></span>
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <strong>ash@loremcompany.com</strong>.
                    Please open it and click the button inside to confirm your subscription.</p>
                <Link to={'/'} className='btn' >
                    <input type='submit' value={'Dismiss message'} />
                </Link>
            </div>
        </div>
    )
}

export default SucessPage