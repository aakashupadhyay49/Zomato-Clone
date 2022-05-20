import React from "react"
// import Footer from "../../components/footer"
// import Header from "../../components/header"
import TabOptions from "../../components/common/tabOptions"
import { useState } from "react"
import DiningOut from "../../components/diningOut"
import Nightlife from "../../components/nightlife"
import Delivery from "../../components/delivery"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
const HomePage=()=>{

    const [activeTab,setactiveTab]=useState("Delivery")
    return <div>
        <Header/>
    <TabOptions activeTab={activeTab} setactiveTab={setactiveTab}/>
    {getCorrectScreen(activeTab)}
    <Footer/>
    </div>
}


const getCorrectScreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Nightlife":
            return <Nightlife/>
        default:
            return <Delivery/>
    }
}

export default HomePage