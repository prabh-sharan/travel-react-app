import React from 'react'
import SearchStyles from "./SearchStyles.css"
import Gold from "../../assets/gold.png"

function search() {
  return (
    <div className="search">
        <div className="container">
            <div className="left">
                <h1>Luxury included vacations</h1>
                <p>Aenean at laoreet massa. Morbi commodo dui vestibulum ligula pretium egestas vitae at ipsum. Praesent posuere dolor eget ex gravida consectetur. Praesent laoreet semper congue. Quisque pulvinar, purus eu vestibulum facilisis, metus dui semper mi, id rhoncus purus turpis sed nulla. Fusce id leo fringilla, commodo erat a, scelerisque tellus. Aliquam hendrerit vestibulum vulputate. Vivamus pellentesque ante id interdum dictum. Nulla eget leo ullamcorper, rhoncus tortor eu, iaculis tellus. Maecenas eleifend massa vel magna venenatis posuere. Nulla dapibus aliquet arcu eu pretium. Morbi varius risus eu justo vehicula eleifend. Suspendisse at pharetra neque. Nulla facilisi.</p>

                <div className="left-more-info">
                    <div className="box">
                        <div>
                            <img src={Gold} alt="/" style={{marginRight:"1em"}} />
                        </div>

                        <div>
                            <h3>World's Leading</h3>
                            <p>All inclusive company for 5 years in a row</p>
                        </div>
                    </div>

                    <div className="box">
                        <div>
                            <h3>Luxurious Stays</h3>
                            <p>Check out our new offers</p>
                            <button>View Packages</button>
                        </div>
                    </div>
                </div>
        
            </div>

            <div className="right">

                <div className="promo">
                    <h4 className="save">Get an additional 10% discount</h4>
                    <p className="timer">12 hours left!</p>
                    <p className="offers">View all current offers</p>
                </div>

                <form>
                    <div className="input-wrap">
                        <label>Destinations</label>
                        <select>
                            <option value="1">Maldives</option>
                            <option value="2">Seychelles</option>
                            <option value="3">Sri Lanka</option>
                            <option value="4">Barbados</option>
                            <option value="5">Goa</option>
                        </select>
                    </div>

                    <div className="date">

                        <div className="input-wrap">
                            <label>Check-In</label>
                            <input type="date" />
                        </div>

                        <div className="input-wrap">
                            <label>Check-Out</label>
                            <input type="date" />
                        </div>
                        <button>Check Availability</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default search