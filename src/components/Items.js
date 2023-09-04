import { useState } from 'react'
import { FaGasPump } from 'react-icons/fa'
import { IoLogoModelS, IoIosSpeedometer, IoIosColorPalette } from 'react-icons/io'
import { GiCarDoor, GiGearStickPattern } from 'react-icons/gi'
import veiculos from './Carros.js'
import FormSearch from './FormSearch'

function Items() {

    const [search, setSearch] = useState('')

    const handleSearch = (value) => {
        setSearch(value)
    }

    //const filteredVeiculos = veiculos.filter((veiculo) => veiculo.startsWith(search))
    const filteredVeiculos = veiculos.filter((veiculo) => veiculo.modelo.toLowerCase().includes(search.toLowerCase())
  )

    return (
        <div className='card-container'>
            <div className='search'>
                <FormSearch onSearch={handleSearch} />
            </div>
            {filteredVeiculos.map((veiculo) => (

                <div className="card" key={veiculo.id} >
                    <div className='item'>
                        <div className='title'>
                            <h2>{veiculo.modelo}</h2><p>id:<span>{veiculo.id}</span></p>
                        </div>
                        <span> <img src={veiculo.imagem} alt='car' /> </span>
                    </div>
                    <div className="info">
                        <div className='tag'>
                            <p><span>M</span>{veiculo.marca}</p><p><span>Y</span>{veiculo.ano}</p>
                        </div>
                        <div className='tag'>
                            <p><span><IoLogoModelS /></span>{veiculo.modelo}</p><p><span><IoIosColorPalette /></span>{veiculo.modelo}</p>
                        </div>
                        <div className='tag'>
                            <p><span><GiCarDoor /></span>{veiculo.portas}</p><p><span><IoIosSpeedometer /></span>{veiculo.km}</p>
                        </div>
                        <div className='tag'>
                            <p><span><FaGasPump /></span>{veiculo.combustivel}</p>
                        </div>
                        <div className='tag'>
                            <p><span><GiGearStickPattern /></span>{veiculo.cambio}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default Items

