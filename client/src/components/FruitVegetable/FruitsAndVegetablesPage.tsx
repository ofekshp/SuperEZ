import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/FruitsAndVegetables/${imageName}`);
  } catch (error) {
    return null;
  }
};

const FruitsAndVegetablesPage: React.FC = () => {
  const initialFruits = [

    {
      name: "בננה",
      image: importImage(`banana.jpeg`),
    },
    {
      name: "אבטיח שלם",
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

  initialFruits.sort((a, b) => a.name.localeCompare(b.name, 'he'));


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

  initialVegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [fruits] = React.useState<{ name: string; image: any; }[]>(initialFruits);
  const [vegetables] = React.useState<{ name: string; image: any; }[]>(initialVegetables);


  return (
    <div>
      <div>
        <ProductsPage
          products={fruits}
          categoryTitle="פירות"
          icon={<img alt="" src={importImage('')} />}
        />
      </div>
      <div>
        <ProductsPage
          products={vegetables}
          categoryTitle="ירקות"
          icon={<img alt="" src={importImage('')} />}
        />
      </div>
    </div>

  );
};

export default FruitsAndVegetablesPage;
