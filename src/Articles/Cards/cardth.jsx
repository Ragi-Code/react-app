import React,{Component} from "react";
import Carda from "./CardUI";
import Card from "../../Cards/CardUI";
import img1 from '../assets/cities/th1.jpg'; 
import img2 from '../assets/cities/th2.jpg';
import img3 from '../assets/cities/th3.jpg';
import img4 from '../Cities/pics/puk.jpg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardth extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Thailand" className="col-md-4">
                        <Carda imgsrc={img1} title="Thailand"  text="Thailand, country located in the centre of mainland Southeast Asia. Located wholly within the tropics, Thailand encompasses diverse ecosystems, including the hilly forested areas of the northern frontier, the fertile rice fields of the central plains, the broad plateau of the northeast, and the rugged coasts along the narrow southern peninsula. Until the second half of the 20th century, Thailand was primarily an agricultural country, but since the 1960s increasing numbers of people have moved to Bangkok, the capital, and to other cities. Although the greater Bangkok metropolitan area remains the preeminent urban centre in the country, there are other sizable cities, such as Chiang Mai in the north, Nakhon Ratchasima (Khorat), Khon Kaen, and Udon Thani in the northeast, Pattaya in the southeast, and Hat Yai in the far south."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Siam, as Thailand was officially called until 1939, was never brought under European colonial domination. Independent Siam was ruled by an absolute monarchy until a revolution there in 1932. Since that time, Thailand has been a constitutional monarchy, and all subsequent constitutions have provided for an elected parliament. Political authority, however, has often been held by the military, which has taken power through coups. During the last two decades of the 20th century and the first decade of the 21st, parliamentary democracy steadily gained wider popular support. Although a crisis emerged in 2006, when the military, aligned with the monarchy, overthrew an elected government, new parliamentary elections were held—as promised by the interim government—in 2007."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Land"  text="Thailand, which has about the same land area as Spain or France, consists of two broad geographic areas: a larger main section in the north and a smaller peninsular extension in the south. The main body of the country is surrounded by Myanmar (Burma) to the west, Laos to the north and east, Cambodia to the southeast, and the Gulf of Thailand to the south. Peninsular Thailand stretches southward from the southwestern corner of the country along the eastern edge of the Malay Peninsula; Myanmar extends along the western portion of the peninsula as far as the Isthmus of Kra, after which Thailand occupies the entire peninsula until reaching its southern border with Malaysia at roughly latitude 6° N."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img4}title="Phuket" link="/Articles/Cities/phuket" text="Phuket, city and island, southern Thailand. The island lies in the Andaman Sea, off the west coast of peninsular Thailand. Phuket city, located in the southeastern portion of the island, is a major port and commercial centre. Its harbour exports tin, rubber, charcoal, lumber, and fish products south to Malaysia and Singapore and north to Myanmar (Burma). Rice and manufactures are imported. The city airport has regular flights to Bangkok, towns of southern Thailand, and George Town, Malaysia."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardth;