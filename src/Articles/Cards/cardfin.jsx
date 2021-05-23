import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../assets/cities/fin1.jpg'; 
import img2 from '../assets/cities/fin2.jpeg';
import img3 from '../assets/cities/fin3.jpg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardfin extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Finland" className="col-md-4">
                        <Carda imgsrc={img1} title="Finland"  text="Finland, country located in northern Europe. Finland is one of the world’s most northern and geographically remote countries and is subject to a severe climate. Nearly two-thirds of Finland is blanketed by thick woodlands, making it the most densely forested country in Europe. Finland also forms a symbolic northern border between western and eastern Europe: dense wilderness and Russia to the east, the Gulf of Bothnia and Sweden to the west."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Finland’s international activities became more widely known when the Conference on Security and Cooperation in Europe, which resulted in the creation of the Helsinki Accords, was held in that city in 1975. Finland has continued to have especially close ties with the other Scandinavian countries, sharing a free labour market and participating in various economic, cultural, and scientific projects. Finland became a full member of the European Union in 1995."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="Throughout the Cold War era, Finland skillfully maintained a neutral political position, although a 1948 treaty with the Soviet Union (terminated 1991) required Finland to repel any attack on the Soviet Union carried out through Finnish territory by Germany or any of its allies. Since World War II, Finland has steadily increased its trading and cultural relations with other countries. Under a U.S.-Soviet agreement, Finland was admitted to the United Nations in 1955. Since then, Finland has sent representatives to the Nordic Council, which makes suggestions to member countries on the coordination of policies."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardfin;