import Form from '../Form'
import iconList from './img/icon-list.svg'
import image from './img/illustration-sign-up-mobile.svg'
import './css/styles.css'


function Box({setIsFormSubmitted}) {
    return (
        <div className="box">
            <div className='right'>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className='list'>
                    <p>
                        <span><img src={iconList} alt='icon-list'/></span>Product discovery and building what matters
                    </p>
                    <p>
                        <span><img src={iconList} alt='icon-list' /></span>Measuring to ensure updates are a success
                    </p>
                    <p>
                        <span><img src={iconList} alt='icon-list' /></span>And much more!
                    </p>
                </div>
                <Form setIsFormSubmitted={setIsFormSubmitted} />
            </div>
            <div className='left'>
                <img src={image} alt='illustration-sign-up-mobile' />
            </div>
        </div>
    )
}

export default Box


