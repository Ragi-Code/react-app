import React,{Component} from "react";
import Carda from "./CardUI";
import Card from "../../Cards/CardUI";
import img1 from '../assets/cities/shanghai.jpg'; 
import img2 from '../assets/cities/shanghai2.jpg';
import img3 from '../assets/cities/shanghai3.jpeg';
import img4 from '../Cities/pics/pek.jpg'; 
import img5 from '../Cities/pics/hog.jpg';
import img6 from '../Cities/pics/sag.jpg';
import useWindowSize from "../../../node_modules/util/useWindowSize";

class Cardch extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="China" className="col-md-4">
                        <Carda imgsrc={img1} title="China"  text="China, Chinese (Pinyin) Zhonghua or (Wade-Giles romanization) Chung-hua, also spelled (Pinyin) Zhongguo or (Wade-Giles romanization) Chung-kuo, officially People’s Republic of China or Chinese (Pinyin) Zhonghua Renmin Gongheguo or (Wade-Giles romanization) Chung-hua Jen-min Kung-ho-kuo, country of East Asia. It is the largest of all Asian countries and has the largest population of any country in the world. Occupying nearly the entire East Asian landmass, it covers approximately one-fourteenth of the land area of Earth. Among the major countries of the world, China is surpassed in area by only Russia and Canada, and it is almost as large as the whole of Europe."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="Probably the single most identifiable characteristic of China to the people of the rest of the world is the size of its population. Some one-fifth of humanity is of Chinese nationality. The great majority of the population is Chinese (Han), and thus China is often characterized as an ethnically homogeneous country, but few countries have as wide a variety of indigenous peoples as does China. Even among the Han there are cultural and linguistic differences between regions; for example, the only point of linguistic commonality between two individuals from different parts of China may be the written Chinese language. Because China’s population is so enormous, the population density of the country is also often thought to be uniformly high, but vast areas of China are either uninhabited or sparsely populated."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="China has 33 administrative units directly under the central government; these consist of 22 provinces, 5 autonomous regions, 4 municipalities (Chongqing, Beijing, Shanghai, and Tianjin), and 2 special administrative regions (Hong Kong and Macau). The island province of Taiwan, which has been under separate administration since 1949, is discussed in the article Taiwan. Beijing (Peking), the capital of the People’s Republic, is also the cultural, economic, and communications centre of the country. Shanghai is the main industrial city; Hong Kong is the leading commercial centre and port."/>
                    </div>
                    <div id="Morocco" className="col-md-4">
                        <Card imgsrc={img4} title="Beijing" link="/Articles/Cities/pekin" text="Beijing, Wade-Giles romanization Pei-ching, conventional Peking, city, province-level shi (municipality), and capital of the People’s Republic of China. Few cities in the world have served for so long as the political headquarters and cultural centre of an area as immense as China. The city has been an integral part of China’s history over the past eight centuries, and nearly every major building of any age in Beijing has at least some national historical significance. The importance of Beijing thus makes it impossible to understand China without a knowledge of this city."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img5}title="Hongkong" link="/Articles/Cities/hong" text="Hong Kong, special administrative region (Pinyin: tebie xingzhengqu; Wade-Giles romanization: t’e-pieh hsing-cheng-ch’ü) of China, located to the east of the Pearl River (Zhu Jiang) estuary on the south coast of China. The region is bordered by Guangdong province to the north and the South China Sea to the east, south, and west. It consists of Hong Kong Island, originally ceded by China to Great Britain in 1842, the southern part of the Kowloon Peninsula and Stonecutters (Ngong Shuen) Island (now joined to the mainland), ceded in 1860, and the New Territories, which include the mainland area lying largely to the north, together with 230 large and small offshore islands—all of which were leased from China for 99 years from 1898 to 1997. The Chinese-British joint declaration signed on December 19, 1984, paved the way for the entire territory to be returned to China, which occurred July 1, 1997. "/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img6}title="Shanghai" link="/Articles/Cities/shanghai" text="Shanghai, also spelled Shang-hai, city and province-level shi (municipality), east-central China. It is one of the world’s largest seaports and a major industrial and commercial centre of China. The city is located on the coast of the East China Sea between the mouth of the Yangtze River (Chang Jiang) to the north and the bay of Hangzhou to the south. The municipality’s area includes the city itself, surrounding suburbs, and an agricultural hinterland. Shanghai is China’s most-populous city, and the municipality is its most-populous urban area."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardch;