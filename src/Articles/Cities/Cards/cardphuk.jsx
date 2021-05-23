import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/puk.jpg'; 
import img2 from '../pics/puk2.jpg';
import img3 from '../pics/puk3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardphk extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Phuket" className="col-md-4">
                        <Carda imgsrc={img1} title="Phuket"  text="Phuket, city and island, southern Thailand. The island lies in the Andaman Sea, off the west coast of peninsular Thailand. Phuket city, located in the southeastern portion of the island, is a major port and commercial centre. Its harbour exports tin, rubber, charcoal, lumber, and fish products south to Malaysia and Singapore and north to Myanmar (Burma). Rice and manufactures are imported. The city airport has regular flights to Bangkok, towns of southern Thailand, and George Town, Malaysia."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="The island’s surface area is mostly level land but is dotted with isolated hills that reach a height of 1,700 feet (520 metres). It was settled as early as the 1st century BCE. The island was part of various Tai states from an early time and was incorporated into the Ayutthaya kingdom about the 16th century. After the 18th century, large numbers of Chinese arrived; more than half the population is now Chinese. Called Ujong Salang (“Cape Salang”) by Malays, the island has also been known as Tongka, Junk Ceylon, and Jonsalam."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="Phuket is noted for its rich tin mines. The ore, found in lowland gravels and on the shallow seafloor, is recovered by river and ocean boat dredges and pumps. The island has also become a major seaside resort. It is reached by bridge from the mainland to the north across a narrow strait. A road links the major settlements of Thalang, Phuket, and Ban Rawai. In December 2004 the island was severely damaged by a large tsunami triggered by an earthquake in the Indian Ocean near Indonesia. Several thousand people, many of them foreign tourists, were killed. Area island, 210 square miles (543 square km). Pop. (2000) city, 66,685; (2018 est.) city, 79,755."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardphk;
