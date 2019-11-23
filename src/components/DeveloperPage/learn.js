import React from "react"
import { learnMoreData, learnHeadingData } from "./Data"
import AOS from 'aos'
import 'aos/dist/aos.css'


class Learn extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init()
    }
    render(){
        return(
            <div className="container section">
                <div className="learn">
                {learnHeadingData.map(headingData => {
                    const {
                        heading,
                        discription,
                        img,
                    } = headingData;
                    return(
                            <div className="learn-section">
                                <div className="learn-text">
                                    <h2>{heading}</h2>
                                    <p>{discription}</p>
                                </div>
                                <div className="learn-img">
                                    <img src={img} alt="learn" data-aos="fade-up-left"/>
                                </div>
                            </div>
                        )
                    })}
                    <div className="learn-list">
                        {learnMoreData.map(learnList => {
                            const { 
                                id,
                                heading,
                                link,
                                imgSrc,
                            } = learnList;
                            return(
                            <div className="list" key={id}>
                                <div className="list-text">
                                    <h4 data-aos="slide-up">{heading}</h4>
                                </div>
                                <div className="list-icon">
                                    <a href={link} target="_blank"><img src= {imgSrc} alt="learn" data-aos="fade-up-left" /></a>
                                </div>
                            </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Learn