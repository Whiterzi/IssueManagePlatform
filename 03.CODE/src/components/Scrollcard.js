import React ,{useState} from "react";
import goodmark from '../imgs/goodmark.png'
import './Scrollcard.scss'
import Infocard from "./Infocard";


const itemlist = [{
    id : '001',
    name : 'wood',
    location : 'taipeiOOXX',
    type : '木材',
    size : '1m*2m*3m',
    state :  'great',
    postdate : '2021/2/25',
    price : 50000,
    imgs : ['img1.jpg','img2.jpg'],
    goodstore : true
},{
    id : '002',
    name : 'wood',
    location : 'taipeiOOXX',
    type : '金屬',
    size : '1m*2m*3m',
    state :  'great',
    postdate : '2021/2/25',
    price : 50000,
    imgs : ['img1.jpg','img2.jpg'],
    goodstore : false
},{
    id : '003',
    name : 'wood',
    location : 'taipeiOOXX',
    type : '桌椅',
    size : '1m*2m*3m',
    state :  'great',
    postdate : '2021/2/25',
    price : 50000,
    imgs : ['img1.jpg','img2.jpg'],
    goodstore : true
},{
    id : '004',
    name : 'wood',
    location : 'taipeiOOXX',
    type : '3C產品',
    size : '1m*2m*3m',
    state :  'great',
    postdate : '2021/2/25',
    price : 50000,
    imgs : ['img1.jpg','img2.jpg'],
    goodstore : true
},{
    id : '005',
    name : 'wood',
    location : 'taipeiOOXX',
    type : '木材',
    size : '1m*2m*3m',
    state :  'great',
    postdate : '2021/2/25',
    price : 50000,
    imgs : ['img1.jpg','img2.jpg'],
    goodstore : false
}
]

const filtedlist = (filteroption)=>{
    let tempList = itemlist.slice()
    let resultlist = []
    let filter = filteroption

    const goodstoreprocess = ()=>{
        filter.splice(filter.indexOf('優質商家'),1);
        return true
    }

    const isItgoodstore = filter.includes('優質商家') ? goodstoreprocess() : false
    tempList.forEach(element=>{
        // console.log(element.type)
        if (filter.includes(element.type)){
            resultlist.push(element);
            tempList.splice(tempList.indexOf(element),1)
        }
    })

    if (filter.length===0){
        resultlist = tempList
    }

    if (isItgoodstore){
        resultlist.forEach(element => {
            if(!element.goodstore){
                resultlist.splice(resultlist.indexOf(element),1)
            }
        })
    }
    // console.log(resultlist)
    return resultlist
}

const Cardgenerate=(props)=>{
    let arr = []
    const cardlist1 = props.filter
    const llist = ()=>{
        cardlist1.forEach(element => {
            arr.push(
            <div id='body-list-card' key={element.id}>
                <div id='img-for-preview'></div>
                <div id='item-describe-text'>
                    <div id='rowname'>
                        <p>名稱</p>
                        <p>貨物地點</p>
                        <p>種類</p>
                        <p>尺寸<font style={{fontSize:'12px'}}>(W*H*D)</font></p>
                        <p>貨物狀況</p>
                        <p>上架日期</p>
                        <p id='price'>價格</p>
                    </div>
                    <div id='rowvalue'>
                        <p>{element.name}</p>
                        <p>{element.location}</p>
                        <p>{element.type}</p>
                        <p>{element.size}</p>
                        <p>{element.state}</p>
                        <p>{element.postdate}</p>
                        <p id='price'>${element.price}</p>
                    </div>
                    
                </div>
                <img id="goodstoremark" src={goodmark} alt='goodmark' hidden={element.goodstore ? '' : 'hide'} />
                <button id="purchase-button" key={element.id} onClick={props.onClick}>購買</button>
            </div>)
        });
    }
    llist()
    // console.log(arr)
    return arr
}

const Scrollcard = (props)=>{

    const [showlist , changeShowstate] = useState(true)
    const Filters = props.filter
    const PurchaseButtonEvent = ()=>{
        changeShowstate(false)
    }
    const InfocardBackEvent = ()=>{
        changeShowstate(true)
    }
    // console.log(props.filter)
    return (
        showlist ? <Cardgenerate filter={filtedlist(Filters)} onClick={PurchaseButtonEvent} /> : <Infocard onBack={InfocardBackEvent} />
    )
}

export default Scrollcard;