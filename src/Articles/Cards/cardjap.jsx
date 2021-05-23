import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../assets/cities/jap1.jpeg'; 
import img2 from '../assets/cities/jap2.jpg';
import img3 from '../assets/cities/jap3.jpeg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardjp extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Japan" className="col-md-4">
                        <Carda imgsrc={img3} title="Japan"  text="apan, island country lying off the east coast of Asia. It consists of a great string of islands in a northeast-southwest arc that stretches for approximately 1,500 miles (2,400 km) through the western North Pacific Ocean. Nearly the entire land area is taken up by the country’s four main islands; from north to south these are Hokkaido (Hokkaidō), Honshu (Honshū), Shikoku, and Kyushu (Kyūshū). Honshu is the largest of the four, followed in size by Hokkaido, Kyushu, and Shikoku. In addition, there are numerous smaller islands, the major groups of which are the Ryukyu (Nansei) Islands (including the island of Okinawa) to the south and west of Kyushu and the Izu, Bonin (Ogasawara), and Volcano (Kazan) islands to the south and east of central Honshu. The national capital, Tokyo (Tōkyō), in east-central Honshu, is one of the world’s most populous cities. "/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img1}title="Economy"  text="The Japanese landscape is rugged, with more than four-fifths of the land surface consisting of mountains. There are many active and dormant volcanoes, including Mount Fuji (Fuji-san), which, at an elevation of 12,388 feet (3,776 metres), is Japan’s highest mountain. Abundant precipitation and the generally mild temperatures throughout most of the country have produced a lush vegetation cover and, despite the mountainous terrain and generally poor soils, have made it possible to raise a variety of crops. Japan has a large and, to a great extent, ethnically homogeneous population, which is heavily concentrated in the low-lying areas along the Pacific coast of Honshu."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Politics"  text="Complexity and contrast are the keynotes of life in Japan—a country possessing an intricate and ancient cultural tradition yet one that, since 1950, has emerged as one of the world’s most economically and technologically advanced societies. Heavy emphasis is placed on education, and Japan is one of the world’s most literate countries. Tension between old and new is apparent in all phases of Japanese life. A characteristic sensitivity to natural beauty and a concern with form and balance are evident in such cities as Kyōto and Nara, as well as in Japan’s ubiquitous gardens. Even in the countryside, however, the impact of rapid Westernization is evident in many aspects of Japanese life. The agricultural regions are characterized by low population densities and well-ordered rice fields and fruit orchards, whereas the industrial and urbanized belt along the Pacific coast of Honshu is noted for its highly concentrated population, heavy industrialization, and environmental pollution."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardjp;