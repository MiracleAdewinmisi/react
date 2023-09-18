import React, { useEffect, useState } from 'react'
import axios from 'axios'




const Async = () => {
    const endpoint = "https://api.github.com/users"
    const [data, setData] = useState([])

    let url = "http://localhost:5000/user/Register"


    const fetchData = () => {
        axios.post ((url), {firstName:"Nora", lastName:"Oluwalonimi"})
    }

    useEffect(() => {
        axios.get(endpoint).then((response) => {
            console.log(response.data);
            setData(response.data)
        })

    }, [])
    return (
        <div className='styles.body'>
            <button onClick={fetchData} className='btn btn-success'>Fetch data</button>

            <div className="row">

                {data.map((item) => (
                    <div className="col-3 ms-3 mt-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={item.avatar_url} className="card-img-top" alt="Avatar img" />
                            <div className="card-body">
                                <h5 className="card-title">{item.login}</h5>
                                <p className="card-text">{item.id}</p>
                                <p className="card-text">{item.type}</p>

                            </div>

                        </div>
                    </div>


                ))}
            </div>




        </div>

    )
}

export default Async