import React from 'react'

const Main = () => {
    return (
        <div className='container'>
            <h1 className='text-primary border text-center p-5'> Weather App</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter a city name..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Main