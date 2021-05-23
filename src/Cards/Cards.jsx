import React,{Component} from "react";
import Card from "./CardUI";
import img1 from '../assets/morocco.jpg'; 
import img2 from '../assets/finland.jpg';
import img3 from '../assets/japan.jpg';
import img4 from '../assets/spain.jpg'; 
import img5 from '../assets/malta.jpeg';
import img6 from '../assets/russia.jpeg';
import img7 from '../assets/mexico.jpg'; 
import img8 from '../assets/china.jpeg';
import img9 from '../assets/thailand.jpg';
import useWindowSize from "../../node_modules/util/useWindowSize";
import {Link} from 'react-router-dom'
class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Morocco" className="col-md-4">
                        <Card imgsrc={img1} title="Morocco" link="/Articles/morocco" text="Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. Marrakesh’s medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks (marketplaces) selling ceramics, jewelry and metal lanterns. The capital Rabat’s Kasbah of the Udayas is a 12th-century royal fort overlooking the water."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img2}title="Finland" link="/Articles/finland" text="Finland is a Northern European nation bordering Sweden, Norway and Russia. Its capital, Helsinki, occupies a peninsula and surrounding islands in the Baltic Sea. Helsinki is home to the 18th-century sea fortress Suomenlinna, the fashionable Design District and diverse museums. The Northern Lights can be seen from the country's Arctic Lapland province, a vast wilderness with national parks and ski resorts. "/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img3}title="Japan" link="/Articles/japan" text="Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img4}title="Spain" link="/Articles/spain" text="Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img5}title="Malta" link="/Articles/malta" text="Malta is an archipelago in the central Mediterranean between Sicily and the North African coast. It's a nation known for historic sites related to a succession of rulers including the Romans, Moors, Knights of Saint John, French and British. It has numerous fortresses, megalithic temples and the Ħal Saflieni Hypogeum, a subterranean complex of halls and burial chambers dating to circa 4000 B.C. "/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img6}title="Russia" link="/Articles/russia" text="Russia, or the Russian Federation, is a country spanning Eastern Europe and Northern Asia. It is the largest country in the world, covering over 17 million square kilometres, and encompassing more than one-eighth of Earth's inhabited land area. "/>
                    </div>
                     <div id="blank" className="col-md-4">
                        <Card imgsrc={img7}title="Mexico" link="/Articles/mexico" text="Mexico, officially the United Mexican States, is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img8}title="China" link="/Articles/china" text="China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of around 1.4 billion. China covers an area of approximately 9.6 million square kilometers, it is the world's third or fourth-largest country."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img9}title="Thailand" link="/Articles/thainland" text="Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cards;