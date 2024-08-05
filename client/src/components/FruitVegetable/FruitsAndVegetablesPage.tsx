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

  const initialFruits = [

    {
      name: "בננה",
      image: importImage(`banana.jpeg`),
    },
    {
      name: "אבטיח",
      image: importImage(`watermelon.jpeg`),
    },
    {
      name: "מלון",
      image: importImage(`melon.jpeg`),
    },
    {
      name: "תפוח עץ פינק ליידי",
      image: importImage(`crisp_pink_apple.jpeg`),
    },
    {
      name: "תפוח עץ גאלה",
      image: importImage(`gala_apple.jpeg`),
    },
    {
      name: "תפוח עץ זהוב",
      image: importImage(`golden_apple.jpeg`),
    },
    {
      name: "תפוח עץ חרמון",
      image: importImage(`hermon_apple.jpeg`),
    },
    {
      name: "תפוח עץ יונתן",
      image: importImage(`jonathan_apple.jpeg`),
    },
    {
      name: "תפוח עץ סמיט",
      image: importImage(`smith_apple.jpeg`),
    },
    {
      name: "אגס תפוח",
      image: importImage(`pear_apple.jpeg`),
    },
    {
      name: "אגס אדום",
      image: importImage(`red_pear.jpeg`),
    },
    {
      name: "אגס ספדונה",
      image: importImage(`sapdona_pear.jpeg`),
    },
    {
      name: "קיווי",
      image: importImage(`kiwi.png`),
    },
    {
      name: "נקטרינה אדומה",
      image: importImage(`red_nectarine.jpeg`),
    },
    {
      name: "נקטרינה לבנה",
      image: importImage(`white_nectarine.jpeg`),
    },
    {
      name: "אפרסק לבן",
      image: importImage(`white_peach.jpeg`),
    },
    {
      name: "אפרסק צהוב",
      image: importImage(`yellow_peach.jpeg`),
    },
    {
      name: "מנגו מאיה",
      image: importImage(`maya_mango.jpeg`),
    },
    {
      name: "שזיף ירוק",
      image: importImage(`green_plum.jpeg`),
    },
    {
      name: "שזיף סנטה רוזה",
      image: importImage(`santa_rosa_plum.jpeg`),
    },
    {
      name: "שזיף שחור",
      image: importImage(`black_plum.jpeg`),
    },
    {
      name: "תפוז",
      image: importImage(`orange.jpeg`),
    },
    {
      name: "פפאיה",
      image: importImage(`papaya.jpeg`),
    },

  ];

  const initialVegetables = [
    {
      name: "לימון",
      image: importImage(`lemon.jpeg`),
    },
    {
      name: "אבוקדו",
      image: importImage(`avocado.jpeg`),
    },
    {
      name: "לימון ליים",
      image: importImage(`lemon_lime.jpeg`),
    },
    { 
      name: "מלפפון",
      image: importImage(`cucamber.jpeg`)
    },
    {
      name: "עגבניה",
    image: importImage(`tomato.jpeg`) 
    },
    { 
      name: "עגבניות שרי",
      image: importImage(`cherry_tomato.jpeg`)
    },
    {
      name: "בצל אדום",
      image: importImage(`red_onion.jpeg`)
    },
    {
      name: "בצל יבש",
      image: importImage(`dry_onion.jpeg`)
    },
    {
      name: "כרישה",
      image: importImage(`leek.jpeg`)
    },
    {
      name: "גזר",
      image: importImage(`carrot.jpeg`)
    },
    {
      name: "חציל",
      image: importImage(`eggplant.jpeg`)
    },
    {
      name: "חציל בלדי",
      image: importImage(`baladi_eggplant.jpeg`)
    },
    {
      name: "כרוב אדום",
      image: importImage(`red_cabbage.jpeg`)
    },
    {
      name: "כרוב לבן",
      image: importImage(`white_cabbage.jpeg`)
    },
    {
      name: "כרובית",
      image: importImage(`cauliflower.jpeg`)
    },
    {
      name: "פלפל חריף ירוק",
      image: importImage(`green_hot_pepper.jpeg`)
    },
    {
      name: "פלפל אדום",
      image: importImage(`red_pepper.jpeg`)
    },
    {
      name: "פלפל ירוק",
      image: importImage(`green_pepper.jpeg`)
    },
    {
      name: "פלפל צהוב",
      image: importImage(`yellow_pepper.jpeg`)
    },
    {
      name: "סלק אדום",
      image: importImage(`red_beet.jpeg`)
    },
    {
      name: "קולורבי",
      image: importImage(`kohlrabi.jpeg`)
    },
    {
      name: "שומר",
      image: importImage(`fennel.jpeg`)
    },
    {
      name: "קישוא",
      image: importImage(`zucchini.jpeg`)
    },
    {
      name: "שעועית הילדה",
      image: importImage(`hilada_bean.jpeg`)
    },
    {
      name: "שעועית ירוקה",
      image: importImage(`green_bean.jpeg`)
    },
    {
      name: "דלורית",
      image: importImage(`butternut_squash.jpeg`)
    },
    {
      name: "דלעת הספגטי",
      image: importImage(`spaghetti_squash.jpeg`)
    },
    {
      name: "דלעת חתוכה",
      image: importImage(`cut_pumpkin.jpeg`)
    },
    {
      name: "דלעת ערמונים",
      image: importImage(`acorn_squash.jpeg`)
    },
    {
      name: "בטטה",
      image: importImage(`sweet_potato.jpeg`)
    },
    {
      name: "תפוח אדמה אדום ",
      image: importImage(`red_potato.jpeg`)
    },
    {
      name: "תפוח אדמה לבן ",
      image: importImage(`white_potato.jpeg`)
    },
  ];

  const initialPackagedpickedvegetables = [
    { 
      name: "חסה לאליק",
      image: importImage('lettuce_hydroponic_dahan.png')
    },
    { 
      name: "חסה סלנובה", 
      image: importImage('salanova_hydroponic_dahan.png')
    },
    {
      name: "ברוקולי",
      image: importImage('broccoli.jpg')
    },
    { 
      name: "אספרגוס",
      image: importImage('asparagus.jpg')
    },
    { 
      name: "בצל ירוק", 
      image: importImage('green_onion.jpg')
    },
    { 
      name: "מארז גזר", 
      image: importImage('carrot_pack.jpg') 
    },
    {
      name: "חטיפי מלפפונים", 
      image: importImage('snack_cucumber.jpg')
    },
    {
      name: "חסה ערבית", 
      image: importImage('arabic_lettuce.jpg') 
    },
    { name: "אמריקאי",
      image: importImage('american_celery.jpg') 
    },
    { name: "סלק עלים/מנגולד", 
      image: importImage('chard.jpg')
    },
    { name: "ראש סלרי", 
      image: importImage('celery_head.jpg') 
    },
    { name: "שורש פטרוזיליה", 
      image: importImage('parsley_root.jpg') 
    },
    { name: "צנונית",
      image: importImage('radish_pack.jpg')
    },
    { name: "שום יבש",
      image: importImage('dry_garlic_pack.jpg') 
    },
    { name: "סלרי", 
      image: importImage('israeli_celery.jpg') 
    },
    { name: "אנדיב (עולש)", 
      image: importImage('endive.jpg') 
    },
    { name: "תירס", 
      image: importImage('packed_corn.jpg')
    },
    { name: "בצלצלי שאלוט",
      image: importImage('shallot.jpg')
    },
    { name: "חסה סלנובה",
      image: importImage('salanova_lettuce.jpg') 
    },
    { name: "מארז תפוח אדמה לבן", 
      image: importImage('white_potato_pack.jpg') 
    },
    { name: "עלי קייל",
      image: importImage('kale.jpg') 
    },
    { name: "מארז תפוח אדמה אדום",
      image: importImage('red_potato_pack.jpg')
     },
    { name: "פאקצ'וי", 
      image: importImage('packed_pak_choi.jpg') 
    },
    { name: "תרד", 
      image: importImage('packed_nz_spinach.jpg') 
    },
    { name: "עלי בייבי", 
      image: importImage('baby_leaves.jpg') 
    },
    { name: "עלי רוקט", 
      image: importImage('rocket_leaves.jpg') 
    },
    { name: "תרד בייבי",
      image: importImage('baby_spinach.jpg') 
    },
    { name: "חומוס מבושל", 
      image: importImage('cooked_chickpeas.jpg')
    },
    { name: "חטיפוני גזר", 
      image: importImage('carrot_snacks.jpg') 
    },
    { name: "לבבות קיסר", 
      image: importImage('caesar_hearts.jpg') 
    },
    { name: "סלק אדום מבושל", 
      image: importImage('vacuum_packed_red_beet.jpg') 
    },
    { name: "עדשים ירוקות מבושלות", 
      image: importImage('cooked_green_lentils.jpg') 
    },
    { name: "פלפלונים", 
      image: importImage('mini_peppers.jpg') 
    },
    { name: "רוקולה",
      image: importImage('arugula.jpg') 
    },
    { name: "שעועית אדומה מבושלת", 
      image: importImage('cooked_red_beans.jpg') 
    },
  ];

  const initialHerbssproutsmushrooms = [
    {
      name: "ג'ינג'ר", 
      image: importImage('ginger.jpg') 
    },
    { 
      name: "פטריות שמפניון", 
      image: importImage('champignon_mushrooms.jpg') 
    },
    { 
      name: "פטריות פורטבלו",
      image: importImage('portobello_mushrooms.jpg')
    },
    {
      name: "עגבניות מיובשות", 
      image: importImage('sun_dried_tomatoes.jpg') 
    },
    {
      name: "פטריות מלך היער", 
      image: importImage('king_oyster_mushrooms.jpg')
    },
    {
      name: "נבטי אלפלפא", 
      image: importImage('alfalfa_sprouts.jpg') 
    },
    {
      name: "נבטי חמניה", 
      image: importImage('sunflower_sprouts.jpg') 
    },
    { 
      name: "נבטוטים",
      image: importImage('sprouts.jpg')
    },
    {
      name: "מארז פטריות שמפיניון", 
      image: importImage('champignon_pack.jpg') 
    },
    { 
      name: "נבטים סיניים", 
      image: importImage('chinese_sprouts.jpg') 
    },
    { 
      name: "פטרוזיליה ארוזה", 
      image: importImage('parsley_packed.jpg') 
    },
    { 
      name: "כוסברה ארוזה", 
      image: importImage('cilantro_packed.jpg') 
    },
    { 
      name: "בזיליקום ארוז", 
      image: importImage('basil_packed.jpg') 
    },
    { 
      name: "עירית ארוזה", 
      image: importImage('chives_packed.jpg') 
    },
    { 
      name: "טימין ארוז", 
      image: importImage('thyme_packed.jpg') 
    },
    { 
      name: "נענע ארוזה", 
      image: importImage('mint_packed.jpg') 
    },
    { 
      name: "רוזמרין", 
      image: importImage('rosemary.jpg') 
    },
    {
      name: "אורגנו", 
      image: importImage('oregano.jpg') 
    },
    { 
      name: "גרגיר נחלים", 
      image: importImage('watercress.jpg') 
    },
    { 
      name: "צרור כוסברה", 
      image: importImage('cilantro_bundle.jpg') 
    },
    { 
      name: "מארז צמד פטריות איטלקי", 
      image: importImage('italian_mushrooms_pack.jpg') 
    },
    { 
      name: "מאש מונבט", 
      image: importImage('sprouted_mung_beans.jpg') 
    },
    { 
      name: "מיקס נבטים", 
      image: importImage('sprouts_mix.jpg') 
    },
    { 
      name: "מרווה", 
      image: importImage('sage.jpg') 
    },
    { 
      name: "נבטי אפונה", 
      image: importImage('pea_sprouts.jpg') 
    },
    { 
      name: "נבטי ברוקולי", 
      image: importImage('broccoli_sprouts.jpg') 
    },
    { 
      name: "נבטי חמניה", 
      image: importImage('sunflower_sprouts.jpg') 
    },
    { 
      name: "נבטי חרדל", 
      image: importImage('mustard_sprouts.jpg') 
    },
    { 
      name: "נבטי צנונית", 
      image: importImage('radish_sprouts.jpg') 
    },
    { 
      name: "נבטי קייל", 
      image: importImage('kale_sprouts.jpg') 
    },
    { 
      name: "צרור נענע", 
      image: importImage('mint_bundle.jpg') 
    },
    { 
      name: "עדשים שחורות מונבטות", 
      image: importImage('sprouted_black_lentils.jpg') 
    },
    { 
      name: "צרור פטרוזיליה", 
      image: importImage('parsley_bundle.jpg') 
    },
    { 
      name: "פטריות שי מג'י", 
      image: importImage('shiitake_mushrooms_white.jpg') 
    },
    { 
      name: "קינואה מונבטת", 
      image: importImage('sprouted_quinoa.jpg') 
    },
    { 
      name: "שורש כורכום", 
      image: importImage('fresh_turmeric_root.jpg') 
    },
    { 
      name: "שיני שום קלופות", 
      image: importImage('peeled_garlic_cloves.jpg') 
    },
    { 
      name: "שמיר ארוז", 
      image: importImage('dill_packed.jpg') 
    },
    { 
      name: "שמיר צרור", 
      image: importImage('dill_bundle.jpg') 
    },
  ];

  const initialPackagedfruit = [
    { 
      name: "קיווי ירוק ארוז", 
      image: importImage('green_kiwi.jpg') 
    },
    { 
      name: "אננס", 
      image: importImage('pineapple.jpg') 
    },
    { 
      name: "תפוז ארוז", 
      image: importImage('orange.jpg') 
    },
    { 
      name: "אוכמניות", 
      image: importImage('blueberries.jpg') 
    },
    { 
      name: "דובדבן ארוז", 
      image: importImage('cherries.jpg') 
    },
    { 
      name: "ליצ'י ארוז", 
      image: importImage('lychee.jpg') 
    },
    { 
      name: "קיווי סאן גולד ארוז", 
      image: importImage('gold_kiwi.jpg') 
    },
    { 
      name: "ענבים לבנים במארז", 
      image: importImage('white_grapes.jpg') 
    },
    { 
      name: "ענבים שחורים במארז", 
      image: importImage('black_grapes.jpg') 
    },
    { 
      name: "תמר מג'הול", 
      image: importImage('medjool_dates.jpg') 
    },
  ];


  initialVegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFruits.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPackagedpickedvegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialHerbssproutsmushrooms.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPackagedfruit.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [fruits, setFruits] = useState<{ name: string; image: any; count: number }[]>(initialFruits.map(fruit => ({ ...fruit, count: 0 })));
  const [vegetables, setVegetables] = useState<{ name: string; image: any; count: number }[]>(initialVegetables.map(vegetable => ({ ...vegetable, count: 0 })));
  const [packagedpickedvegetables, setPackagedpickedvegetables] = useState<{ name: string; image: any; count: number }[]>(initialPackagedpickedvegetables.map(packagedpickedvegetable => ({ ...packagedpickedvegetable, count: 0 })));
  const [herbssproutsmushrooms, setHerbssproutsmushrooms] = useState<{ name: string; image: any; count: number }[]>(initialHerbssproutsmushrooms.map(herbssproutsmushroom => ({ ...herbssproutsmushroom, count: 0 })));
  const [packagedfruit, setPackagedfruit] = useState<{ name: string; image: any; count: number }[]>(initialPackagedfruit.map(packagedfruit => ({ ...packagedfruit, count: 0 })));

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
    setFruits(fruits.map(item => ({ ...item, count: 0 })));
    setVegetables(vegetables.map(item => ({ ...item, count: 0 })));
    setPackagedpickedvegetables(packagedpickedvegetables.map(item => ({ ...item, count: 0 })));
    setHerbssproutsmushrooms(herbssproutsmushrooms.map(item => ({ ...item, count: 0 })));
    setPackagedfruit(packagedfruit.map(item => ({ ...item, count: 0 })));
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