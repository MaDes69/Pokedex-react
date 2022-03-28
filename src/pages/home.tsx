import { url } from 'inspector';
import React, { FunctionComponent } from 'react';
import Marquee from "react-fast-marquee";
import './home.css';
  
const Home: FunctionComponent = () => {
   
  return (

    <div className="container">
        {/* section 1 titre image  */}
        <div>
           
        <Marquee  className="marquee">
            <div className="marquee__inner"> 
               <span>ʕノ•ᴥ•ʔノ︵ </span>
               <span>Pokémon</span>
               <span>ʕノ•ᴥ•ʔノ︵</span>
               <span>Pokémon</span>
               <span>ʕノ•ᴥ•ʔノ︵ </span>
               <span>Pokémon</span>
               <span>ʕノ•ᴥ•ʔノ︵ </span>
               <span>Pokémon</span>
               <span>ʕノ•ᴥ•ʔノ︵ </span>
            </div>
        </Marquee>

         <div className="banner">
         
            <div className="left">
                <p>Pokemon Cards<div className="tiret"></div></p>
                <h1>Catch em ! Collect your rarest and strongest Pokemon</h1>
                <p>Catch all of Pokémon Card Officially Licensed NFTs.</p>
                <button><p>Catch my collection</p></button>
                
                {/* <div className="wrapper">      
                     <div className="round" id="layer-3">
                         <div className="textbox">
                            <h1 className="clip-text" id="text_7" data-text="作業">作業</h1>
                            <h1 className="clip-text" id="text_8">作業</h1>
                         </div>
                       </div>
                       <img className="man" src="images/pokeball.png" id="layer-4"/>
             </div> */}
                {/* <button style={{ backgroundImage: "url(images/pokeball.png)", backgroundRepeat:"no-repeat", backgroundSize:"contain"}}></button> */}
                
            </div>
            <div className="right">
                <img src="images/magicarpe.png" alt="bubu" />
                {/* <div className="texte_centrer"></div> */}
            </div>
          </div>
        </div>
    
   {/* Section 2 bouton et starter */}
   <Marquee  className="marquee">
            <div className="marquee__inner"> 
               <span>Choose Your Starter</span>
               <span>GEN 1</span>
               <span>Choose Your Starter</span>
               <span>GEN 1</span>
               <span>Choose Your Starter</span>
               <span>GEN 1</span>
               <span>Choose Your Starter</span>
               <span>GEN 1</span>

            </div>
        </Marquee>



        {/* <div className="choose">
              <div className="left_section_2"> 

                   <div className="spec">  
                      <a className="item" ><img src="images/Salamèche.gif" alt='salameche'></img>
                      <p>kkkkkk</p>
                      </a>
                      
                    </div>
                    <div className="spec">
                       <a className="item" ><img src="images/CarapuceNap.gif" alt='salameche'></img>
                       <p>kkkkkk</p></a>
                    </div>
                    
                    <div className="spec">
                       <a className="item" ><img src="images/Bulbizarre.gif" alt='salameche'></img>
                       <p>kkkkkk</p>
                       </a>
                    </div> 
              </div>
        </div> */}


 <div className="main_1">

        {/* 1 toggle */}
        <div className="tab-container">
                                <div className="tab-accordian">
                                          <div className="titleWrapper inactive">
                                          <a className="picture" ><img src="images/CarapuceNap.gif" alt='salameche'></img></a>
                                                           <div className="collapse-icon">
                                                                <div className="acc-close"></div>
                                                                <div className="acc-open"></div>
                                                            </div>
                                          </div>
                                    <div id="descwrapper" className="desWrapper">
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci harum excepturi quis voluptas autem..</p><br></br>
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, officiis. :</p>
                                                    <ul>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                     
                                                    </ul>
                                         
                                    </div>
                                </div>
                            </div>

  {/* 2 toggle */}
        <div className="tab-container">
                                <div className="tab-accordian">
                                          <div className="titleWrapper inactive">
                                          <a className="picture" ><img src="images/Salamèche.gif" alt='salameche'></img></a>
                                                           <div className="collapse-icon">
                                                                <div className="acc-close"></div>
                                                                <div className="acc-open"></div>
                                                            </div>
                                          </div>
                                    <div id="descwrapper" className="desWrapper">
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci harum excepturi quis voluptas autem..</p><br></br>
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, officiis. :</p>
                                                    <ul>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                     
                                                    </ul>
                                         
                                    </div>
                                </div>
                            </div>
{/* 3 toggle */}
<div className="tab-container">
                                <div className="tab-accordian">
                                          <div className="titleWrapper inactive">
                                          <a className="picture" ><img src="images/Bulbizarre.gif" alt='salameche'></img></a>
                                                           <div className="collapse-icon">
                                                                <div className="acc-close"></div>
                                                                <div className="acc-open"></div>
                                                            </div>
                                          </div>
                                    <div id="descwrapper" className="desWrapper">
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci harum excepturi quis voluptas autem..</p><br></br>
                                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, officiis. :</p>
                                                    <ul>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                                                          <li className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis ipsum ratione dolores adipisci ab aperiam necessitatibus fuga itaque! Ad non quia consequuntur sequi earum?</li>
                     
                                                    </ul>
                                         
                                    </div>
                                </div>
                            </div>
                      </div>



     {/* parallax test */}

     
  
     

   </div>
  
  );
}
   
export default Home;