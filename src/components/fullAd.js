import React from 'react';


//Ant_Design
import { Rate } from 'antd';
import { Card } from 'antd';

//COMPONENTS



const fullAd = () =>{
    return(
        <div className = "fullAd_wrapper">
            <div className = "fullAdCard_wrapper">
                <div className = "fullAd_card">
                    <Card
                        style={{ width: 300 }}
                        cover={<img alt="example" src="./images/Sunny Cruiser Bicycle 001.jpg" />}
                    ></Card>
                </div>
                <div className = "fullAd_data">
                    <h2>Sunny Cruiser Bicycle</h2>
                    <p>Location: Sukedhara</p>
                    <div><Rate disabled defaultValue={4} /></div>
                    <h1>NRs 1050</h1>
                    <p>Phone: 9843000000</p>
                </div>
            </div>
            <div className = "fullAd_description">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default fullAd;