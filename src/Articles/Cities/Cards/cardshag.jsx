import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/sag.jpg'; 
import img2 from '../pics/sag2.jpg';
import img3 from '../pics/sag3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardsao extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Shanghai" className="col-md-4">
                        <Carda imgsrc={img1} title="Shanghai"  text="Shanghai, also spelled Shang-hai, city and province-level shi (municipality), east-central China. It is one of the world’s largest seaports and a major industrial and commercial centre of China. The city is located on the coast of the East China Sea between the mouth of the Yangtze River (Chang Jiang) to the north and the bay of Hangzhou to the south. The municipality’s area includes the city itself, surrounding suburbs, and an agricultural hinterland. Shanghai is China’s most-populous city, and the municipality is its most-populous urban area."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Shanghai was one of the first Chinese ports to be opened to Western trade, and it long dominated the nation’s commerce. Since the communist victory in 1949, however, it has become an industrial giant whose products supply China’s growing domestic demands. The city has also undergone extensive physical changes with the establishment of industrial suburbs and housing complexes, the improvement of public works, and the provision of parks and other recreational facilities. Shanghai has attempted to eradicate the economic and psychological legacies of its exploited past through physical and social transformation to support its major role in the modernization of China. Area Shanghai municipality, 2,400 square miles (6,200 square km). Pop (2010) city, 20,217,748; Shanghai municipality, 23,019,196; (2014 est.) Shanghai municipality, 24,256,800."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="Shanghai municipality is bordered by Jiangsu province to the north and west and Zhejiang province to the southwest. It includes the 18 districts constituting the city of Shanghai and several islands in the mouth of the Yangtze and offshore to the southeast in the East China Sea. The largest island, Chongming, has an area of 489 square miles (1,267 square km) and extends more than 50 miles (80 km) upstream from the mouth of the Yangtze; it and the islands of Changxing and Hengsha administratively comprise a county under Shanghai municipality. The mainland portion of the city lies on an almost level deltaic plain with an average elevation of 10 to 16 feet (3 to 5 metres) above sea level. It is crisscrossed by an intricate network of canals and waterways that connect the municipality with the Lake Tai region just to the west.sag"/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardsao;