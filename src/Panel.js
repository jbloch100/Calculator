import { useState } from 'react'
import './Panel.css'
import PanelDisplay from './PanelDisplay'
import PanelKeypad from './PanelKeypad'
const math = require('mathjs');

function Panel()
{
    const [expression, setExpression] = useState("");

    function addCharacter(c)
    {
        setExpression(expression + c);
    }

    function clear()
    {
        setExpression("");
    }

    function evaluate()
    {
        try{
            const code = math.compile(expression);
            const result = code.evaluate();
            console.log(result);
            setExpression(result);
        }catch{
            setExpression("Error");
        }
        
    }
    
    return (
        <div className="Panel">
            <PanelDisplay expression = {expression}/>
            <PanelKeypad addCharacter={addCharacter} clear={clear} evaluate={evaluate} />
        </div>
    );
}

export default Panel;