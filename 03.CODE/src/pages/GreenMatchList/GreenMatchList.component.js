import React , {useState} from "react";
import './GreenMatchList.component.scss';
import Navbar from "../../components/Navigationbar";
import Searchbar from "../../components/Searchbar";
import DivSwitch from "../../components/Divswitch";
import Sidebar from "../../components/Sidebar";
import { ScrollPanel } from 'primereact/scrollpanel';
import Scrollcard from "../../components/Scrollcard";




const GreenMatchList = ()=>{
    const [filterState , setfilterState] = useState(false)
    const openSidebar = ()=>{
        setfilterState(true)
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
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                         <a id="filter" href="#" onClick={openSidebar}>篩選條件:</a>
                         <div id="finding-switch">
                             <DivSwitch filterState = {filterState} />
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
                    <Sidebar />
                    <div id="frame-body-container">
                        <div id="frame-body-map"></div>
                        <div id="frame-body-list">
                            <ScrollPanel id="scrollpanel">
                                <Scrollcard />
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