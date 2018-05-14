import React, { Component } from 'react';
import Slider from "react-slick";


//Ant_Design
import { Rate } from 'antd';
import { Card } from 'antd';

//COMPONENTS



export default class Slider_category extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return(
            <div className = "sliderC_wrapper">
                <h2>Automobiles</h2>  
                <div className="slider-btns">
                    <button className="slider-btn btn-l" onClick={this.previous}>
                        &lt;
                    </button>
                    <button className="slider-btn btn-r" onClick={this.next}>
                        &gt;
                    </button>
                </div>
                <div className = "sliderC_items">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="./images/Sunny Cruiser Bicycle 001.jpg" />}
                            >
                                <h3>Bicycle</h3>
                            </Card>
                        </div>
                        <div>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="./images/Sunny Cruiser Bicycle 001.jpg" />}
                            >
                                <h3>Bike</h3>
                            </Card>
                        </div>
                        <div>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="./images/Sunny Cruiser Bicycle 001.jpg" />}
                            >
                                <h3>Bus</h3>
                            </Card>
                        </div>
                        <div>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="./images/Sunny Cruiser Bicycle 001.jpg" />}
                            >
                                <h3>Bolero</h3>
                            </Card>
                        </div>
                        <div>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="./images/Sunny Cruiser Bicycle 001.jpg" />}
                            >
                                <h3>mini-Van</h3>
                            </Card>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}