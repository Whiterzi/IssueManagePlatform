import React from "react";
import './Infocard.scss'
import backarrow from '../imgs/Backarrow.png'
import GoodStoremark from '../imgs/GoodStoreMark.png'
import followheart from '../imgs/addfollow.png'

const Infocardgenerate = (props) => {
    const Infos = props.Info[0]
    return (
        <div id='infocard-body'>
            <div id='go-back-button' onClick={props.onback}>
                <img src={backarrow} alt="backarrow" />
                返回
            </div>
            <div id='header-tag-and-id'>
                <div id='header-tags'>
                    <div id='charactor'>
                        賣
                    </div>
                    <div id='item-type'>
                        {Infos.type}
                    </div>
                    <img src={GoodStoremark} alt='goodstoremark' id='good-store-mark' visibility={Infos.goodstore?'visible':'none'} />
                </div>
                <div id='header-id'>
                    編號：{Infos.id}
                </div>
            </div>
            <div id='item-name-and-follow'>
                <div id='item-name'>
                    優質木頭
                </div>
                <img src={followheart} alt='heart' />
            </div>
            <div id='image-preview'>
                圖片
            </div>
            <div id='price-and-purchase'>
                <div id='price'>
                    $  {3000}
                </div>
                <button id='purchase-button'>
                    購買
                </button>
            </div>
            <div id='infos'>
                <div id='infos-left'>
                    <div id='rates'>
                        <div id='rates-title'>
                            詢問度
                        </div>
                        <div id='rates-visual'>

                        </div>
                        <div id='rates-description'>
                            10間公司在接洽
                        </div>
                    </div>
                    <div id='basic-info'>
                        <div id='basic-info-title'>
                            基本資訊
                        </div>
                        <div id='basic-info-description'>

                        </div>
                    </div>
                </div>
                <div id='infos-right'>
                    <div id='spec-title'>
                        規格與內容
                    </div>
                    <div id='spec-content'>

                    </div>

                </div>
            </div>
        </div>
    )
}

const Infocard = (props) => {
    return <Infocardgenerate onback={props.onBack} Info={props.InfObject} />

}

export default Infocard;