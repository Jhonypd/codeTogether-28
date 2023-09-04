import { useNavigate } from 'react-router-dom'
import './layout/css/styles.css'
import { addNewsletter } from './bd'

function Form({setIsFormSubmitted}) {
    const navigate = useNavigate()
    
    const handleFocusOut = (event) => {
        let emailInput = event.target
        let errorSpan = document.getElementById('error')
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

        if (emailInput.value.length === 0) {
            errorSpan.innerHTML = 'Empty email field!'
            emailInput.classList.add('invalid')
        } else if (!emailPattern.test(emailInput.value)) {
            errorSpan.innerHTML = 'Valid email required!'
            emailInput.classList.add('invalid')
        } else {
            errorSpan.innerHTML = ''
            emailInput.classList.remove('invalid')
        }
    }

    const handleSubmit = (event) => {
        let emailInput = document.getElementById('email')
        let errorSpan = document.getElementById('error')
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

        if (emailInput.value.length === 0) {
            errorSpan.innerHTML = 'Empty email field!'
            emailInput.classList.add('invalid')
            event.preventDefault()
        } else {
            errorSpan.innerHTML = ''
            emailInput.classList.remove('invalid')

            if (emailPattern.test(emailInput.value)) {
                addNewsletter(emailInput.value, emailInput.value)
                localStorage.setItem('formSubmitted', 'true')
                setIsFormSubmitted(true)
                navigate('/success')
            }
        }
    }

    return (
        <form method='post' className='form' id='form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email address</label><span id='error'></span>
            </div>
            <input type='text' id='email' name='email' placeholder='email@company.com' onBlur={handleFocusOut} onInput={handleFocusOut} />
            <input type='submit' value={'Subscribe to monthly newsletter'} id='enviar' />
        </form>
    )
}

export default Form
