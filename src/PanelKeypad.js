import './PanelKeypad.css'


function PanelKeypad({addCharacter, clear, evaluate})
{
    return (
        <div className='PanelKeypad'>
            <button className="item item1" onClick={() => addCharacter("7")}>7</button>
            <button className="item item2" onClick={() => addCharacter("8")}>8</button>
            <button className="item item3" onClick={() => addCharacter("9")}>9</button>
            <button className="item item4" onClick={() => addCharacter(" / ")}>/</button>
            <button className="item item5" onClick={() => addCharacter(" % ")}>%</button>
            <button className="item item6" onClick={() => addCharacter("4")}>4</button>
            <button className="item item7" onClick={() => addCharacter("5")}>5</button>
            <button className="item item8" onClick={() => addCharacter("6")}>6</button>
            <button className="item item9" onClick={() => addCharacter(" * ")}>*</button>
            <button className="item item10" onClick={() => clear()}>C</button>
            <button className="item item11" onClick={() => addCharacter("1")}>1</button>
            <button className="item item12" onClick={() => addCharacter("2")}>2</button>
            <button className="item item13" onClick={() => addCharacter("3")}>3</button>
            <button className="item item14" onClick={() => addCharacter(" - ")}>-</button>
            <button className="item item15" onClick={() => evaluate()}>=</button>
            <button className="item item16" onClick={() => addCharacter("0")}>0</button>
            <button className="item item17" onClick={() => addCharacter(".")}>.</button>
            <button className="item item18" onClick={() => addCharacter(" + ")}>+</button>
            <button className="item item19" onClick={() => addCharacter("(")}>(</button>
            <button className="item item20" onClick={() => addCharacter(")")}>)</button>
        </div>
    )
}


export default PanelKeypad;