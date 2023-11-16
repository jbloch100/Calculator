import './PanelDisplay.css'


function PanelDisplay({expression})
{
    return (
        <div className='PanelDisplay'>
            <h1>{expression}</h1>
        </div>
    );
}

export default PanelDisplay;