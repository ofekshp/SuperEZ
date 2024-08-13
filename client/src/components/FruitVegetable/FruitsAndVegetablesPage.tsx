import React, { JSXElementConstructor, useState } from "react";
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
    { name: (<>בננה<br />1 קילו</>), image: importImage('banana.jpeg') },
    { name: (<>אבטיח<br />1 קילו</>), image: importImage('watermelon.jpeg') },
    { name: (<>מלון<br />1 קילו</>), image: importImage('melon.jpeg') },
    { name: (<>תפוח עץ פינק ליידי<br />1 קילו</>), image: importImage('crisp_pink_apple.jpeg') },
    { name: (<>תפוח עץ גאלה<br />1 קילו</>), image: importImage('gala_apple.jpeg') },
    { name: (<>תפוח עץ זהוב<br />1 קילו</>), image: importImage('golden_apple.jpeg') },
    { name: (<>תפוח עץ חרמון<br />1 קילו</>), image: importImage('hermon_apple.jpeg') },
    { name: (<>תפוח עץ יונתן<br />1 קילו</>), image: importImage('jonathan_apple.jpeg') },
    { name: (<>תפוח עץ סמיט<br />1 קילו</>), image: importImage('smith_apple.jpeg') },
    { name: (<>אגס תפוח<br />1 קילו</>), image: importImage('pear_apple.jpeg') },
    { name: (<>אגס אדום<br />1 קילו</>), image: importImage('red_pear.jpeg') },
    { name: (<>אגס ספדונה<br />1 קילו</>), image: importImage('sapdona_pear.jpeg') },
    { name: (<>קיווי<br />1 קילו</>), image: importImage('kiwi.png') },
    { name: (<>נקטרינה אדומה<br />1 קילו</>), image: importImage('red_nectarine.jpeg') },
    { name: (<>נקטרינה לבנה<br />1 קילו</>), image: importImage('white_nectarine.jpeg') },
    { name: (<>אפרסק לבן<br />1 קילו</>), image: importImage('white_peach.jpeg') },
    { name: (<>אפרסק צהוב<br />1 קילו</>), image: importImage('yellow_peach.jpeg') },
    { name: (<>מנגו מאיה<br />1 קילו</>), image: importImage('maya_mango.jpeg') },
    { name: (<>שזיף ירוק<br />1 קילו</>), image: importImage('green_plum.jpeg') },
    { name: (<>שזיף סנטה רוזה<br />1 קילו</>), image: importImage('santa_rosa_plum.jpeg') },
    { name: (<>שזיף שחור<br />1 קילו</>), image: importImage('black_plum.jpeg') },
    { name: (<>תפוז<br />1 קילו</>), image: importImage('orange.jpeg') },
    { name: (<>פפאיה<br />1 קילו</>), image: importImage('papaya.jpeg') },
   
  ];

  const initialVegetables = [
    { name: (<>לימון<br />1 קילו</>), image: importImage('lemon.jpeg') },
    { name: (<>אבוקדו<br />1 קילו</>), image: importImage('avocado.jpeg') },
    { name: (<>לימון ליים<br />1 קילו</>), image: importImage('lemon_lime.jpeg') },
    { name: (<>מלפפון<br />1 קילו</>), image: importImage('cucamber.jpeg') },
    { name: (<>עגבניה<br />1 קילו</>), image: importImage('tomato.jpeg') },
    { name: (<>עגבניות שרי<br />1 קילו</>), image: importImage('cherry_tomato.jpeg') },
    { name: (<>בצל אדום<br />1 קילו</>), image: importImage('red_onion.jpeg') },
    { name: (<>בצל יבש<br />1 קילו</>), image: importImage('dry_onion.jpeg') },
    { name: (<>כרישה<br />1 קילו</>), image: importImage('leek.jpeg') },
    { name: (<>גזר<br />1 קילו</>), image: importImage('carrot.jpeg') },
    { name: (<>חציל<br />1 קילו</>), image: importImage('eggplant.jpeg') },
    { name: (<>חציל בלדי<br />1 קילו</>), image: importImage('baladi_eggplant.jpeg') },
    { name: (<>כרוב אדום<br />1 קילו</>), image: importImage('red_cabbage.jpeg') },
    { name: (<>כרוב לבן<br />1 קילו</>), image: importImage('white_cabbage.jpeg') },
    { name: (<>כרובית<br />1 קילו</>), image: importImage('cauliflower.jpeg') },
    { name: (<>פלפל חריף ירוק<br />1 קילו</>), image: importImage('green_hot_pepper.jpeg') },
    { name: (<>פלפל אדום<br />1 קילו</>), image: importImage('red_pepper.jpeg') },
    { name: (<>פלפל ירוק<br />1 קילו</>), image: importImage('green_pepper.jpeg') },
    { name: (<>פלפל צהוב<br />1 קילו</>), image: importImage('yellow_pepper.jpeg') },
    { name: (<>סלק אדום<br />1 קילו</>), image: importImage('red_beet.jpeg') },
    { name: (<>קולורבי<br />1 קילו</>), image: importImage('kohlrabi.jpeg') },
    { name: (<>שומר<br />1 קילו</>), image: importImage('fennel.jpeg') },
    { name: (<>קישוא<br />1 קילו</>), image: importImage('zucchini.jpeg') },
    { name: (<>שעועית הילדה<br />1 קילו</>), image: importImage('hilada_bean.jpeg') },
    { name: (<>שעועית ירוקה<br />1 קילו</>), image: importImage('green_bean.jpeg') },
    { name: (<>דלורית<br />1 קילו</>), image: importImage('butternut_squash.jpeg') },
    { name: (<>דלעת הספגטי<br />1 קילו</>), image: importImage('spaghetti_squash.jpeg') },
    { name: (<>דלעת חתוכה<br />1 קילו</>), image: importImage('cut_pumpkin.jpeg') },
    { name: (<>דלעת ערמונים<br />1 קילו</>), image: importImage('acorn_squash.jpeg') },
    { name: (<>בטטה<br />1 קילו</>), image: importImage('sweet_potato.jpeg') },
    { name: (<>תפוח אדמה אדום<br />1 קילו</>), image: importImage('red_potato.jpeg') },
    { name: (<>תפוח אדמה לבן<br />1 קילו</>), image: importImage('white_potato.jpeg') },
  ];

  const initialPackagedpickedvegetables = [
    { name: (<>חסה לאליק</>), image: importImage('lettuce_hydroponic_dahan.png') },
    { name: (<>חסה סלנובה</>), image: importImage('salanova_hydroponic_dahan.png') },
    { name: (<>ברוקולי<br />1 קילו</>), image: importImage('broccoli.jpg') },
    { name: (<>אספרגוס<br />1 קילו</>), image: importImage('asparagus.jpg') },
    { name: (<>בצל ירוק<br />1 קילו</>), image: importImage('green_onion.jpg') },
    { name: (<>מארז גזר</>), image: importImage('carrot_pack.jpg') },
    { name: (<>חטיפי מלפפונים<br />1 קילו</>), image: importImage('snack_cucumber.jpg') },
    { name: (<>חסה ערבית</>), image: importImage('arabic_lettuce.jpg') },
    { name: (<>אמריקאי<br />1 קילו</>), image: importImage('american_celery.jpg') },
    { name: (<>סלק עלים/מנגולד<br />1 קילו</>), image: importImage('chard.jpg') },
    { name: (<>ראש סלרי<br />1 קילו</>), image: importImage('celery_head.jpg') },
    { name: (<>שורש פטרוזיליה<br />1 קילו</>), image: importImage('parsley_root.jpg') },
    { name: (<>צנונית<br />1 קילו</>), image: importImage('radish_pack.jpg') },
    { name: (<>שום יבש<br />1 קילו</>), image: importImage('dry_garlic_pack.jpg') },
    { name: (<>סלרי<br />1 קילו</>), image: importImage('israeli_celery.jpg') },
    { name: (<>אנדיב (עולש)</>), image: importImage('endive.jpg') },
    { name: (<>תירס</>), image: importImage('packed_corn.jpg') },
    { name: (<>בצלצלי שאלוט<br />1 קילו</>), image: importImage('shallot.jpg') },
    { name: (<>חסה סלנובה</>), image: importImage('salanova_lettuce.jpg') },
    { name: (<>מארז תפוח אדמה לבן</>), image: importImage('white_potato_pack.jpg') },
    { name: (<>עלי קייל<br />1 קילו</>), image: importImage('kale.jpg') },
    { name: (<>מארז תפוח אדמה אדום</>), image: importImage('red_potato_pack.jpg') },
    { name: (<>פאקצ'וי<br />1 קילו</>), image: importImage('packed_pak_choi.jpg') },
    { name: (<>תרד<br />1 קילו</>), image: importImage('packed_nz_spinach.jpg') },
    { name: (<>עלי בייבי</>), image: importImage('baby_leaves.jpg') },
    { name: (<>עלי רוקט</>), image: importImage('rocket_leaves.jpg') },
    { name: (<>תרד בייבי</>), image: importImage('baby_spinach.jpg') },
    { name: (<>חומוס מבושל</>), image: importImage('cooked_chickpeas.jpg') },
    { name: (<>חטיפוני גזר</>), image: importImage('carrot_snacks.jpg') },
    { name: (<>לבבות קיסר</>), image: importImage('caesar_hearts.jpg') },
    { name: (<>סלק אדום מבושל<br />1 קילו</>), image: importImage('vacuum_packed_red_beet.jpg') },
    { name: (<>עדשים ירוקות מבושלות<br />1 קילו</>), image: importImage('cooked_green_lentils.jpg') },
    { name: (<>פלפלונים<br />1 קילו</>), image: importImage('mini_peppers.jpg') },
    { name: (<>רוקולה<br />1 קילו</>), image: importImage('arugula.jpg') },
    { name: (<>שעועית אדומה מבושלת<br />1 קילו</>), image: importImage('cooked_red_beans.jpg') },
  ];

  const initialHerbssproutsmushrooms = [
    { name: (<>ג'ינג'ר<br />1 קילו</>), image: importImage('ginger.jpg') },
    { name: (<>פטריות שמפניון<br />1 קילו</>), image: importImage('champignon_mushrooms.jpg') },
    { name: (<>פטריות פורטבלו<br />1 קילו</>), image: importImage('portobello_mushrooms.jpg') },
    { name: (<>עגבניות מיובשות<br />1 קילו</>), image: importImage('sun_dried_tomatoes.jpg') },
    { name: (<>פטריות מלך היער<br />1 קילו</>), image: importImage('king_oyster_mushrooms.jpg') },
    { name: (<>נבטי אלפלפא</>), image: importImage('alfalfa_sprouts.jpg') },
    { name: (<>נבטי חמניה</>), image: importImage('sunflower_sprouts.jpg') },
    { name: (<>נבטוטים<br />1 קילו</>), image: importImage('sprouts.jpg') },
    { name: (<>מארז פטריות שמפיניון<br />1 קילו</>), image: importImage('champignon_pack.jpg') },
    { name: (<>נבטים סיניים<br />1 קילו</>), image: importImage('chinese_sprouts.jpg') },
    { name: (<>פטרוזיליה ארוזה</>), image: importImage('parsley_packed.jpg') },
    { name: (<>כוסברה ארוזה</>), image: importImage('cilantro_packed.jpg') },
    { name: (<>בזיליקום ארוז</>), image: importImage('basil_packed.jpg') },
    { name: (<>עירית ארוזה</>), image: importImage('chives_packed.jpg') },
    { name: (<>טימין ארוז</>), image: importImage('thyme_packed.jpg') },
    { name: (<>נענע ארוזה</>), image: importImage('mint_packed.jpg') },
    { name: (<>רוזמרין<br />1 קילו</>), image: importImage('rosemary.jpg') },
    { name: (<>אורגנו ארוז</>), image: importImage('oregano.jpg') },
    { name: (<>גרגיר נחלים<br />1 קילו</>), image: importImage('watercress.jpg') },
    { name: (<>צרור כוסברה</>), image: importImage('cilantro_bundle.jpg') },
    { name: (<>מארז צמד פטריות איטלקי<br />1 קילו</>), image: importImage('italian_mushrooms_pack.jpg') },
    { name: (<>מאש מונבט<br />1 קילו</>), image: importImage('sprouted_mung_beans.jpg') },
    { name: (<>מיקס נבטים<br />1 קילו</>), image: importImage('sprouts_mix.jpg') },
    { name: (<>מרווה<br />1 קילו</>), image: importImage('sage.jpg') },
    { name: (<>נבטי אפונה</>), image: importImage('pea_sprouts.jpg') },
    { name: (<>נבטי ברוקולי</>), image: importImage('broccoli_sprouts.jpg') },
    { name: (<>נבטי חמניה</>), image: importImage('sunflower_sprouts.jpg') },
    { name: (<>נבטי חרדל</>), image: importImage('mustard_sprouts.jpg') },
    { name: (<>נבטי צנונית</>), image: importImage('radish_sprouts.jpg') },
    { name: (<>נבטי קייל</>), image: importImage('kale_sprouts.jpg') },
    { name: (<>צרור נענע</>), image: importImage('mint_bundle.jpg') },
    { name: (<>עדשים שחורות מונבטות<br />1 קילו</>), image: importImage('sprouted_black_lentils.jpg') },
    { name: (<>צרור פטרוזיליה</>), image: importImage('parsley_bundle.jpg') },
    { name: (<>פטריות שי מג'י<br />1 קילו</>), image: importImage('shiitake_mushrooms_white.jpg') },
    { name: (<>קינואה מונבטת<br />1 קילו</>), image: importImage('sprouted_quinoa.jpg') },
    { name: (<>שורש כורכום<br />1 קילו</>), image: importImage('fresh_turmeric_root.jpg') },
    { name: (<>שיני שום קלופות</>), image: importImage('peeled_garlic_cloves.jpg') },
    { name: (<>שמיר ארוז</>), image: importImage('dill_packed.jpg') },
    { name: (<>שמיר צרור</>), image: importImage('dill_bundle.jpg') },
  ];

  const initialPackagedfruit = [
    { name: (<>קיווי ירוק<br />מארז</>), image: importImage('green_kiwi.jpg') },
    { name: (<>אננס<br />1 יח׳</>), image: importImage('pineapple.jpg') },
    { name: (<>תפוז<br />ארוז</>), image: importImage('orange.jpg') },
    { name: (<>אוכמניות<br />ארוז</>), image: importImage('blueberries.jpg') },
    { name: (<>דובדבן<br />מארז</>), image: importImage('cherries.jpg') },
    { name: (<>ליצ'י<br />מארז</>), image: importImage('lychee.jpg') },
    { name: (<>קיווי סאן גולד<br />1 קילו</>), image: importImage('gold_kiwi.jpg') },
    { name: (<>ענבים לבנים<br />מארז</>), image: importImage('white_grapes.jpg') },
    { name: (<>ענבים שחורים<br />מארז</>), image: importImage('black_grapes.jpg') },
    { name: (<>תמר מג'הול<br />מארז</>), image: importImage('medjool_dates.jpg') },
  ];


  initialFruits.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialVegetables.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialPackagedpickedvegetables.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialHerbssproutsmushrooms.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  initialPackagedfruit.sort((a, b) => {
    const nameA = a.name.props.children[0]; 
    const nameB = b.name.props.children[0];
    return nameA.localeCompare(nameB, 'he');
  });

  const [fruits, setFruits] = useState<{ name: React.JSX.Element; image: any; count: number }[]>(initialFruits.map(fruit => ({ ...fruit, count: 0 })));
  const [vegetables, setVegetables] = useState<{ name: React.JSX.Element; image: any; count: number }[]>(initialVegetables.map(vegetable => ({ ...vegetable, count: 0 })));
  const [packagedpickedvegetables, setPackagedpickedvegetables] = useState<{ name: React.JSX.Element; image: any; count: number }[]>(initialPackagedpickedvegetables.map(packagedpickedvegetable => ({ ...packagedpickedvegetable, count: 0 })));
  const [herbssproutsmushrooms, setHerbssproutsmushrooms] = useState<{ name: React.JSX.Element; image: any; count: number }[]>(initialHerbssproutsmushrooms.map(herbssproutsmushroom => ({ ...herbssproutsmushroom, count: 0 })));
  const [packagedfruit, setPackagedfruit] = useState<{ name: React.JSX.Element; image: any; count: number }[]>(initialPackagedfruit.map(packagedfruit => ({ ...packagedfruit, count: 0 })));

  const handleIncrement = (name:React.JSX.Element) => {
    setFruits(fruits.map(fruit =>  fruit.name === name ? { ...fruit, count: fruit.count + 1 } : fruit )); 

    setVegetables(vegetables.map(vegetable =>   vegetable.name === name ? { ...vegetable, count: vegetable.count + 1 } : vegetable ));

    setPackagedpickedvegetables(packagedpickedvegetables.map(packagedpickedvegetable =>
      packagedpickedvegetable.name === name ? { ...packagedpickedvegetable, count: packagedpickedvegetable.count + 1 } : packagedpickedvegetable ));

    setHerbssproutsmushrooms(herbssproutsmushrooms.map(herbssproutsmushroom => herbssproutsmushroom.name === name ? 
      { ...herbssproutsmushroom, count: herbssproutsmushroom.count + 1 } : herbssproutsmushroom ));  

    setPackagedfruit(packagedfruit.map(packagedfruit => packagedfruit.name === name ? { ...packagedfruit, count: packagedfruit.count + 1 } : packagedfruit ));  
  };

  const handleDecrement = (name:React.JSX.Element) => {
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

    const allFruitsAndVegetables = [...fruitsToSave, ...vegetablesToSave , ...packagedpickedvegetablesToSave , ...herbssproutsmushroomsToSave , ...packagedfruitToSave];
    allFruitsAndVegetables.forEach(FruitsAndVegetables => addProduct(FruitsAndVegetables));
    setFruits(fruits.map(fruits => ({ ...fruits, count: 0 })));
    setVegetables(vegetables.map(vegetables => ({ ...vegetables, count: 0 })));
    setPackagedpickedvegetables(packagedpickedvegetables.map(packagedpickedvegetables => ({ ...packagedpickedvegetables, count: 0 })));
    setHerbssproutsmushrooms(herbssproutsmushrooms.map(item => ({ ...item, count: 0 })));
    setPackagedfruit(packagedfruit.map(packagedfruit => ({ ...packagedfruit, count: 0 })));
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