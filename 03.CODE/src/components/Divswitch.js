import React , {useState} from "react";






const DivSwitch = ()=>{
    // s = Sale , p = Purchase
    const [CurrentDivPosition, setPosition] = useState(5);

    const selectedStyle = 
    {
        // left = 5 , 115
        background : '#C1AC95',
        borderRadius: '10px',
        height : '30px',
        width : '100px',
        position : 'absolute',
        zIndex : '-1',
        left : CurrentDivPosition+'px'
    }
    console.log(selectedStyle)
    
    const onDivSelect = ()=>{
        
    }
    

    return(
        <div id="switch-container">
            <div id="sale" onClick={onDivSelect}>尋找賣方</div>
            <div id="purchase" onClick={onDivSelect}>尋找買方</div>
            <div id="selected-background" style={selectedStyle} />
        </div>
    )
}

export default DivSwitch;
