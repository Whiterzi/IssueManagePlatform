import React , {useState} from "react";
import './GreenMatchList.component.scss';
import Navbar from "../../components/Navigationbar";
import Searchbar from "../../components/Searchbar";
import DivSwitch from "../../components/Divswitch";
import Sidebar from "../../components/Sidebar";
import { ScrollPanel } from 'primereact/scrollpanel';
import Scrollcard from "../../components/Scrollcard";
import Filterchips from "../../components/Filterchips";



const GreenMatchList = ()=>{
    const [SidebarState , setSidebarState] = useState("Init")
    const openSidebar = ()=>{
        setSidebarState(!SidebarState)
    }

    const [Filteroption , setFilteroption] = useState([]);
    const onCheckboxChanges = (e)=>{
        let tempFilteroption = [...Filteroption]
        if(e.checked){
            tempFilteroption.push(e.target.value)
        }else{
            tempFilteroption.splice(Filteroption.indexOf(e.value),1)
        }
        setFilteroption(tempFilteroption)
    }
    const onItemDelete = (e)=>{
        let tempFilteroption = [...Filteroption]
        tempFilteroption.splice(tempFilteroption.indexOf(e.target.id),1)
        setFilteroption(tempFilteroption)
    }

    

    return( 
        <>
        <Navbar/>
        <div id="navbar-background"></div>
        <div id="frame">
            <div id="frame-parent">
                <div id="frame-head">
                     <div id="filter-container">
                        <div>
                        <div id='filter'>
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                            <a id="filtertitle" href="#" onClick={openSidebar}>篩選條件:</a>
                            <div id="chip-container">
                                <Filterchips Filteroption={Filteroption} onItemDelete={onItemDelete} />
                            </div>
                        </div>
                         <div id="finding-switch">
                             <DivSwitch />
                         </div>
                        </div>
                     </div>
                    <div id="carbonfoot">
                        <div>
                            <img src={require('../../imgs/CarbonFoot.png')} alt="foot" />
                        </div>
                        <Searchbar id="searchbar"/>
                    </div>

                </div>
                <div id="frame-body">
                    <Sidebar  SidebarState = {SidebarState} setSidebarState = {setSidebarState} Filteroption={Filteroption} onCheckboxChanges={onCheckboxChanges} />
                    <div id="frame-body-container">
                        <div id="frame-body-map"></div>
                        <div id="frame-body-list">
                            <ScrollPanel id="scrollpanel">
                                <Scrollcard filter={Filteroption} />
                            </ScrollPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}




export default GreenMatchList;;