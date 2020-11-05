import React, {Component, useState, useEffect} from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import {TextObject} from "../../model/TextObject";

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {texts:[]}
        this.mouseHandlers = this.handleClick.bind(this);
        this.moveHandler = this.handleMove.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({texts:[...this.state.texts]})
            this.state.texts.forEach((text) => {
                text.follow()
            })
        }, 10)

    }
    componentDidUpdate() {


    }




    handleClick(e){
        console.log(e.evt.pageX)
        this.setState({texts:[...this.state.texts,new TextObject('🍆', e.evt.pageX, e.evt.pageY)]})
    }

    handleMove(e) {
        this.state.texts.forEach((text) => text.setTarget({x: e.evt.pageX, y: e.evt.pageY}));
    }


    fall(){
        this.state.texts.forEach((text) => text.fall());
    }


    render() {
        return (
            <div>

                    <Stage width={window.innerWidth} height={window.innerHeight} x = {5}
                           onClick={this.mouseHandlers}
                           onMouseMove = {this.moveHandler} >
                        <Layer>
                            {this.state.texts.map((text, index) => {
                                return <Text key={index} text = {text.text} fontSize={69} y = {text.y} x = {text.x} fill = {'#ffffff'}/>
                            })}
                        </Layer>
                    </Stage>

            </div>
        );
    }
}

export default Canvas;
