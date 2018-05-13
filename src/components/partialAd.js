import React from 'react';
import {Link} from 'react-router-dom';

//Ant-Design
import { Card } from 'antd';
import { Rate } from 'antd';

//COMPONENTS




const partialAd = () =>{
    const style = {
        textAlign: 'center'
    }


    return(
        <Link to = "/fullAd"
            style = {style}
        >
            <div>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="./images/Sunny Cruiser Bicycle 001.jpg" />}
                >
                    <h3>Sunny Cruiser Bicycle</h3>
                    <h4>Sukedhara</h4>
                    <p>Rs. 1000</p>
                    <Rate disabled defaultValue={4} />
                </Card>
            </div>
        </Link>
    )
}

export default partialAd;