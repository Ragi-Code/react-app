import React,{Component} from "react";
import Carda from "./CardUI";
import img1 from '../pics/mos.jpg'; 
import img2 from '../pics/mos2.jpg';
import img3 from '../pics/mos3.jpg';
import useWindowSize from "../../../../node_modules/util/useWindowSize";

class Cardm extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div id="Moscow" className="col-md-4">
                        <Carda imgsrc={img1} title="Moscow"  text="Moscow, Russian Moskva, city, capital of Russia, located in the far western part of the country. Since it was first mentioned in the chronicles of 1147, Moscow has played a vital role in Russian history. It became the capital of Muscovy (the Grand Principality of Moscow) in the late 13th century; hence, the people of Moscow are known as Muscovites. Today Moscow is not only the political centre of Russia but also the country’s most populous city and its industrial, cultural, scientific, and educational capital. For more than 600 years Moscow also has been the spiritual centre of the Russian Orthodox Church."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img2}title="Economy"  text="The capital of the Union of Soviet Socialist Republics (U.S.S.R.) until the union dissolved in 1991, Moscow attracted world attention as a centre of communist power; indeed, the name of the seat of the former Soviet government and the successor Russian government, the Kremlin (Russian: Kreml), was a synonym for Soviet authority. The dissolution of the U.S.S.R. brought tremendous economic and political change, along with a significant concentration of Russia’s wealth, into Moscow. Area 414 square miles (1,035 square km). Pop. (2010) city, 11,738,547; (2020 est.) city, 12,678,079."/>
                    </div>
                    <div id="blank" className="col-md-4">
                        <Carda imgsrc={img3}title="Politics"  text="If St. Petersburg is Russia’s “window on Europe,” Moscow is Russia’s heart. It is an upbeat, vibrant, and sometimes wearisome city. Much of Moscow was reconstructed after it was occupied by the French under Napoleon I in 1812 and almost entirely destroyed by fire. Moscow has not stopped being refurbished and modernized and continues to experience rapid social change. Russia’s Soviet past collides with its capitalist present everywhere in the country, but nowhere is this contrast more visible than in Moscow. Vladimir Ilich Lenin’s Mausoleum remains intact, as do many dreary five-story apartment buildings from the era of Nikita Khrushchev’s rule (the mid-1950s to the mid-1960s), yet glitzy automobiles and Western-style supermarkets, casinos, and nightclubs are equally visible. Many Orthodox churches, as well as some synagogues and mosques, have been restored, Moscow’s novel theatres have reclaimed leadership in the dramatic arts, and traditional markets have been revived and expanded. These markets, which under the Soviets were known as kolkhoz (collective-farm) markets and sold mainly crafts and produce, are now more sophisticated retail establishments."/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cardm;
