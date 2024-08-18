import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/FruitsAndVegetables/${imageName}`);
  } catch (error) {
    return null;
  }
};

const FruitsAndVegetablesPage: React.FC = () => {
  const { addProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');
  
  const initialFruits = [
    {
      name: "בננה<br/>1 קילו",
      image: importImage(`banana.jpeg`),
      id: 1,
    },
    {
      name: "אבטיח<br/>1 קילו",
      image: importImage(`watermelon.jpeg`),
      id: 1,
    },
    {
      name: "מלון<br/>1 קילו",
      image: importImage(`melon.jpeg`),
      id: 1,
    },
    {
      name: "תפוח עץ פינק ליידי<br/>1 קילו",
      image: importImage(`crisp_pink_apple.jpeg`),
      id: 1,
    },
    {
      name: "תפוח עץ גאלה<br/>1 קילו",
      image: importImage(`gala_apple.jpeg`),
      id: 1,
    },
    {
      name: "תפוח עץ זהוב<br/>1 קילו",
      image: importImage(`golden_apple.jpeg`),
      id: 1,
    },
    {
      name: "תפוח עץ חרמון<br/>1 קילו",
      image: importImage(`hermon_apple.jpeg`),
      id: 1,
    },
    {
      name: "תפוח עץ יונתן<br/>1 קילו",
      image: importImage(`jonathan_apple.jpeg`),
      id: 1,
    },
    {
      name: "תפוח עץ סמיט<br/>1 קילו",
      image: importImage(`smith_apple.jpeg`),
      id: 1,
    },
    {
      name: "אגס תפוח<br/>1 קילו",
      image: importImage(`pear_apple.jpeg`),
      id: 1,
    },
    {
      name: "אגס אדום<br/>1 קילו",
      image: importImage(`red_pear.jpeg`),
      id: 1,
    },
    {
      name: "אגס ספדונה<br/>1 קילו",
      image: importImage(`sapdona_pear.jpeg`),
      id: 1,
    },
    {
      name: "קיווי<br/>1 קילו",
      image: importImage(`kiwi.png`),
      id: 1,
    },
    {
      name: "נקטרינה אדומה<br/>1 קילו",
      image: importImage(`red_nectarine.jpeg`),
      id: 1,
    },
    {
      name: "נקטרינה לבנה<br/>1 קילו",
      image: importImage(`white_nectarine.jpeg`),
      id: 1,
    },
    {
      name: "אפרסק לבן<br/>1 קילו",
      image: importImage(`white_peach.jpeg`),
      id: 1,
    },
    {
      name: "אפרסק צהוב<br/>1 קילו",
      image: importImage(`yellow_peach.jpeg`),
      id: 1,
    },
    {
      name: "מנגו מאיה<br/>1 קילו",
      image: importImage(`maya_mango.jpeg`),
      id: 1,
    },
    {
      name: "שזיף ירוק<br/>1 קילו",
      image: importImage(`green_plum.jpeg`),
      id: 1,
    },
    {
      name: "שזיף סנטה רוזה<br/>1 קילו",
      image: importImage(`santa_rosa_plum.jpeg`),
      id: 1,
    },
    {
      name: "שזיף שחור<br/>1 קילו",
      image: importImage(`black_plum.jpeg`),
      id: 1,
    },
    {
      name: "תפוז<br/>1 קילו",
      image: importImage(`orange.jpeg`),
      id: 1,
    },
    {
      name: "פפאיה<br/>1 קילו",
      image: importImage(`papaya.jpeg`),
      id: 1,
    },
  ];

const initialVegetables = [
    {
      name: "לימון<br/>1 קילו",
      image: importImage(`lemon.jpeg`),
      id: 1,
    },
    {
      name: "אבוקדו<br/>1 קילו",
      image: importImage(`avocado.jpeg`),
      id: 1,
    },
    {
      name: "לימון ליים<br/>1 קילו",
      image: importImage(`lemon_lime.jpeg`),
      id: 1,
    },
    { 
      name: "מלפפון<br/>1 קילו",
      image: importImage(`cucamber.jpeg`),
      id: 1,
    },
    {
      name: "עגבניה<br/>1 קילו",
      image: importImage(`tomato.jpeg`), 
      id: 1,
    },
    { 
      name: "עגבניות שרי<br/>1 קילו",
      image: importImage(`cherry_tomato.jpeg`),
      id: 1,
    },
    {
      name: "בצל אדום<br/>1 קילו",
      image: importImage(`red_onion.jpeg`),
      id: 1,
    },
    {
      name: "בצל יבש<br/>1 קילו",
      image: importImage(`dry_onion.jpeg`),
      id: 1,
    },
    {
      name: "כרישה<br/>1 קילו",
      image: importImage(`leek.jpeg`),
      id: 1,
    },
    {
      name: "גזר<br/>1 קילו",
      image: importImage(`carrot.jpeg`),
      id: 1,
    },
    {
      name: "חציל<br/>1 קילו",
      image: importImage(`eggplant.jpeg`),
      id: 1,
    },
    {
      name: "חציל בלדי<br/>1 קילו",
      image: importImage(`baladi_eggplant.jpeg`),
      id: 1,
    },
    {
      name: "כרוב אדום<br/>1 קילו",
      image: importImage(`red_cabbage.jpeg`),
      id: 1,
    },
    {
      name: "כרוב לבן<br/>1 קילו",
      image: importImage(`white_cabbage.jpeg`),
      id: 1,
    },
    {
      name: "כרובית<br/>1 קילו",
      image: importImage(`cauliflower.jpeg`),
      id: 1,
    },
    {
      name: "פלפל חריף ירוק<br/>1 קילו",
      image: importImage(`green_hot_pepper.jpeg`),
      id: 1,
    },
    {
      name: "פלפל אדום<br/>1 קילו",
      image: importImage(`red_pepper.jpeg`),
      id: 1,
    },
    {
      name: "פלפל ירוק<br/>1 קילו",
      image: importImage(`green_pepper.jpeg`),
      id: 1,
    },
    {
      name: "פלפל צהוב<br/>1 קילו",
      image: importImage(`yellow_pepper.jpeg`),
      id: 1,
    },
    {
      name: "סלק אדום<br/>1 קילו",
      image: importImage(`red_beet.jpeg`),
      id: 1,
    },
    {
      name: "קולורבי<br/>1 קילו",
      image: importImage(`kohlrabi.jpeg`),
      id: 1,
    },
    {
      name: "שומר<br/>1 קילו",
      image: importImage(`fennel.jpeg`),
      id: 1,
    },
    {
      name: "קישוא<br/>1 קילו",
      image: importImage(`zucchini.jpeg`),
      id: 1,
    },
    {
      name: "שעועית הילדה<br/>1 קילו",
      image: importImage(`hilada_bean.jpeg`),
      id: 1,
    },
    {
      name: "שעועית ירוקה<br/>1 קילו",
      image: importImage(`green_bean.jpeg`),
      id: 1,
    },
    {
      name: "דלורית<br/>1 קילו",
      image: importImage(`butternut_squash.jpeg`),
      id: 1,
    },
    {
      name: "דלעת הספגטי<br/>1 קילו",
      image: importImage(`spaghetti_squash.jpeg`),
      id: 1,
    },
    {
      name: "דלעת חתוכה<br/>1 קילו",
      image: importImage(`cut_pumpkin.jpeg`),
      id: 1,
    },
    {
      name: "דלעת ערמונים<br/>1 קילו",
      image: importImage(`acorn_squash.jpeg`),
      id: 1,
    },
    {
      name: "בטטה<br/>1 קילו",
      image: importImage(`sweet_potato.jpeg`),
      id: 1,
    },
    {
      name: "תפוח אדמה אדום<br/>1 קילו",
      image: importImage(`red_potato.jpeg`),
      id: 1,
    },
  ];

  const initialPackagedpickedvegetables = [
    { 
      name: "חסה לאליק",
      image: importImage('lettuce_hydroponic_dahan.png'),
      id: 1,
    },
    { 
      name: "חסה סלנובה", 
      image: importImage('salanova_hydroponic_dahan.png'),
      id: 1,
    },
    {
      name: "ברוקולי<br/>1 קילו",
      image: importImage('broccoli.jpg'),
      id: 1,
    },
    { 
      name: "אספרגוס<br/>1 קילו",
      image: importImage('asparagus.jpg'),
      id: 1,
    },
    { 
      name: "בצל ירוק<br/>1 קילו", 
      image: importImage('green_onion.jpg'),
      id: 1,
    },
    { 
      name: "גזר<br/>מארז", 
      image: importImage('carrot_pack.jpg'),
      id: 1,
    },
    {
      name: "חטיפי מלפפונים", 
      image: importImage('snack_cucumber.jpg'),
      id: 1,
    },
    {
      name: "חסה ערבית", 
      image: importImage('arabic_lettuce.jpg'),
      id: 1,
    },
    { 
      name: "סלרי אמריקאי<br/>1 קילו",
      image: importImage('american_celery.jpg'),
      id: 1,
    },
    { 
      name: "סלק עלים/מנגולד", 
      image: importImage('chard.jpg'),
      id: 1,
    },
    { 
      name: "ראש סלרי<br/>1 קילו", 
      image: importImage('celery_head.jpg'),
      id: 1,
    },
    { 
      name: "שורש פטרוזיליה", 
      image: importImage('parsley_root.jpg'),
      id: 1,
    },
    { 
      name: "צנונית<br/>1 קילו",
      image: importImage('radish_pack.jpg'),
      id: 1,
    },
    { 
      name: "שום יבש<br/>1 קילו",
      image: importImage('dry_garlic_pack.jpg'),
      id: 1,
    },
    { 
      name: "סלרי<br/>1 קילו", 
      image: importImage('israeli_celery.jpg'),
      id: 1,
    },
    { 
      name: "אנדיב (עולש)", 
      image: importImage('endive.jpg'),
      id: 1,
    },
    { 
      name: "תירס", 
      image: importImage('packed_corn.jpg'),
      id: 1,
    },
    { 
      name: "בצלצלי שאלוט",
      image: importImage('shallot.jpg'),
      id: 1,
    },
    { 
      name: "חסה סלנובה",
      image: importImage('salanova_lettuce.jpg'),
      id: 1,
    },
    { 
      name: "תפוח אדמה לבן<br/>מארז", 
      image: importImage('white_potato_pack.jpg'),
      id: 1,
    },
    { 
      name: "עלי קייל<br/>1 קילו",
      image: importImage('kale.jpg'),
      id: 1,
    },
    { 
      name: "תפוח אדמה אדום<br/>מארז",
      image: importImage('red_potato_pack.jpg'),
      id: 1,
    },
    { 
      name: "פאקצ'וי<br/>1 קילו", 
      image: importImage('packed_pak_choi.jpg'),
      id: 1,
    },
    { 
      name: "תרד<br/>1 קילו", 
      image: importImage('packed_nz_spinach.jpg'),
      id: 1,
    },
    { 
      name: "עלי בייבי", 
      image: importImage('baby_leaves.jpg'),
      id: 1,
    },
    { 
      name: "עלי רוקט", 
      image: importImage('rocket_leaves.jpg'),
      id: 1,
    },
    { 
      name: "תרד בייבי",
      image: importImage('baby_spinach.jpg'),
      id: 1,
    },
    { 
      name: "חומוס מבושל", 
      image: importImage('cooked_chickpeas.jpg'),
      id: 1,
    },
    { 
      name: "חטיפוני גזר", 
      image: importImage('carrot_snacks.jpg'),
      id: 1,
    },
    { 
      name: "לבבות קיסר", 
      image: importImage('caesar_hearts.jpg'),
      id: 1,
    },
    { 
      name: "סלק אדום מבושל<br/>1 קילו", 
      image: importImage('vacuum_packed_red_beet.jpg'),
      id: 1,
    },
    { 
      name: "עדשים ירוקות מבושלות<br/>1 קילו", 
      image: importImage('cooked_green_lentils.jpg'),
      id: 1,
    },
    { 
      name: "פלפלונים<br/>1 קילו", 
      image: importImage('mini_peppers.jpg'),
      id: 1,
    },
    { 
      name: "רוקולה<br/>1 קילו",
      image: importImage('arugula.jpg'),
      id: 1,
    },
    { 
      name: "שעועית אדומה מבושלת<br/>1 קילו", 
      image: importImage('cooked_red_beans.jpg'),
      id: 1,
    },
  ];

  const initialHerbssproutsmushrooms = [
    {
      name: "ג'ינג'ר<br/>1 קילו", 
      image: importImage('ginger.jpg'),
      id: 1,
    },
    { 
      name: "פטריות שמפניון<br/>1 קילו", 
      image: importImage('champignon_mushrooms.jpg'),
      id: 1,
    },
    { 
      name: "פטריות פורטבלו<br/>1 קילו",
      image: importImage('portobello_mushrooms.jpg'),
      id: 1,
    },
    {
      name: "עגבניות מיובשות<br/>1 קילו", 
      image: importImage('sun_dried_tomatoes.jpg'),
      id: 1,
    },
    {
      name: "פטריות מלך היער<br/>1 קילו", 
      image: importImage('king_oyster_mushrooms.jpg'),
      id: 1,
    },
    {
      name: "נבטי אלפלפא", 
      image: importImage('alfalfa_sprouts.jpg'),
      id: 1,
    },
    {
      name: "נבטי חמניה", 
      image: importImage('sunflower_sprouts.jpg'),
      id: 1,
    },
    { 
      name: "נבטוטים<br/>1 קילו",
      image: importImage('sprouts.jpg'),
      id: 1,
    },
    {
      name: "פטריות שמפיניון<br/>מארז", 
      image: importImage('champignon_pack.jpg'),
      id: 1,
    },
    { 
      name: "נבטים סיניים<br/>1 קילו", 
      image: importImage('chinese_sprouts.jpg'),
      id: 1,
    },
    { 
      name: "פטרוזיליה ארוזה", 
      image: importImage('parsley_packed.jpg'),
      id: 1,
    },
    { 
      name: "כוסברה ארוזה", 
      image: importImage('cilantro_packed.jpg'),
      id: 1,
    },
    { 
      name: "בזיליקום ארוז", 
      image: importImage('basil_packed.jpg'),
      id: 1,
    },
    { 
      name: "עירית ארוזה", 
      image: importImage('chives_packed.jpg'),
      id: 1,
    },
    { 
      name: "טימין ארוז", 
      image: importImage('thyme_packed.jpg'),
      id: 1,
    },
    { 
      name: "נענע ארוזה", 
      image: importImage('mint_packed.jpg'),
      id: 1,
    },
    { 
      name: "רוזמרין<br/>1 קילו", 
      image: importImage('rosemary.jpg'),
      id: 1,
    },
    {
      name: "אורגנו ארוז", 
      image: importImage('oregano.jpg'),
      id: 1,
    },
    { 
      name: "גרגיר נחלים<br/>1 קילו", 
      image: importImage('watercress.jpg'),
      id: 1,
    },
    { 
      name: "צרור כוסברה", 
      image: importImage('cilantro_bundle.jpg'),
      id: 1,
    },
    { 
      name: "מארז צמד פטריות איטלקי<br/>1 קילו", 
      image: importImage('italian_mushrooms_pack.jpg'),
      id: 1,
    },
    { 
      name: "מאש מונבט<br/>1 קילו", 
      image: importImage('sprouted_mung_beans.jpg'),
      id: 1,
    },
    { 
      name: "מיקס נבטים<br/>1 קילו", 
      image: importImage('sprouts_mix.jpg'),
      id: 1,
    },
    { 
      name: "מרווה<br/>1 קילו", 
      image: importImage('sage.jpg'),
      id: 1,
    },
    { 
      name: "נבטי אפונה", 
      image: importImage('pea_sprouts.jpg'),
      id: 1,
    },
    { 
      name: "נבטי ברוקולי", 
      image: importImage('broccoli_sprouts.jpg'),
      id: 1,
    },
    { 
      name: "נבטי חמניה", 
      image: importImage('sunflower_sprouts.jpg'),
      id: 1,
    },
    { 
      name: "נבטי חרדל", 
      image: importImage('mustard_sprouts.jpg'),
      id: 1,
    },
    { 
      name: "נבטי צנונית", 
      image: importImage('radish_sprouts.jpg'),
      id: 1,
    },
    { 
      name: "נבטי קייל", 
      image: importImage('kale_sprouts.jpg'),
      id: 1,
    },
    { 
      name: "צרור נענע", 
      image: importImage('mint_bundle.jpg'),
      id: 1,
    },
    { 
      name: "עדשים שחורות מונבטות<br/>1 קילו", 
      image: importImage('sprouted_black_lentils.jpg'),
      id: 1,
    },
    { 
      name: "צרור פטרוזיליה", 
      image: importImage('parsley_bundle.jpg'),
      id: 1,
    },
    { 
      name: "פטריות שי מג'י<br/>1 קילו", 
      image: importImage('shiitake_mushrooms_white.jpg'),
      id: 1,
    },
    { 
      name: "קינואה מונבטת<br/>1 קילו", 
      image: importImage('sprouted_quinoa.jpg'),
      id: 1,
    },
    { 
      name: "שורש כורכום<br/>1 קילו", 
      image: importImage('fresh_turmeric_root.jpg'),
      id: 1,
    },
    { 
      name: "שיני שום קלופות", 
      image: importImage('peeled_garlic_cloves.jpg'),
      id: 1,
    },
    { 
      name: "שמיר ארוז", 
      image: importImage('dill_packed.jpg'),
      id: 1,
    },
    { 
      name: "שמיר צרור", 
      image: importImage('dill_bundle.jpg'),
      id: 1,
    },
  ];

  const initialPackagedfruit = [
    { 
      name: "קיווי ירוק<br/>מארז", 
      image: importImage('green_kiwi.jpg'),
      id: 1,
    },
    { 
      name: "אננס<br/>1 יח׳", 
      image: importImage('pineapple.jpg'),
      id: 1,
    },
    { 
      name: "תפוז<br/>מארז", 
      image: importImage('orange.jpg'),
      id: 1,
    },
    { 
      name: "אוכמניות<br/>מארז", 
      image: importImage('blueberries.jpg'),
      id: 1,
    },
    { 
      name: "דובדבן<br/>מארז", 
      image: importImage('cherries.jpg'),
      id: 1,
    },
    { 
      name: "ליצ'י<br/>מארז", 
      image: importImage('lychee.jpg'),
      id: 1,
    },
    { 
      name: "קיווי סאן גולד<br/>מארז", 
      image: importImage('gold_kiwi.jpg'),
      id: 1,
    },
    { 
      name: "ענבים לבנים<br/>מארז", 
      image: importImage('white_grapes.jpg'),
      id: 1,
    },
    { 
      name: "ענבים שחורים<br/>מארז", 
      image: importImage('black_grapes.jpg'),
      id: 1,
    },
    { 
      name: "תמר מג'הול<br/>מארז", 
      image: importImage('medjool_dates.jpg'),
      id: 1,
    },
  ];

  initialVegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFruits.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPackagedpickedvegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialHerbssproutsmushrooms.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPackagedfruit.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [fruits, setFruits] = useState<{ name: string; image: any; count: number }[]>(
    initialFruits.map(fruit => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === fruit.name);
      return {
        ...fruit,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [vegetables, setVegetables] = useState<{ name: string; image: any; count: number }[]>(
    initialVegetables.map(vegetable => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === vegetable.name);
      return {
        ...vegetable,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [packagedpickedvegetables, setPackagedpickedvegetables] = useState<{ name: string; image: any; count: number }[]>(
    initialPackagedpickedvegetables.map(packagedpickedvegetable => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === packagedpickedvegetable.name);
      return {
        ...packagedpickedvegetable,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [herbssproutsmushrooms, setHerbssproutsmushrooms] = useState<{ name: string; image: any; count: number }[]>(
    initialHerbssproutsmushrooms.map(herbssproutsmushroom => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === herbssproutsmushroom.name);
      return {
        ...herbssproutsmushroom,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [packagedfruit, setPackagedfruit] = useState<{ name: string; image: any; count: number }[]>(
    initialPackagedfruit.map(packagedfruit => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === packagedfruit.name);
      return {
        ...packagedfruit,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const handleIncrement = (name: string) => {
    setFruits(fruits.map(fruit =>  fruit.name === name ? { ...fruit, count: fruit.count + 1 } : fruit )); 

    setVegetables(vegetables.map(vegetable =>   vegetable.name === name ? { ...vegetable, count: vegetable.count + 1 } : vegetable ));

    setPackagedpickedvegetables(packagedpickedvegetables.map(packagedpickedvegetable =>
      packagedpickedvegetable.name === name ? { ...packagedpickedvegetable, count: packagedpickedvegetable.count + 1 } : packagedpickedvegetable ));

    setHerbssproutsmushrooms(herbssproutsmushrooms.map(herbssproutsmushroom => herbssproutsmushroom.name === name ? 
      { ...herbssproutsmushroom, count: herbssproutsmushroom.count + 1 } : herbssproutsmushroom ));  

    setPackagedfruit(packagedfruit.map(packagedfruit => packagedfruit.name === name ? { ...packagedfruit, count: packagedfruit.count + 1 } : packagedfruit ));  
  };

  const handleDecrement = (name: string) => {
    setFruits(fruits.map(fruit =>
      fruit.name === name && fruit.count > 0 ? { ...fruit, count: fruit.count - 1 } : fruit
    ));
    setVegetables(vegetables.map(vegetable =>
      vegetable.name === name && vegetable.count > 0 ? { ...vegetable, count: vegetable.count - 1 } : vegetable
    ));
    setPackagedpickedvegetables(packagedpickedvegetables.map(packagedpickedvegetable =>
      packagedpickedvegetable.name === name && packagedpickedvegetable.count > 0 ? { ...packagedpickedvegetable, count: packagedpickedvegetable.count - 1 } : packagedpickedvegetable
    ));
    setHerbssproutsmushrooms(herbssproutsmushrooms.map(herbssproutsmushroom =>
      herbssproutsmushroom.name === name && herbssproutsmushroom.count > 0 ? { ...herbssproutsmushroom, count: herbssproutsmushroom.count - 1 } : herbssproutsmushroom
    ));
    setPackagedfruit(packagedfruit.map(packagedfruit =>
      packagedfruit.name === name && packagedfruit.count > 0 ? { ...packagedfruit, count: packagedfruit.count - 1 } : packagedfruit
    ));
  };

  const handleSave = async () => {
    const fruitsToSave = fruits.filter(fruit => fruit.count > 0).map(fruit => ({ ...fruit, quantity: fruit.count }));
    const vegetablesToSave = vegetables.filter(vegetable => vegetable.count > 0).map(vegetable => ({ ...vegetable, quantity: vegetable.count }));
    const packagedpickedvegetablesToSave = packagedpickedvegetables.filter(packagedpickedvegetable => packagedpickedvegetable.count > 0).map(packagedpickedvegetable => 
      ({ ...packagedpickedvegetable, quantity: packagedpickedvegetable.count }));
    const herbssproutsmushroomsToSave = herbssproutsmushrooms.filter(herbssproutsmushroom => herbssproutsmushroom.count > 0).map(herbssproutsmushroom =>
      ({ ...herbssproutsmushroom, quantity: herbssproutsmushroom.count }));
    const packagedfruitToSave = packagedfruit.filter(packagedfruit => packagedfruit.count > 0).map(packagedfruit =>
      ({ ...packagedfruit, quantity: packagedfruit.count }));

    const allItems = [...fruitsToSave, ...vegetablesToSave , ...packagedpickedvegetablesToSave , ...herbssproutsmushroomsToSave , ...packagedfruitToSave];
    allItems.forEach(item => addProduct(item));
    
};

  return (
    <div>
       <div>
        <ProductsPage
          products={vegetables}
          categoryTitle="ירקות"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={packagedpickedvegetables}
          categoryTitle="ירקות ארוזים"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={herbssproutsmushrooms}
          categoryTitle="עשבי תיבול, נבטים ופטריות"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>   
      <div>
        <ProductsPage
          products={fruits}
          categoryTitle="פירות"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={packagedfruit}
          categoryTitle="פירות ארוזים"
          icon={<img alt="" src={importImage('')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default FruitsAndVegetablesPage;