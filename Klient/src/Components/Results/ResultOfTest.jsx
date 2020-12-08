import React, { Component } from 'react'
import Api from '../API/CheckTestApi'
import style from '../Results/Result.css'
import jwt_decode from "jwt-decode";
export default class ResultOfTest extends React.Component {

  constructor(props) {
          super(props);
          this.styles = props.style;
          this.state = {
            score:0,
            text:"",
            text_style:""
          };
          let decoded=null;
          this.id=null;
         if(sessionStorage.getItem("accessToken")!==null){
          decoded = jwt_decode(sessionStorage.getItem("accessToken"));
         this.id =  decoded[
                 "sub"
               ]; 
         }
        }
                 
        redirectToRewiew(){
          window.location.assign("/rewiewTest");
        }
        Finished(){
          window.location.assign("/tests/"+sessionStorage.getItem("TestId"));
          localStorage.clear();
        }
        componentDidMount(){
          this.GetScoreOfTest();
        }
        GetScoreOfTest =async () => {
                let api = new Api();
                console.log(this.id); 
                var result =  await api.GetResultOfTest(this.id);
                if(result===undefined){
                  let list = new Array();
                  for(var i =localStorage.length-3 ;i>0;i--)
                  {
                    list.push(JSON.parse(localStorage.getItem("Number"+i)))
                  }
                 await api.SendToCheckTest(list);
                   result =  await api.GetResultOfTest(this.id);
                }
                console.log("Result",result.data);
                this.setState({score:result.data})
                if(result.data>70){
                  this.setState({text:"That's the good result"})
                  this.setState({text_style:"good"})
                }
                if(result.data>=40&&result.data<70){
                  this.setState({text:"You could be better"})
                  this.setState({text_style:"middle"})
                }
                if(result.data<40){
                  this.setState({text:"Don't worry! You could be better"})
                  this.setState({text_style:"bad"})
                }
              }

          
        render() {
          return (
            <div className={this.styles} >
              <h1>Your score</h1>
              <p class="score">{this.state.score}%</p>
              <p class={this.state.text_style}>{this.state.text}</p>
              <a type="button"class="btn btn-info" onClick={()=>this.redirectToRewiew()}>Review</a>
              <br></br>
              <br></br>
              <button class="btn btn-danger" onClick={()=>this.Finished()}
              >Finished</button>
            </div>
          );
        }
      }
