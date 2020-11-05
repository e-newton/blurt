import React, {Component} from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

class Canvas extends Component {
    render() {
        return (
            <div>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Text text = 'ASS' fontSize = {100}/>
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Canvas;
