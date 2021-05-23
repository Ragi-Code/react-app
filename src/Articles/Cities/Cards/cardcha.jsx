import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/chef.jpg'; 
import img2 from '../pics/chef2.jpg';
import img3 from '../pics/chef3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardche extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Chefchaouen" className="col-md-4">
                        <Carda imgsrc={img1} title="Chefchaouen"  text="Chefchaouene, also called Chechaouene or Chechaouen, French Chaouen, Spanish Xauen, town, northern Morocco, situated in the Rif mountain range. Founded as a holy city in 1471 by the warrior Abū Youma and later moved by Sīdī ʿAlī ibn Rashīd to its present site at the base of Mount El-Chaouene, it became a refuge for Moors expelled from Spain. A site long closed to non-Muslims, it was occupied in 1920 by the Spanish, who restored it to the Moroccan kingdom in 1956. Chefchaouene contains 12 mosques and presents a picturesque appearance, with houses roofed with round tiles common in southern Europe but rare in Morocco. Its luxuriant gardens are watered from a constant mountain spring. Chefchaouene has become a very popular vacation and tourist spot, especially for Europeans touring northern Morocco. It is famous for the blue walls of its buildings, a colour unique among Moroccan towns. It is connected by road with Al-Hoceïma, Ouazzane, and Tétouan. Pop. (2004) 35,709."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Chefchaouen, or Chaouen, is a city in the Rif Mountains of northwest Morocco. It’s known for the striking, blue-washed buildings of its old town. Leather and weaving workshops line its steep cobbled lanes. In the shady main square of Place Outa el Hammam is the red-walled Kasbah, a 15th-century fortress and dungeon, and Chefchouen Ethnographic Museum. The octagonal minaret of the Great Mosque rises nearby."/>
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

export default Cardche;