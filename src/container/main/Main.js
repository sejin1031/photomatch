import React, { Component } from 'react'
import Photo from '../../container/photo/Photo'
import { Link } from "react-router-dom";


import './Main.scss';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            round : 8,
            cur_photos: ['하영1','규리1'],
            photos : ['하영1','규리1','지선1','채영1','나경1','서연1','지헌1','지원1'],
            win:[],
            final: '',
            cur_index:1,
        };
        this.clickPhoto = this.clickPhoto.bind();
        this.changeRound = this.changeRound.bind();
    }
    changeRound=(e)=>{
        var arr = JSON.parse(JSON.stringify(this.state.win));
        console.log(arr);
        var im1 = arr[0];
        var im2 = arr[1];
        this.setState({round:e,cur_index:1,
                        photos:arr,
                        cur_photos:[im1,im2],
                        win:[],
                    })
    }
    clickPhoto=(e)=>{
        if(this.state.round === 2){
            this.setState({final:e,round:1});
        }
        else if(this.state.cur_index+1 === this.state.round){
            console.log(Array.isArray(this.state.win));
            this.setState({win:this.state.win.push(e)});
            this.changeRound(this.state.round/2)
        }
        else{
            var arr = JSON.parse(JSON.stringify(this.state.win))
            arr.push(e);
            this.setState({cur_photos:[this.state.photos[this.state.cur_index+1],
                                    this.state.photos[this.state.cur_index+2]],
                        cur_index: this.state.cur_index+2,
                        win:arr}
                        );
            }
    }

    render() {
        return (
            <div>
                {this.state.round !== 1 && <div>
                    <span id="round">{this.state.round} ROUND</span>
                    {this.state.cur_photos.map((path) =><div onClick={()=>this.clickPhoto(path)}>
                        <Photo 
                        path={path} final={false}/></div>)}

                    </div>
                }
                {
                    this.state.round === 1 &&
                    <div>
                        <div id="finalment">우승은 {this.state.final.slice(0,2)}</div>
                        <div id="final"><Photo path={this.state.final} final={true} /></div>
                        <div><Link to="/">다시하기!</Link></div>
                    </div>
                }
            </div>
        )
    }
}
