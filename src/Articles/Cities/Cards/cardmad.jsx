import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/mad.jpg'; 
import img2 from '../pics/mad2.jpg';
import img3 from '../pics/mad3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardmd extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Madrid" className="col-md-4">
                        <Carda imgsrc={img1} title="Madrid"  text="Madrid, city, capital of Spain and of Madrid provincia (province). Spain’s arts and financial centre, the city proper and province form a comunidad autónoma (autonomous community) in central Spain. Madrid was officially made the national capital by Philip III, an entire generation after Philip II took the court to Madrid in 1561. Under the patronage of Philip II and his successors, Madrid developed into a city of curious contrasts, preserving its old, overcrowded centre, around which developed palaces, convents, churches, and public buildings. Pop. (2011) 3,198,645; (2018 est.) 3,223,334."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Madrid’s status as the national capital reflects the centralizing policy of the 16th-century Spanish king Philip II and his successors. The choice of Madrid, however, was also the result of the city’s previous obscurity and neutrality: it was chosen because it lacked ties with an established nonroyal power rather than because of any strategic, geographic, or economic considerations. Indeed, Madrid is deficient in other characteristics that might qualify it for a leading role. It does not lie on a major river, as so many European cities do; the 16th–17th-century dramatist Lope de Vega, referring to a magnificent bridge over the distinctly unimposing waters of the Manzanares, suggested either selling the bridge or buying another river. Madrid does not possess mineral deposits or other natural wealth, nor was it ever a destination of pilgrimages, although its patron saint, San Isidro, enjoys the all-but-unique distinction of having been married to another saint. Even the city’s origins seem inappropriate for a national capital: its earliest historical role was as the site of a small Moorish fortress on a rocky outcrop—part of the northern defenses of what was then the far more important city of Toledo, located about 43 miles (70 km) south-southwest."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="Madrid lies almost exactly at the geographical heart of the Iberian Peninsula. It is situated on an undulating plateau of sand and clay known as the Meseta (derived from the Spanish word mesa, “table”) at an elevation of some 2,120 feet (646 metres) above sea level, making it one of the highest capitals in Europe. This location, together with the proximity of the Sierra de Guadarrama, is partly responsible for the weather pattern of cold, crisp winters accompanied by sharp winds. Sudden variations of temperature are possible, but summers are consistently dry and hot, becoming especially oppressive in July and August, when temperatures sometimes rise above 100 °F (38 °C). Average temperatures range between 41 and 75 °F (5 and 24 °C), while average precipitation varies between a low of less than 0.5 inch (11 mm) in July up to about 2 inches (50 mm) in October, usually the rainiest month of the year. The temperate times of year are spring and fall, which are also the most attractive seasons for visitors."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardmd;
