
import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/hog.jpg'; 
import img2 from '../pics/hog2.jpg';
import img3 from '../pics/hog3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardko extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="hongkong" className="col-md-4">
                        <Carda imgsrc={img1} title="HongKong"  text="Hong Kong, special administrative region (Pinyin: tebie xingzhengqu; Wade-Giles romanization: t’e-pieh hsing-cheng-ch’ü) of China, located to the east of the Pearl River (Zhu Jiang) estuary on the south coast of China. The region is bordered by Guangdong province to the north and the South China Sea to the east, south, and west. It consists of Hong Kong Island, originally ceded by China to Great Britain in 1842, the southern part of the Kowloon Peninsula and Stonecutters (Ngong Shuen) Island (now joined to the mainland), ceded in 1860, and the New Territories, which include the mainland area lying largely to the north, together with 230 large and small offshore islands—all of which were leased from China for 99 years from 1898 to 1997. The Chinese-British joint declaration signed on December 19, 1984, paved the way for the entire territory to be returned to China, which occurred July 1, 1997."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="The area of Hong Kong (Pinyin: Xianggang; Wade-Giles: Hsiang-kang) has expanded over the years, and it has continued to grow as more land has been reclaimed from the surrounding sea. Hong Kong Island and its adjacent islets have an area of only about 31 square miles (81 square km), while urban Kowloon, which includes the Kowloon Peninsula south of Boundary Street, and Stonecutters Island measure about 18 square miles (47 square km). The New Territories account for the rest of the area—more than 90 percent of the total. The Victoria urban district located on the barren rocks of the northwestern coast of Hong Kong Island is the place where the British first landed in 1841, and it has since been the centre of administrative and economic activities."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="Hong Kong developed initially on the basis of its excellent natural harbour (its Chinese name means “fragrant harbour”) and the lucrative China trade, particularly opium dealing. It was the expansion of its territory, however, that provided labour and other resources necessary for sustained commercial growth that led to its becoming one of the world’s major trade and financial centres. The community remains limited in space and natural resources, and it faces persistent problems of overcrowding, trade fluctuations, and social and political unrest. Nevertheless, Hong Kong has emerged strong and prosperous, albeit with a changed role, as an entrepôt, a manufacturing and financial centre, and a vital agent in the trade and modernization of China."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardko;