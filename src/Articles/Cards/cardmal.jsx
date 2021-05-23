import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../assets/cities/mal1.jpg'; 
import img2 from '../assets/cities/mal2.jpg';
import img3 from '../assets/cities/mal3.jpeg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardmal extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Malta" className="col-md-4">
                        <Carda imgsrc={img1} title="Malta"  text="Malta, island country located in the central Mediterranean Sea. A small but strategically important group of islands, the archipelago has through its long and turbulent history played a vital role in the struggles of a succession of powers for domination of the Mediterranean and in the interplay between emerging Europe and the older cultures of Africa and the Middle East. As a result, Maltese society has been molded by centuries of foreign rule by various powers, including the Phoenicians, Romans, Greeks, Arabs, Normans, Sicilians, Swabians, Aragonese, Hospitallers, French, and British."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="The island of Malta specifically played a vital strategic role in World War II as a base for the Allied Powers. It was heavily bombarded by German and Italian aircraft, and by the end of the war Malta was devastated. In 1942 the island of Malta was presented with the George Cross, a British award for great gallantry, in recognition of the wartime bravery of the Maltese people. After the war, the movement for self-governance became stronger. The country of Malta became independent from Britain and joined the Commonwealth in 1964 and was declared a republic on December 13, 1974. It was admitted to the European Union (EU) in 2004. A European atmosphere predominates in Malta as a result of close association with the Continent, particularly with southern Europe. The Maltese are renowned for their warmth, hospitality, and generosity to strangers, a trait that was noted in the Acts of the Apostles, with respect to the experience of St. Paul, the Apostle, who was said to have been shipwrecked off Malta in 60 CE."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="The country comprises five islands—Malta (the largest), Gozo, Comino, and the uninhabited islets of Kemmunett (Comminotto) and Filfla—lying some 58 miles (93 km) south of Sicily, 180 miles (290 km) north of Libya, and about 180 miles (290 km) east of Tunisia, at the eastern end of the constricted portion of the Mediterranean Sea separating Italy from the African coast."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardmal;