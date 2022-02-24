import React from "react";
import './GreenMatchList.component.scss';
import Navbar from "../../components/Navigationbar";
import Searchbar from "../../components/Searchbar";


const GreenMatchList = ()=>{
    return( 
        <>
        <Navbar/>
        <div id="navbar-background"></div>
        <div id="frame">
            <div id="frame-parent">
                <div id="frame-head">
                     <div id="filter-container">
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                         <a id="filter" href="#">篩選條件:</a>
                     </div>

                    <div id="carbonfoot">
                        <div>
                            <img src={require('../../imgs/CarbonFoot.png')} alt="foot" />
                        </div>
                        <Searchbar id="searchbar"/>
                    </div>

                </div>
                <div id="frame-body">
                    <div id="frame-body-map"></div>
                    <div id="frame-body-list"></div>
                </div>
            </div>
        </div>
        </>
    )
}




export default GreenMatchList;;