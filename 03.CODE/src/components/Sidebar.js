import React ,{useState} from "react";
import './Sidebar.scss';
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
 

const sidebarTriggered =  {
    transform:'translate(500px)',
    animationName : 'pullout'
}
const sidebarNOTTriggered = {
    transform:'translate(0)',
    animationName : 'pushin'
}


const Sidebar = () => {

    const [SidebarState , setSidebarState] = useState("Init")
    const onTriggerChange = ()=>{
        setSidebarState(!SidebarState)
    }
    const dropdownWidth = {
        width:'170px'
    }
    const chekboxsize = {
        transform:'scale(1.5)'
    }
    


    return (
        <>
            <div style={SidebarState==="Init"? {} : (SidebarState ? sidebarNOTTriggered:sidebarTriggered)} id='sidebar-trigger' onClick={onTriggerChange} >
                {!SidebarState ? '<' : '>'}
            </div>
            <div id="sidebar" style={SidebarState==="Init"? {} : (SidebarState ? sidebarNOTTriggered:sidebarTriggered)}>
                <div id="sidebar-content">
                    <div className="sidebar-title">
                        <div className="sidebar-text">地區</div>
                    </div>
                    <div id="dropdown-group">
                        <Dropdown style={dropdownWidth} placeholder="新北市" />
                        <Dropdown style={dropdownWidth} placeholder="五股區" />
                    </div>
                    <div className="sidebar-title">
                        <div className="sidebar-text">種類</div>
                    </div>
                    <div id="sidebar-checkbox-list">
                        <Checkbox style={chekboxsize} inputId="cbwood" value="木材"></Checkbox>
                        <label htmlFor="cbwood" className="p-checkbox-label">木材</label>

                        <Checkbox style={chekboxsize} inputId="cbmetal" value="金屬"></Checkbox>
                        <label htmlFor="cbmetal" className="p-checkbox-label">金屬</label>

                        <Checkbox style={chekboxsize} inputId="cbdesk" value="桌椅"></Checkbox>
                        <label htmlFor="cbdesk" className="p-checkbox-label">桌椅</label>

                        <Checkbox style={chekboxsize} inputId="cb3c" value="3C產品"></Checkbox>
                        <label htmlFor="cb3c" className="p-checkbox-label">3C產品</label>
                    </div>
                    <div className="sidebar-title">
                        <div className="sidebar-text">優質商家</div>
                    </div>
                    <div id="sidebar-great-store">
                        <Checkbox style={chekboxsize} inputId="cbgoodstore" value="優質商家"></Checkbox>
                        <label htmlFor="cbgoodstore" className="p-checkbox-label" style={{marginLeft:'10px'}}>優質商家</label>
                    </div>
                    <div className="sidebar-title" style={{display:'flex',justifyContent:'right'}}>
                        <Button label='搜尋' />
                    </div>
                </div>
                
            </div>
        </>
    )

}

export default Sidebar;