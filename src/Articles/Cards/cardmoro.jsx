import React,{Component} from "react";
import Carda from "./CardUI";
import Card from "../../Cards/CardUI";
import img1 from '../assets/cities/chaouen.jpg'; 
import img2 from '../assets/cities/zagoura.jpg';
import img3 from '../assets/cities/casa.jpg';
import img4 from '../Cities/pics/saoui.jpg'; 
import img5 from '../Cities/pics/saoui2.jpg';
import img6 from '../Cities/pics/saoui3.jpg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardo extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Morocco" className="col-md-4">
                        <Carda imgsrc={img1} title="Morocco"  text="Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. Marrakesh’s medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks (marketplaces) selling ceramics, jewelry and metal lanterns. The capital Rabat’s Kasbah of the Udayas is a 12th-century royal fort overlooking the water."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Morocco's economy is considered a relatively liberal economy governed by the law of supply and demand. Since 1993, the country has followed a policy of privatisation of certain economic sectors which used to be in the hands of the government.[97] Morocco has become a major player in African economic affairs,[98] and is the fifth largest economy in Africa by GDP (PPP). Morocco was ranked as the first African country by the Economist Intelligence Unit's quality-of-life index, ahead of South Africa.However, in the years since that first-place ranking was given, Morocco has slipped into fourth place behind Egypt."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="Morocco was an authoritarian regime according to the Democracy Index of 2014. The Freedom of the Press 2014 report gave it a rating of Not Free.This has improved since, however, and in 2017, Morocco was upgraded to being a hybrid regime according to the Democracy Index in 2017 and while the Freedom of the Press report in 2017 continued to find that Morocco's press continued to be not free, it gave partly free ratings for its Net Freedom and Freedom in the World more generally."/>
                    </div>
                    <div id="Morocco" className="col-md-4">
                        <Card imgsrc={img4} title="CasaBlanca" link="/Articles/Cities/casablanca" text="Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city's French colonial legacy is seen in its downtown Mauresque architecture, a blend of Moorish style and European art deco. Standing partly over the water, the enormous Hassan II Mosque, completed in 1993, has a 210m minaret topped with lasers directed toward Mecca."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img5}title="Chefchaouen" link="/Articles/Cities/chaouen" text="Chefchaouen, or Chaouen, is a city in the Rif Mountains of northwest Morocco. It’s known for the striking, blue-washed buildings of its old town. Leather and weaving workshops line its steep cobbled lanes. In the shady main square of Place Outa el Hammam is the red-walled Kasbah, a 15th-century fortress and dungeon, and Chefchouen Ethnographic Museum. The octagonal minaret of the Great Mosque rises nearby. "/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img6}title="Essaouira" link="/Articles/Cities/essaoui" text="Essaouira, formerly Mogador, Atlantic port city, western Morocco, midway between Safi and Agadir. The site was occupied by Phoenicians and then Carthaginians and was mentioned in the chronicles of the Carthaginian explorer Hanno (5th century BC). Medieval charts show it as Mogador, a corruption of an Amazigh (Berber) word for “safe anchorage.” It stands on a peninsula 10–20 feet (3–6 metres) above sea level, and, at times with heavy tides, it is almost an island city. Its harbour is sheltered by offshore islets and a rocky headland, but the channel is narrow and dangerous."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardo;