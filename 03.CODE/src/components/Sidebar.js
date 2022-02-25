import React ,{useState} from "react";
import './Sidebar.scss';
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
 

const slidebarTriggered =  {
    transform:'translate(500px)',
    animationName : 'pullout'
}
const slidebarNOTTriggered = {
    transform:'translate(0)',
    animationName : 'pushin'
}

const Sidebar = () => {

    const [SidebarState , setSidebarState] = useState()
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
            <div style={SidebarState? slidebarTriggered:slidebarNOTTriggered} id='sidebar-trigger' onClick={onTriggerChange} >
                {!SidebarState ? '>' : '<'}
            </div>
            <div id="sidebar" style={SidebarState? slidebarTriggered:slidebarNOTTriggered}>
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
                        <Checkbox style={chekboxsize} inputId="cb1" value="木材"></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">木材</label>
                        <Checkbox style={chekboxsize} inputId="cb2" value="金屬"></Checkbox>
                        <label htmlFor="cb2" className="p-checkbox-label">金屬</label>
                        <Checkbox style={chekboxsize} inputId="cb3" value="桌椅"></Checkbox>
                        <label htmlFor="cb3" className="p-checkbox-label">桌椅</label>
                        <Checkbox style={chekboxsize} inputId="cb4" value="3C產品"></Checkbox>
                        <label htmlFor="cb4" className="p-checkbox-label">3C產品</label>
                    </div>
                    <div className="sidebar-title">
                        <div className="sidebar-text">優質商家</div>
                    </div>
                    <div id="sidebar-great-store">
                        <Checkbox style={chekboxsize} inputId="cb5" value="優質商家"></Checkbox>
                        <label htmlFor="cb5" className="p-checkbox-label" style={{marginLeft:'10px'}}>優質商家</label>
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