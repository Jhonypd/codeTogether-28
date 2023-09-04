import { useRef, useState } from 'react'
import { CgSearch, CgArrowLeft } from 'react-icons/cg'
import { Link } from 'react-router-dom'


function FormSearch() {

    let searchInput = useRef(null)

    const [search, setSearch] = useState('')

    return (

        <form id='searchCar'>
            <div className='return'><Link to={'/'}><CgArrowLeft/></Link></div>
            <label htmlFor='search'><CgSearch/> </label>
            <input type='text' 
            onChange={(e) => setSearch(e.target.value)} 
            id='search' 
            placeholder='search' 
            ref={searchInput} 
            value={search}/>
            
        </form>
    )
}

export default FormSearch