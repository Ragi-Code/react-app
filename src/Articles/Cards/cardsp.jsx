import React,{Component} from "react";
import Carda from "./CardUI";
import Card from "../../Cards/CardUI";
import img1 from '../assets/cities/sp1.jpeg'; 
import img2 from '../assets/cities/sp2.jpg';
import img3 from '../assets/cities/sp3.jpg';
import img4 from '../Cities/pics/mad.jpg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardsp extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Spain" className="col-md-4">
                        <Carda imgsrc={img1} title="Spain"  text="Spain is a storied country of stone castles, snowcapped mountains, vast monuments, and sophisticated cities, all of which have made it a favoured travel destination. The country is geographically and culturally diverse. Its heartland is the Meseta, a broad central plateau half a mile above sea level. Much of the region is traditionally given over to cattle ranching and grain production; it was in this rural setting that Miguel de Cervantes’s Don Quixote tilted at the tall windmills that still dot the landscape in several places. In the country’s northeast are the broad valley of the Ebro River, the mountainous region of Catalonia, and the hilly coastal plain of Valencia. To the northwest is the Cantabrian Mountains, a rugged range in which heavily forested, rain-swept valleys are interspersed with tall peaks. To the south is the citrus-orchard-rich and irrigated lands of the valley of the Guadalquivir River, celebrated in the renowned lyrics of Spanish poets Federico García Lorca and Antonio Machado; over this valley rises the snowcapped Sierra Nevada. The southern portion of the country is desert, an extension of the Sahara made familiar to Americans through the “spaghetti western” films of the 1960s and early ’70s. Lined with palm trees, rosemary bushes, and other tropical vegetation, the southeastern Mediterranean coast and the Balearic Islands enjoy a gentle climate, drawing millions of visitors and retirees, especially from northern Europe."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Spain’s countryside is quaint, speckled with castles, aqueducts, and ancient ruins, but its cities are resoundingly modern. The Andalusian capital of Sevilla (Seville) is famed for its musical culture and traditional folkways; the Catalonian capital of Barcelona for its secular architecture and maritime industry; and the national capital of Madrid for its winding streets, its museums and bookstores, and its around-the-clock lifestyle. Madrid is Spain’s largest city and is also its financial and cultural centre, as it has been for hundreds of years."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="The many and varied cultures that have gone into the making of Spain—those of the Castilians, Catalonians, Lusitanians, Galicians, Basques, Romans, Arabs, Jews, and Roma (Gypsies), among other peoples—are renowned for their varied cuisines, customs, and prolific contributions to the world’s artistic heritage. The country’s Roman conquerors left their language, roads, and monuments, while many of the Roman Empire’s greatest rulers were Spanish, among them Trajan, Hadrian, and Marcus Aurelius. The Moors, who ruled over portions of Spain for nearly 800 years, left a legacy of fine architecture, lyric poetry, and science; the Roma contributed the haunting music called the cante jondo (a form of flamenco), which, wrote García Lorca, “comes from remote races and crosses the graveyard of the years and the fronds of parched winds. It comes from the first sob and the first kiss.” Even the Vandals, Huns, and Visigoths who swept across Spain following the fall of Rome are remembered in words and monuments, which prompted García Lorca to remark, “In Spain, the dead are more alive than the dead of any other country in the world.”"/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img4}title="Madrid" link="/Articles/Cities/madrid" text="Madrid, city, capital of Spain and of Madrid provincia (province). Spain’s arts and financial centre, the city proper and province form a comunidad autónoma (autonomous community) in central Spain. Madrid was officially made the national capital by Philip III, an entire generation after Philip II took the court to Madrid in 1561. Under the patronage of Philip II and his successors, Madrid developed into a city of curious contrasts, preserving its old, overcrowded centre, around which developed palaces, convents, churches, and public buildings. Pop. (2011) 3,198,645; (2018 est.) 3,223,334."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardsp;
