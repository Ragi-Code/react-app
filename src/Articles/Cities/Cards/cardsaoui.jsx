import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/saoui.jpg'; 
import img2 from '../pics/saoui2.jpg';
import img3 from '../pics/saoui3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardsao extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Essaouira" className="col-md-4">
                        <Carda imgsrc={img1} title="Essaouira"  text="Essaouira, formerly Mogador, Atlantic port city, western Morocco, midway between Safi and Agadir. The site was occupied by Phoenicians and then Carthaginians and was mentioned in the chronicles of the Carthaginian explorer Hanno (5th century BC). Medieval charts show it as Mogador, a corruption of an Amazigh (Berber) word for “safe anchorage.” It stands on a peninsula 10–20 feet (3–6 metres) above sea level, and, at times with heavy tides, it is almost an island city. Its harbour is sheltered by offshore islets and a rocky headland, but the channel is narrow and dangerous."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="It was founded by Sultan Sīdī Muḥammad ibn ʿAbd Allāh in 1765 as a rival port to Agadir, planned by a French captive, Théodore Cornut, and fortified in the style of the French military engineer Sébastien Le Prestre de Vauban. A colony of Moroccan Jews was installed to extend commerce."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="On the land side stretch miles of sand dunes studded with broom, and beyond are forests of argan (Morocco ironwood), a species unique to the country. A temperate climate and fine beaches have made the city a bathing resort, and its excellent ocean breezes have made it a destination for wind surfing. The old city (medina), which was designated a UNESCO World Heritage site in 2001, is a popular tourist destination and is famous for its numerous riads (a type of bed-and-breakfast). Essaouira is known for its artisan industries, notably inlaid cabinetwork. It is connected by road with Safi, Marrakech, and Agadir. Pop. (2004) 69,493."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardsao;