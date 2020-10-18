import React,{Component} from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import html from '../img/html.png'
import css from '../img/css.png'
import Css from '../Home/Home.css'
import sql from '../img/sql.png'
import react from '../img/react.png'
import slideLog from '../img/slide-log.png'

export default class Home extends Component{

  constructor(props){
    super();
    this.styles = props.style;
  }
  render(){
        return(
                <Carousel>
                <Carousel.Item class="carousel-item active"  data-interval="0.01">         
                        <Carousel.Caption class={this.styles} style={{top:50 + '%'}}>
                                 <div class="grid-container">
                              <div>
                                <img class="slider-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png"></img>
                              </div>
                              <div>
                                <img class="slider-image" src={html}></img>
                              </div>
                              <div>
                                <img class="slider-image" src="https://image.flaticon.com/icons/png/512/136/136527.png"></img>
                              </div>
                              <div>
                                <img class="slider-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"></img>
                              </div>
                              <div>
                                <img class="slider-image" src={sql}></img>
                              </div>
                              <div>
                                <img class="slider-image" src={react}></img>
                              </div>
                              </div>        
                                 <div class="text">      
                                <h2>Best tests from <br></br> professional programmers</h2>
                                <h4>Over 100 different tests to check your skills</h4>
                                <h4>Start your trip</h4>
                                <a class="button-text"style={{color:'#1867eb'}}><button type="button" class="slide-button">Start your trip</button></a>
                              </div>    
                        </Carousel.Caption>
                </Carousel.Item >
                    <Carousel.Item class="carousel-item"  data-interval="0.5">
                         <Carousel.Caption class={this.styles} style={{top:50 + '%'}}>
                           <img class="slide-logo" src={slideLog}></img>
                         <div class="text">      
                                <h2>You can learn anything</h2>
                                <h4>Build a deep,<br></br>solid understanding in the anything else<br></br> programming language</h4>
                                <button type="button" class="slide-button"><a class="button-text"style={{color:'#1867eb'}}></a>Start your trip</button> 
                        </div> 
                         </Carousel.Caption>
                    </Carousel.Item>
        </Carousel>
        )
        }
      }
