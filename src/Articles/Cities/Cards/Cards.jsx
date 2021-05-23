import React,{Component} from "react";
import Card from "../../../Cards/CardUI";
import img1 from '../pics/saoui.jpg'; 
import img2 from '../pics/saoui2.jpg';
import img3 from '../pics/saoui3.jpg';
import img4 from '../pics/pek.jpg'; 
import img5 from '../pics/hog.jpg';
import img6 from '../pics/sag.jpg';
import img7 from '../pics/puk.jpg';
import img8 from '../pics/mos.jpg';
import img9 from '../pics/mad.jpg';

import useWindowSize from "../../../../node_modules/util/useWindowSize";
import {Link} from 'react-router-dom'
class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Morocco" className="col-md-4">
                        <Card imgsrc={img1} title="CasaBlanca" link="/Articles/Cities/casablanca" text="Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city's French colonial legacy is seen in its downtown Mauresque architecture, a blend of Moorish style and European art deco. Standing partly over the water, the enormous Hassan II Mosque, completed in 1993, has a 210m minaret topped with lasers directed toward Mecca."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img2}title="Chefchaouen" link="/Articles/Cities/chaouen" text="Chefchaouen, or Chaouen, is a city in the Rif Mountains of northwest Morocco. It’s known for the striking, blue-washed buildings of its old town. Leather and weaving workshops line its steep cobbled lanes. In the shady main square of Place Outa el Hammam is the red-walled Kasbah, a 15th-century fortress and dungeon, and Chefchouen Ethnographic Museum. The octagonal minaret of the Great Mosque rises nearby. "/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img3}title="Essaouira" link="/Articles/Cities/essaoui" text="Essaouira, formerly Mogador, Atlantic port city, western Morocco, midway between Safi and Agadir. The site was occupied by Phoenicians and then Carthaginians and was mentioned in the chronicles of the Carthaginian explorer Hanno (5th century BC). Medieval charts show it as Mogador, a corruption of an Amazigh (Berber) word for “safe anchorage.” It stands on a peninsula 10–20 feet (3–6 metres) above sea level, and, at times with heavy tides, it is almost an island city. Its harbour is sheltered by offshore islets and a rocky headland, but the channel is narrow and dangerous."/>
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
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img7}title="Phuket" link="/Articles/Cities/phuket" text="Phuket, city and island, southern Thailand. The island lies in the Andaman Sea, off the west coast of peninsular Thailand. Phuket city, located in the southeastern portion of the island, is a major port and commercial centre. Its harbour exports tin, rubber, charcoal, lumber, and fish products south to Malaysia and Singapore and north to Myanmar (Burma). Rice and manufactures are imported. The city airport has regular flights to Bangkok, towns of southern Thailand, and George Town, Malaysia."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img8}title="Moscow" link="/Articles/Cities/moscow" text="Moscow, Russian Moskva, city, capital of Russia, located in the far western part of the country. Since it was first mentioned in the chronicles of 1147, Moscow has played a vital role in Russian history. It became the capital of Muscovy (the Grand Principality of Moscow) in the late 13th century; hence, the people of Moscow are known as Muscovites. Today Moscow is not only the political centre of Russia but also the country’s most populous city and its industrial, cultural, scientific, and educational capital. For more than 600 years Moscow also has been the spiritual centre of the Russian Orthodox Church."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Card imgsrc={img9}title="Madrid" link="/Articles/Cities/madrid" text="Madrid, city, capital of Spain and of Madrid provincia (province). Spain’s arts and financial centre, the city proper and province form a comunidad autónoma (autonomous community) in central Spain. Madrid was officially made the national capital by Philip III, an entire generation after Philip II took the court to Madrid in 1561. Under the patronage of Philip II and his successors, Madrid developed into a city of curious contrasts, preserving its old, overcrowded centre, around which developed palaces, convents, churches, and public buildings. Pop. (2011) 3,198,645; (2018 est.) 3,223,334."/>
                    </div>
                    
                </div>
            </div>
        );
    };
};

export default Cards;