import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../assets/cities/mex1.png'; 
import img2 from '../assets/cities/mex2.jpg';
import img3 from '../assets/cities/mex3.jpg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardmex extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Mexico" className="col-md-4">
                        <Carda imgsrc={img1} title="Mexico"  text="Mexico, country of southern North America and the third largest country in Latin America, after Brazil and Argentina. Mexican society is characterized by extremes of wealth and poverty, with a limited middle class wedged between an elite cadre of landowners and investors on the one hand and masses of rural and urban poor on the other. But in spite of the challenges it faces as a developing country, Mexico is one of the chief economic and political forces in Latin America. It has a dynamic industrial base, vast mineral resources, a wide-ranging service sector, and the world’s largest population of Spanish speakers—about two and a half times that of Spain or Colombia. As its official name suggests, the Estados Unidos Mexicanos (United Mexican States) incorporates 31 socially and physically diverse states and the Federal District."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="More than half of the Mexican people live in the centre of the country, whereas vast areas of the arid north and the tropical south are sparsely settled. Migrants from impoverished rural areas have poured into Mexico’s cities, and nearly four-fifths of Mexicans now live in urban areas. Mexico City, the capital, is one of the most populous cities and metropolitan areas in the world. Mexico has experienced a series of economic booms leading to periods of impressive social gains, followed by busts, with significant declines in living standards for the middle and lower classes. The country remains economically fragile despite the forging of stronger ties with the United States and Canada through the North American Free Trade Agreement (NAFTA)."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Land"  text="Sharing a common border throughout its northern extent with the United States, Mexico is bounded to the west and south by the Pacific Ocean, to the east by the Gulf of Mexico and the Caribbean Sea, and to the southeast by Guatemala and Belize. Mexico also administers such islands and archipelagoes as the Tres Marías in the Pacific and Cozumel and Mujeres off the coast of the Yucatán Peninsula. Including these insular territories, the roughly triangular country covers an area about three times the size of Texas. While it is more than 1,850 miles (3,000 km) across from northwest to southeast, its width varies from less than 135 miles (217 km) at the Isthmus of Tehuantepec to more than 1,200 miles (1,900 km) in the north."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardmex;