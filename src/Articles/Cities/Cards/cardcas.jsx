import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/casa.jpg'; 
import img2 from '../pics/casa2.jpg';
import img3 from '../pics/casa3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardca extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Casablanca" className="col-md-4">
                        <Carda imgsrc={img1} title="Casablanca"  text="Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city's French colonial legacy is seen in its downtown Mauresque architecture, a blend of Moorish style and European art deco. Standing partly over the water, the enormous Hassan II Mosque, completed in 1993, has a 210m minaret topped with lasers directed toward Mecca. "/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="The origin of the town is not known. An Amazigh (Berber) village called Anfa stood on the present-day site in the 12th century; it became a pirates’ base for harrying Christian ships and was destroyed by the Portuguese in 1468. The Portuguese returned to the area in 1515 and built a new town called Casa Branca (“White House”). It was abandoned in 1755 after a devastating earthquake, but the ʿAlawī sultan Sīdī Muhammad ibn ʿAbd Allāh rebuilt the town in the late 18th century. Spanish merchants, who named it Casablanca, and other European traders began to settle there. The French after a time outnumbered other European settlers, and the name Maison Blanche (also meaning “White House”) became as common as Casablanca."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="The town was occupied by the French in 1907, and during the French protectorate (1912–56) Casablanca became the chief port of Morocco. Since then, the growth and development of the city have been continuous and rapid. During World War II (1939–45) the city was the seat of a British-U.S. summit conference in 1943. (See Casablanca Conference.) In 1961 a conference at Casablanca, presided over by King Muḥammad V of Morocco, founded the Casablanca group of African states.

"/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardca;