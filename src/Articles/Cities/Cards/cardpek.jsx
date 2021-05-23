import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/pek.jpg'; 
import img2 from '../pics/pek2.jpg';
import img3 from '../pics/pek3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardpk extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Pekin" className="col-md-4">
                        <Carda imgsrc={img1} title="Beijing"  text="Beijing, Wade-Giles romanization Pei-ching, conventional Peking, city, province-level shi (municipality), and capital of the People’s Republic of China. Few cities in the world have served for so long as the political headquarters and cultural centre of an area as immense as China. The city has been an integral part of China’s history over the past eight centuries, and nearly every major building of any age in Beijing has at least some national historical significance. The importance of Beijing thus makes it impossible to understand China without a knowledge of this city."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="More than 2,000 years ago, a site north of present-day Beijing was already an important military and trading centre for the northeastern frontier of China. In 1267, during the Yuan (Mongol) dynasty (1206–1368), a new city built northeast of the old—called Dadu—became the administrative capital of China. During the first five decades of the subsequent Ming dynasty (1368–1644), Nanjing (Nanking) was the capital, and the old Mongol capital was renamed Beiping (Pei-p’ing; “Northern Peace”); the third Ming emperor, however, restored it as the imperial seat of the dynasty and gave it a new name, Beijing (“Northern Capital”). Beijing has remained the capital of China except for a brief period (1928–49) when the Nationalist government again made Nanjing the capital (although the capital was removed to Chongqing [Chungking] during World War II); during that time Beijing once again resumed the old name Beiping."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="The city remained the most flourishing cultural centre in China despite the frequent political changes in the country throughout the early decades of the 20th century; Beijing’s importance was fully realized, however, only when the city was chosen as the capital of the People’s Republic in 1949, and this political status has added much vitality to it. Indeed, few cities have ever had such rapid growth in population and geographic area, as well as in industrial and other activities. Combining both historical relics of an ancient culture and new urban construction, ranging from fast-food franchises to plush hotels for foreign tourists and corporate travelers, it has become a showplace of modern China and one of the world’s great cities. Renewed international attention focused on Beijing after it was chosen to host the 2008 Summer Olympic Games. Area city, 1,763 square miles (4,567 square km); Beijing municipality, 6,500 square miles (16,800 square km). Pop. (2006 est.) city, 8,580,376; (2009 est.) urban agglom., 12,214,000; (2010) Beijing municipality, 19,612,368."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardpk;
