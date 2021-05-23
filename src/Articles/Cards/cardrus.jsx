import React,{Component} from "react";
import Carda from "./CardUI";
import Card from "../../Cards/CardUI";
import img1 from '../assets/cities/rus1.jpg'; 
import img2 from '../assets/cities/rus2.jpg';
import img3 from '../assets/cities/rus3.jpg';
import img4 from '../Cities/pics/mos.jpg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardrus extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Russia" className="col-md-4">
                        <Carda imgsrc={img1} title="Russia"  text="Russia, country that stretches over a vast expanse of eastern Europe and northern Asia. Once the preeminent republic of the Union of Soviet Socialist Republics (U.S.S.R.; commonly known as the Soviet Union), Russia became an independent country after the dissolution of the Soviet Union in December 1991."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Russia is a land of superlatives. By far the world’s largest country, it covers nearly twice the territory of Canada, the second largest. It extends across the whole of northern Asia and the eastern third of Europe, spanning 11 time zones and incorporating a great range of environments and landforms, from deserts to semiarid steppes to deep forests and Arctic tundra. Russia contains Europe’s longest river, the Volga, and its largest lake, Ladoga. Russia also is home to the world’s deepest lake, Baikal, and the country recorded the world’s lowest temperature outside the North and South poles."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="Russia’s climate is extreme, with forbidding winters that have several times famously saved the country from foreign invaders. Although the climate adds a layer of difficulty to daily life, the land is a generous source of crops and materials, including vast reserves of oil, gas, and precious metals. That richness of resources has not translated into an easy life for most of the country’s people, however; indeed, much of Russia’s history has been a grim tale of the very wealthy and powerful few ruling over a great mass of their poor and powerless compatriots. Serfdom endured well into the modern era; the years of Soviet communist rule (1917–91), especially the long dictatorship of Joseph Stalin, saw subjugation of a different and more exacting sort."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img4}title="Moscow" link="/Articles/Cities/moscow" text="Moscow, Russian Moskva, city, capital of Russia, located in the far western part of the country. Since it was first mentioned in the chronicles of 1147, Moscow has played a vital role in Russian history. It became the capital of Muscovy (the Grand Principality of Moscow) in the late 13th century; hence, the people of Moscow are known as Muscovites. Today Moscow is not only the political centre of Russia but also the country’s most populous city and its industrial, cultural, scientific, and educational capital. For more than 600 years Moscow also has been the spiritual centre of the Russian Orthodox Church."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardrus;