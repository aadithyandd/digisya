import React from "react";
import "./App.css";
import leaf from "./leaf.png";
import curry1 from "./curry1.png";
import curry2 from "./curry2.png";
import curry3 from "./curry3.png";
import curry4 from "./curry4.png";
import chips from "./chips.png";
import banana from "./paz.png";
import varatti from "./varatti.png";
import curry5 from "./curry5.png";
import rice from "./rice.png";
import curry6 from "./beetroot.png";
import curry7 from "./beans_thoran.png"
import curry8 from "./avial.png";
import curry9 from "./ersh.png";
import curry10 from "./koot.png";
import curry11 from "./sambar.png";
import curry12 from "./parippu.png";
import pap from "./papa.png";
import curry13 from "./rasam.png";
import curry14 from "./moru.png";
import payasam from "./payasam.png";
import boli from "./boli.png";
import PP from "./PP.png";
import logo from "./logo.png";
import curry15 from "./puli.png";
import ondago from "./ondagoo.png";

import { useEffect } from "react";

function inji_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Inji Curry <br/> <br/> Ingredients: Ginger, Tamarind, Jaggery, Mustard Seeds, Curry Leaves, Red Chilies, Turmeric, Salt";
  DCS.innerHTML = "Inji curry (ginger curry) in a Sadhya holds cultural significance as it is served first, symbolizing the balance of flavors in life—its sharp, tangy-sweet taste is believed to prepare the palate and aid digestion for the grand feast ahead.";
  dishinfo.appendChild(DCS);
}
function lemon_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Lemon Pickle <br/> <br/> Ingredients: Lemon, Salt, Red Chili Powder, Turmeric, Mustard Seeds, Fenugreek Seeds, Asafoetida, Curry Leaves, Oil";
  DCS.innerHTML = "Lemon pickle in a Sadhya represents the vibrant and diverse flavors of Kerala cuisine. Its tangy and spicy profile complements the variety of dishes served, enhancing the overall dining experience and symbolizing the zest for life and celebration.";
  dishinfo.appendChild(DCS);
}
function mango_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Mango Pickle <br/> <br/> Ingredients: Raw Mango, Salt, Red Chili Powder, Turmeric, Mustard Seeds, Fenugreek Seeds, Asafoetida, Curry Leaves, Oil";
  DCS.innerHTML = "Mango Pickle in a Sadhya is culturally significant as it embodies the essence of Kerala's culinary heritage. Its tangy and spicy flavor profile complements the rich and diverse dishes of the feast, symbolizing the balance of tastes and the celebration of local produce.";
  dishinfo.appendChild(DCS);
}
function WK_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: White Curd Khichdi  <br/> <br/> Ingredients: Rice, Moong Dal, Curd, Ginger, Green Chilies, Mustard Seeds, Curry Leaves, Coconut Oil, Salt";
  DCS.innerHTML = "White Curd Khichdi in a Sadhya holds cultural significance as it represents simplicity and comfort amidst the elaborate feast. Its mild and soothing flavors provide a balance to the spicier dishes, symbolizing harmony and the importance of wholesome nourishment in Kerala's culinary traditions.";
  dishinfo.appendChild(DCS);
}
function chips_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Banana Chips  <br/> <br/> Ingredients: Raw Banana, Salt, Turmeric, Coconut Oil";
  DCS.innerHTML = "Banana Chips in a Sadhya holds cultural significance as a traditional snack that reflects Kerala's agricultural heritage. Made from locally grown raw bananas, these crispy chips symbolize the region's connection to its land and the importance of utilizing local produce in festive celebrations.";
  dishinfo.appendChild(DCS);
}
function B_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Banana  <br/> <br/> Ingredients: Ripe Banana";
  DCS.innerHTML = "Banana in a Sadhya holds cultural significance as it is considered a sacred fruit in Kerala's traditions. Often served at the end of the meal, it symbolizes prosperity and good fortune, and its natural sweetness provides a refreshing conclusion to the elaborate feast.";
  dishinfo.appendChild(DCS);
}
function VRT_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Charkara Varatti <br/> <br/> Ingredients: Raw Banana, Jaggery, Coconut, Cardamom, Ghee";
  DCS.innerHTML = "Charkara Varatti in a Sadhya holds cultural significance as a traditional sweet dish that showcases the rich culinary heritage of Kerala. Made from locally sourced ingredients like raw bananas and jaggery, it symbolizes the region's agricultural abundance and the importance of celebrating local flavors during festive occasions.";
  dishinfo.appendChild(DCS);
}
function CT_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Cabbage Thoran <br/> <br/> Ingredients: Cabbage, Grated Coconut, Green Chilies, Mustard Seeds, Curry Leaves, Turmeric, Salt";
  DCS.innerHTML = "Cabbage Thoran in a Sadhya holds cultural significance as it represents the traditional vegetarian dishes of Kerala cuisine. This simple yet flavorful dish, made with locally sourced cabbage and coconut, symbolizes the region's agricultural heritage and the importance of incorporating fresh, seasonal produce into festive meals.";
  dishinfo.appendChild(DCS);
}
function rice_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Rice <br/> <br/> Ingredients: Matta Rice";
  DCS.innerHTML = "Rice in a Sadhya holds immense cultural significance as it is the staple food of Kerala and forms the foundation of the feast. Traditionally served on a banana leaf, rice symbolizes prosperity, sustenance, and the agrarian roots of the region, reflecting the importance of rice cultivation in Kerala's history and culture.";
  dishinfo.appendChild(DCS);
}
function BTK_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Beetroot Kichidi <br/> <br/> Ingredients: Beetroot, Rice, Moong Dal, Ginger, Green Chilies, Mustard Seeds, Curry Leaves, Coconut Oil, Salt";
  DCS.innerHTML = "Betroot kichidi in a Sadhya holds cultural significance as it represents the vibrant and diverse flavors of Kerala cuisine. Its earthy sweetness and colorful appearance add visual appeal to the feast, symbolizing the celebration of local produce and the importance of incorporating a variety of vegetables into traditional meals.";
  dishinfo.appendChild(DCS);
}
function BT_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Beetroot Thoran <br/> <br/> Ingredients: Beetroot, Grated Coconut, Green Chilies, Mustard Seeds, Curry Leaves, Turmeric, Salt";
  DCS.innerHTML = "Beetroot Thoran in a Sadhya holds cultural significance as it showcases the traditional vegetarian dishes of Kerala cuisine. This colorful and nutritious dish, made with locally sourced beetroot and coconut, symbolizes the region's agricultural heritage and the importance of incorporating fresh, seasonal produce into festive meals.";
  dishinfo.appendChild(DCS);
}
function avial_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Avial <br/> <br/> Ingredients: Mixed Vegetables, Grated Coconut, Green Chilies, Curd, Coconut Oil, Curry Leaves, Mustard Seeds, Turmeric, Salt";
  DCS.innerHTML = "Avial in a Sadhya holds immense cultural significance as it is considered one of the quintessential dishes of Kerala cuisine. This mixed vegetable curry, made with a variety of locally sourced vegetables and coconut, symbolizes the harmony of flavors and the importance of vegetarianism in traditional Kerala meals, reflecting the region's agricultural abundance and culinary heritage.";
  dishinfo.appendChild(DCS);
}

function ERSH_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Eresshery <br/> <br/> Ingredients: Elephant Foot Yam, Grated Coconut, Green Chilies, Mustard Seeds, Curry Leaves, Turmeric, Salt";
  DCS.innerHTML = "Eresshery in a Sadhya holds cultural significance as it represents the traditional vegetarian dishes of Kerala cuisine. This unique and flavorful dish, made with locally sourced elephant foot yam and coconut, symbolizes the region's agricultural heritage and the importance of incorporating diverse vegetables into festive meals.";
  dishinfo.appendChild(DCS);
}
function koot_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Kootu Curry <br/> <br/> Ingredients: Vegetables, Kala chana / black chickpeas, Grated Coconut, Green Chilies, Mustard Seeds, Curry Leaves, Turmeric, Salt, Coconut oil";
  DCS.innerHTML = "Kootu Curry in a Sadhya holds cultural significance as it represents the traditional vegetarian dishes of Kerala cuisine. This hearty and flavorful dish, made with a variety of vegetables and legumes, symbolizes the region's agricultural heritage and the importance of incorporating diverse ingredients into festive meals.";
  dishinfo.appendChild(DCS);
}
function sambar_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Sambar <br/> <br/> Ingredients: Toor Dal, Tamarind, Mixed Vegetables, Mustard Seeds, Curry Leaves, Dry Red Chilies, Turmeric, Sambar Powder, Salt, Coconut Oil";
  DCS.innerHTML = "Sambar in a Sadhya holds immense cultural significance as it is a staple dish in Kerala cuisine, symbolizing the rich culinary heritage of the region. This flavorful lentil-based stew, made with a variety of vegetables and tamarind, represents the balance of flavors and the importance of wholesome nourishment in traditional Kerala meals.";
  dishinfo.appendChild(DCS);
}
function parip_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Parippu Curry <br/> <br/> Ingredients: Moong dal, Grated coconut, Green chilies, Cumin seeds, Turmeric powder, Salt, Water, Coconut oil, Mustard seeds, Curry leaves, Dry red chili";
  DCS.innerHTML = "Parippu Curry in a Sadhya holds cultural significance as it represents the traditional vegetarian dishes of Kerala cuisine. This simple yet flavorful lentil curry, made with locally sourced moong dal and coconut, symbolizes the region's agricultural heritage and the importance of incorporating wholesome, protein-rich foods into festive meals.";
  dishinfo.appendChild(DCS);
}
function pap_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Pappadam <br/> <br/> Ingredients: Urad Dal, Salt, Water, Oil for frying";
  DCS.innerHTML = "Pappadam in a Sadhya holds cultural significance as it is a traditional accompaniment that enhances the overall dining experience. Its crispy texture and savory flavor provide a delightful contrast to the other dishes, symbolizing the importance of variety and balance in Kerala's culinary traditions.";
  dishinfo.appendChild(DCS);
}
function rasam_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Rasam <br/> <br/> Ingredients: Tamarind, Tomato, Toor Dal, Mustard Seeds, Curry Leaves, Dry Red Chilies, Garlic, Black Pepper, Coriander, Cumin Seeds, Turmeric, Salt, Water, Cilantro";
  DCS.innerHTML = "Rasam in a Sadhya holds immense cultural significance as it is a traditional South Indian soup that aids digestion and enhances the flavors of the meal. Its tangy and spicy profile, made with tamarind, tomatoes, and a blend of spices, symbolizes the balance of tastes and the importance of wholesome nourishment in Kerala's culinary heritage.";
}
function moru_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Moru <br/> <br/> Ingredients: Curd, Water, Green Chilies, Ginger, Mustard Seeds, Curry Leaves, Dry Red Chilies, Coconut Oil, Salt";
  DCS.innerHTML = "Moru in a Sadhya holds cultural significance as it is a traditional buttermilk-based dish that aids digestion and provides a refreshing contrast to the rich flavors of the feast. Its cooling properties and mild taste symbolize balance and the importance of wholesome nourishment in Kerala's culinary traditions.";
}
function payasam_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Semiya Payasam <br/> <br/> Ingredients: Vermicelli, Milk, Sugar, Ghee, Cashews, Raisins, Cardamom";
  DCS.innerHTML = "Semiya Payasam in a Sadhya holds immense cultural significance as it is a traditional dessert that symbolizes the sweetness of life and the joy of celebration. Made with vermicelli, milk, and sugar, this rich and creamy dish is often served at the end of the feast, representing prosperity and the culmination of the festive meal.";
}
function boli_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Boli <br/> <br/> Ingredients: Maida, Jaggery, Coconut, Cardamom, Ghee";
  DCS.innerHTML = "Boli in a Sadhya holds cultural significance as a traditional sweet dish that showcases the rich culinary heritage of Kerala. Made from locally sourced ingredients like maida and jaggery, it symbolizes the region's agricultural abundance and the importance of celebrating local flavors during festive occasions.";
}
function PP_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Parippu Payasam <br/> <br/> Ingredients: Moong Dal, Jaggery, Coconut Milk, Cardamom, Ghee";
  DCS.innerHTML = "Parippu Payasam in a Sadhya holds immense cultural significance as it is a traditional dessert that symbolizes the sweetness of life and the joy of celebration. Made with moong dal, jaggery, and coconut milk, this rich and creamy dish is often served at the end of the feast, representing prosperity and the culmination of the festive meal.";
}
function logo_in() {
  const HDI = document.getElementById("HDI");
  const HCS = document.getElementById("HCS");
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  HDI.innerHTML = "Team";
  HCS.innerHTML = "Team Members";
  DN.innerHTML = "ONDAGO presents <br/> <br/> Digisya, a digital sadhya";
  DCS.innerHTML = "-Aditya Nair, Aadithyan.D";
}
function ODG_in() {
  const HDI = document.getElementById("HDI");
  const HCS = document.getElementById("HCS");
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  HDI.innerHTML = "Team";
  HCS.innerHTML = "";
  DN.innerHTML = "ONDAGO <br/> <br/> ON THE GOO!";
  DCS.innerHTML = "";
}
function puli_in() {
  const DCS = document.getElementById("DCS");
  const dishinfo = document.getElementById("dishinfo");
  const DN = document.getElementById("DN");
  dishinfo.classList.add("show");
  DN.innerHTML = "Dish: Pullissery <br/> <br/> Ingredients: Curd / Yogurt, Water, Turmeric powder, Salt";
  DCS.innerHTML = "Pullissery in a Sadhya holds a quiet but important place in the Kerala Sadhya, not just as a dish but as a symbol of balance and completeness.";
  dishinfo.appendChild(DCS);
}
function inji_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function lemon_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function mango_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function WK_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function chips_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function B_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function VRT_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function CT_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function rice_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function BTK_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function BT_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function avial_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function ERSH_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function koot_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function sambar_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function parip_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function pap_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function rasam_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function moru_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function payasam_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function boli_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function PP_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function puli_out() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function logo_out() {
  const HDI = document.getElementById("HDI");
  const HCS = document.getElementById("HCS");
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
  HDI.innerHTML = "Dish info";
  HCS.innerHTML = "Cultural Significance";
}
function ODG_out() {
  const HDI = document.getElementById("HDI");
  const HCS = document.getElementById("HCS");
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
  HDI.innerHTML = "Dish info";
  HCS.innerHTML = "Cultural Significance";
}
document.addEventListener("mousemove", (e) => {
  const dishinfo = document.getElementById("dishinfo");
  if (dishinfo.classList.contains("show")) {
    dishinfo.style.left = e.pageX + 30 + "px";
    dishinfo.style.top = e.pageY + -200 + "px";
  }
});

function load() {
  const dishinfo = document.getElementById("dishinfo");
  dishinfo.classList.remove("show");
}
function App() {

  useEffect(() => {
    console.log("deployed");
    myFunction();
  }, []);

  const myFunction = () => {
    load();
  };
  return (

    <div className="app">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Libertinus+Keyboard&display=swap');
      </style>
      <h1 className="title">Digital Sadhya</h1><br /><br />
      <center><p className="SDINFO">Sadhya is the traditional vegetarian feast of Kerala, most famously prepared during Onam and other festive occasions. Served on a banana leaf, it is a grand meal featuring over 20–30 dishes that together represent the six tastes—sweet, sour, salty, bitter, pungent, and astringent.

The dishes include rice, curries like sambar, parippu, avial, pulissery, olan, side dishes like thoran, pachadi, kichadi, crispy upperi and pappadam, tangy pickles, and a variety of payasams for dessert. Each item is placed in a specific order on the banana leaf, reflecting ritual and cultural tradition.

More than just food, Sadhya is a symbol of community, prosperity, and harmony with nature, showcasing Kerala’s agricultural abundance and culinary heritage.</p></center> <br/>
      <div className="leafContainer">
        <img src={leaf} alt="Banana Leaf" className="leaf" />

        <img src={curry1} alt="Curry 1" className="curry curry1" onMouseOver={inji_in} onMouseOut={inji_out} />
        <img src={curry2} alt="Curry 2" className="curry curry2" onMouseOver={lemon_in} onMouseOut={lemon_out} />
        <img src={curry3} alt="Curry 3" className="curry curry3" onMouseOver={mango_in} onMouseOut={mango_out} />
        <img src={curry4} alt="Curry 4" className="curry curry4" onMouseOver={WK_in} onMouseOut={WK_out} />
        <img src={chips} alt="Chips" className="chips" onMouseOver={chips_in} onMouseOut={chips_out} />
        <img src={banana} alt="Banana" className="banana" onMouseOver={B_in} onMouseOut={B_out} />
        <img src={varatti} alt="Varatti" className="varatti" onMouseOver={VRT_in} onMouseOut={VRT_out} />
        <img src={curry5} alt="Curry 5" className="curry curry5" onMouseOver={CT_in} onMouseOut={CT_out} />
        <img src={rice} alt="rice" className="curry rice" onMouseOver={rice_in} onMouseOut={rice_out} />
        <img src={curry6} alt="Curry 6" className="curry curry6" onMouseOver={BTK_in} onMouseOut={BTK_out} />
        <img src={curry7} alt="Curry 7" className="curry curry7" onMouseOver={BT_in} onMouseOut={BT_out} />
        <img src={curry8} alt="Curry 8" className="curry curry8" onMouseOver={avial_in} onMouseOut={avial_out} />
        <img src={curry9} alt="Curry 9" className="curry curry9" onMouseOver={ERSH_in} onMouseOut={ERSH_out} />
        <img src={curry10} alt="Curry 10" className="curry curry10" onMouseOver={koot_in} onMouseOut={koot_out} />
        <img src={curry11} alt="Curry 11" className="curry curry11" onMouseOver={sambar_in} onMouseOut={sambar_out} />
        <img src={curry12} alt="Curry 12" className="curry curry12" onMouseOver={parip_in} onMouseOut={parip_out} />
        <img src={pap} alt="Papadum" className="curry pap" onMouseOver={pap_in} onMouseOut={pap_out} />
        <img src={curry13} alt="Curry 13" className="curry curry13" onMouseOver={rasam_in} onMouseOut={rasam_out} />
        <img src={curry14} alt="Curry 15" className="curry curry14" onMouseOver={moru_in} onMouseOut={moru_out} />
        <img src={payasam} alt="payasam" className="curry payasam" onMouseOver={payasam_in} onMouseOut={payasam_out} />
        <img src={boli} alt="boli" className="curry boli" onMouseOver={boli_in} onMouseOut={boli_out} />
        <img src={PP} alt="payasam" className="curry PP" onMouseOver={PP_in} onMouseOut={PP_out} />
        <img src={logo} alt="logo" className="logo1 logo" onMouseOver={logo_in} onMouseOut={logo_out} />
        <img src={curry15} alt="curry15" className="curry curry15" onMouseOver={puli_in} onMouseOut={puli_out} />
        <img src={ondago} alt="logo-2" className="logo1 ondago" onMouseOver={ODG_in} onMouseOut={ODG_out} />

      </div>
      <p>Thank you.</p>
      <div className="dishinfo" id="dishinfo">
        <h2 id="HDI">Dish info</h2>
        <p id="DN"></p>
        <h2 id="HCS">Cultural Significance</h2>
        <p id="DCS"></p>
      </div>
    </div>
  );
}

export default App;
