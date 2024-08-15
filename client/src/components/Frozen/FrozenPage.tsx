import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Frozen/${imageName}`);
  } catch (error) {
    return null;
  }
};

const FrozenPage: React.FC = () => {
  const { addProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

  const initialFrozenVegetables = [
    {
      name: "שעועית ירוקה עדינה שלמה מוקפאת",
      image: importImage('green_bean.jpeg'),
    },
    {
      name: "אפונה",
      image: importImage('garden_peas.jpeg'),
    },
    {
      name: "ברוקולי",
      image: importImage('frozen_broccoli.jpeg'),
    },
    {
      name: "ירקות מעורבים מוקפאים",
      image: importImage('mixed_vegetables.jpeg'),
    },
    {
      name: "גרגרי חומוס מבושלים",
      image: importImage('cooked_chickpeas.jpeg'),
    },
    {
      name: "שעועית ירוקה חתוכה",
      image: importImage('cut_green_beans.jpeg'),
    },
    {
      name: "לקט נורמנדי",
      image: importImage('normandy_blend.jpeg'),
    },
    {
      name: "גרעיני תירס",
      image: importImage('corn_kernels.jpeg'),
    },
    {
      name: "עלי תרד",
      image: importImage('spinach_leaves.jpeg'),
    },
    {
      name: "שעועית לבנה מבושלת",
      image: importImage('cooked_white_beans.jpeg'),
    },
    {
      name: "גזר גמדי",
      image: importImage('baby_carrots.jpeg'),
    },
    {
      name: "בצל קצוץ",
      image: importImage('chopped_onion.jpeg'),
    },
    {
      name: "פול ירוק",
      image: importImage('fava_beans.jpeg'),
    },
    {
      name: "עדשים ירוקות מבושלות מוקפאות",
      image: importImage('frozen_cooked_green_lentils.jpeg'),
    },
    {
      name: "לקט אפונה וגזר",
      image: importImage('peas_and_carrots.jpeg'),
    },
    {
      name: "פתיתי ברוקולי",
      image: importImage('broccoli_florets.jpeg'),
    },
    {
      name: "מיני כרובית",
      image: importImage('mini_cauliflower.jpeg'),
    },
    {
      name: "שעועית צהובה עדינה שלמה מוקפאת",
      image: importImage('frozen_yellow_beans.jpeg'),
    },
    {
      name: "לקט לקוסקוס",
      image: importImage('couscous_mix.jpeg'),
    },
    {
      name: "ירקות ואננס",
      image: importImage('asian_vegetables_with_pineapple.jpeg'),
    },
    {
      name: "לקט ירקות עם פסטה פוזילי",
      image: importImage('stir_fry_with_fusilli.jpeg'),
    },
    {
      name: "לקט ירקות מעורבים",
      image: importImage('mixed_vegetables.jpeg'),
    },
    {
      name: "לקט לעוף",
      image: importImage('chicken_vegetable_mix.jpeg'),
    },
    {
      name: "פסטה וירקות להקפצה",
      image: importImage('stir_fry_pasta_vegetables.jpeg'),
    },
    {
      name: "לקט להקפצה בסגנון תאילנדי",
      image: importImage('thai_style_vegetables.jpeg'),
    },
    {
      name: "פולי סויה - אדממה",
      image: importImage('frozen_edamame.jpeg'),
    },
    {
      name: "צ'יפס",
      image: importImage('french_fries.jpeg'),
    },
    {
      name: "צ'יפס אמריקאי",
      image: importImage('american_fries.jpeg'),
    },
    {
      name: "צ'יפס זיג זג",
      image: importImage('zigzag_fries.jpeg'),
    },
    {
      name: "צ'יפס בטטה",
      image: importImage('frozen_sweet_potato_fries.jpeg'),
    },
    {
      name: "צ'יפס בטטה זיגזג",
      image: importImage('zigzag_sweet_potato_fries.jpeg'),
    },
    {
      name: "אדממה אורגני - פולי סויה",
      image: importImage('organic_edamame.jpeg'),
    },
    {
      name: "בצל סגול ובצל לבן מוקפאים",
      image: importImage('frozen_red_and_white_onions.jpeg'),
    },
    {
      name: "תחתיות ארטישוק מוקפאות",
      image: importImage('frozen_artichoke_hearts.jpeg'),
    },
  ];

  const initialDoughsPizzasPastries = [
    {
      name: "בצק פילאס תורכי",
      image: importImage('turkish_phyllo_dough.jpeg'),
    },
    {
      name: "בצק עלים מרודד",
      image: importImage('rolled_puff_pastry.jpeg'),
    },
    {
      name: "בצק שמרים עלים",
      image: importImage('yeast_puff_pastry.jpeg'),
    },
    {
      name: "בצק פילו",
      image: importImage('phyllo_dough.jpeg'),
    },
    {
      name: "בצק פילו קפוא",
      image: importImage('frozen_phyllo_dough.jpeg'),
    },
    {
      name: "שערות בצק קדאיף",
      image: importImage('kataifi_dough.jpeg'),
    },
    {
      name: "עלי סיגר מרוקאי",
      image: importImage('moroccan_cigar_sheets.jpeg'),
    },
    {
      name: "פיצה עם זיתים",
      image: importImage('pizza_with_olives.jpeg'),
    },
    {
      name: "פיצה מרגריטה",
      image: importImage('margarita_pizza.jpeg'),
    },
    {
      name: "חטיפי פיצה גבינה",
      image: importImage('cheese_pizza_snacks.jpeg'),
    },
    {
      name: "חטיפי פיצה בתוספת זיתים",
      image: importImage('olive_pizza_snacks.jpeg'),
    },
    {
      name: "פיצה משפחתית עם גבינת מוצרלה וגאודה",
      image: importImage('family_pizza.jpeg'),
    },
    {
      name: "פרצל",
      image: importImage('frozen_pretzel.jpeg'),
    },
    {
      name: "בורקס במילוי גבינה",
      image: importImage('cheese_bourekas.jpeg'),
    },
    {
      name: "בורקס פילו אצבעות גבינה",
      image: importImage('cheese_bourekas_fingers.jpeg'),
    },
    {
      name: "בורקס פילו גבינה וזיתים",
      image: importImage('cheese_and_olive_bourekas.jpeg'),
    },
    {
      name: "מיני בורקס פילו גבינה",
      image: importImage('mini_cheese_bourekas.jpeg'),
    },
    {
      name: "מקלות בורקס פילו גבינה",
      image: importImage('cheese_bourekas_sticks.jpeg'),
    },
    {
      name: "בורקס גבינה קפוא",
      image: importImage('frozen_cheese_bourekas.jpeg'),
    },
    {
      name: "בורקס פילו אצבעות בולגרית",
      image: importImage('bulgarian_cheese_bourekas_fingers.jpeg'),
    },
    {
      name: "מיני בורקס במילוי תפוח אדמה",
      image: importImage('mini_potato_bourekas.jpeg'),
    },
    {
      name: "בורקס במילוי תפוחי אדמה",
      image: importImage('potato_bourekas.jpeg'),
    },
    {
      name: "בורקס יפו במילוי תפוחי אדמה",
      image: importImage('jaffa_potato_bourekas.jpeg'),
    },
    {
      name: "ג'חנון בצק",
      image: importImage('jahnun_dough.jpeg'),
    },
    {
      name: "ג'חנון מופחת שומן רווי",
      image: importImage('reduced_fat_jahnun.jpeg'),
    },
    {
      name: "ג'חנון לאפייה",
      image: importImage('baking_jahnun.jpeg'),
    },
    {
      name: "מלאווח מוקפא",
      image: importImage('frozen_malawach.jpeg'),
    },
    {
      name: "מלאווח",
      image: importImage('malawach.jpeg'),
    },
    {
      name: "מלאווח מופחת שומן רווי",
      image: importImage('reduced_fat_malawach.jpeg'),
    },
    {
      name: "מקלות בורקס פילו תרד ובצל",
      image: importImage('spinach_onion_bourekas_sticks.jpeg'),
    },
    {
      name: "בלינצ'ס גבינה",
      image: importImage('frozen_cheese_blintzes.jpeg'),
    },
    {
      name: "ג'חנון קפוא",
      image: importImage('frozen_jahnun.jpeg'),
    },
    {
      name: "וופל בלגי",
      image: importImage('frozen_belgian_waffle.jpeg'),
    },
    {
      name: "מאפה פילו יווני מסורתי ממולא גבינת פטה",
      image: importImage('greek_feta_phyllo_pastry.jpeg'),
    },
    {
      name: "מאפה פילו יווני מסורתי ממולא תרד וגבינת פטה",
      image: importImage('greek_spinach_feta_phyllo_pastry.jpeg'),
    },
    {
      name: "מיני בורקס גבינה",
      image: importImage('mini_frozen_cheese_bourekas.jpeg'),
    },
    {
      name: "מלאווח תימני מקורי",
      image: importImage('original_yemeni_malawach.jpeg'),
    },
    {
      name: "פיצה מרגריטה עם פטריות",
      image: importImage('frozen_margherita_mushroom_pizza.jpeg'),
    },
    {
      name: "פיצה עם ירקות בגריל",
      image: importImage('italpizza_grilled_vegetable_pizza.jpeg'),
    },
    {
      name: "פיצה עם עגבניות וריחן",
      image: importImage('italpizza_tomato_basil_pizza.jpeg'),
    },
    {
      name: "באן - מאפה מאודה 4 יח' במארז",
      image: importImage('steamed_buns.jpeg'),
    },
  ];

  const initialPreparedFoods = [
    {
      name: "גיוזה בטטה",
      image: importImage('sweet_potato_gyoza.jpeg'),
    },
    {
      name: "גיוזה עוף",
      image: importImage('chicken_gyoza.jpeg'),
    },
    {
      name: "גיוזה בקר",
      image: importImage('beef_gyoza.jpeg'),
    },
    {
      name: "אגרול ירקות אסייתי",
      image: importImage('asian_vegetable_eggroll.jpeg'),
    },
    {
      name: "גיוזה ירקות אדממה",
      image: importImage('edamame_vegetable_gyoza.jpeg'),
    },
    {
      name: "גיוזה פטריות",
      image: importImage('mushroom_gyoza.jpeg'),
    },
    {
      name: "גיוזה עוף פטריות ופקאן",
      image: importImage('chicken_mushroom_pecan_gyoza.jpeg'),
    },
    {
      name: "כיסונים ממולאים בבשר,ירקות וציר מרק",
      image: importImage('dim_sum_meat_vegetable_soup_dumplings.jpeg'),
    },
    {
      name: "שניצל עוף מיני דובונים",
      image: importImage('mini_chicken_bear_schnitzel.jpeg'),
    },
    {
      name: "שניצל עוף מיני דינוזאור",
      image: importImage('mini_chicken_dinosaur_schnitzel.jpeg'),
    },
    {
      name: "שניצל עוף קריספי קלאסי דק ענק",
      image: importImage('giant_classic_crispy_chicken_schnitzel.jpeg'),
    },
    {
      name: "רצועות שניצל בציפוי שומשום",
      image: importImage('sesame_schnitzel_strips.jpeg'),
    },
    {
      name: "שניצלונים",
      image: importImage('chicken_nuggets.jpeg'),
    },
    {
      name: "שניצלונים בציפוי שומשום",
      image: importImage('sesame_chicken_nuggets.jpeg'),
    },
    {
      name: "לחמניות באן מאודות",
      image: importImage('steamed_bao_buns.jpeg'),
    },
    {
      name: "סמבוסק אורגינל במילוי חומוס",
      image: importImage('original_sambusak_hummus_filling.jpeg'),
    },
    {
      name: "אמפנדס במילוי בשר וזיתים",
      image: importImage('beef_olive_empanadas.jpeg'),
    },
    {
      name: "קרפלך במילוי בשר",
      image: importImage('beef_kreplach.jpeg'),
    },
    {
      name: "קרפלך במילוי תפו\"א",
      image: importImage('potato_kreplach.jpeg'),
    },
    {
      name: "אגרול סיני במילוי ירקות",
      image: importImage('chinese_vegetable_eggroll.jpeg'),
    },
    {
      name: "קובה בסגנון ביתי",
      image: importImage('homestyle_kubba.jpeg'),
    },
    {
      name: "קובה חמוסטה",
      image: importImage('kubba_hamusta.jpeg'),
    },
    {
      name: "קובה סורית",
      image: importImage('syrian_kubba.jpeg'),
    },
    {
      name: "קובה בורגול במילוי בשר",
      image: importImage('bulgur_beef_kubba_three_bakers.jpeg'),
    },
    {
      name: "קובה למרק",
      image: importImage('kubba_soup_three_bakers.jpeg'),
    },
    {
      name: "קוסקוס טוניסאי בבישול ביתי מסורתי",
      image: importImage('homemade_tunisian_couscous.jpeg'),
    },
    {
      name: "כדורי פלאפל",
      image: importImage('falafel_balls.jpeg'),
    },
    {
      name: "בשר מפורק בריסקט בבישול ארוך בסגנון אמריקאי",
      image: importImage('pulled_beef_brisket_american_style.jpeg'),
    },
    {
      name: "מרק לקוסקוס - מרק עוף עם ירקות וחומוס",
      image: importImage('couscous_chicken_soup_vegetables_chickpeas.jpeg'),
    },
    {
      name: "סיגרים בשר",
      image: importImage('beef_cigars_three_bakers.jpeg'),
    },
    {
      name: "סיגרים תפוחי אדמה",
      image: importImage('potato_cigars_three_bakers.jpeg'),
    },
    {
      name: "סלופי ג'ו בסגנון אמריקאי",
      image: importImage('american_sloppy_joe.jpeg'),
    },
    {
      name: "עוף בקארי אדום בסגנון תאילנדי",
      image: importImage('thai_red_curry_chicken.jpeg'),
    },
    {
      name: "עוף סצ'ואן - תבשיל ירקות ועוף בסגנון סיני",
      image: importImage('szechuan_chicken_vegetable_stew.jpeg'),
    },
    {
      name: "קארי מסמאן בקר ותפוחי אדמה בסגנון תאילנדי",
      image: importImage('thai_massaman_beef_potato_curry.jpeg'),
    },
    {
      name: "קובה חמוסטה -קובה במלית בשר במתכון מסורתי",
      image: importImage('kubba_hamusta_traditional_meat_filling_three_bakers.jpeg'),
    },
    {
      name: "קציצות דג אמנון טחון",
      image: importImage('ground_tilapia_fish_patties.jpeg'),
    },
    {
      name: "קציצות בקר ברוטב עגבניות",
      image: importImage('grandmas_beef_meatballs_tomato_sauce.jpeg'),
    },
    {
      name: "רוטב בולונז - עגבניות, בשר ועשבי תיבול",
      image: importImage('bolognese_sauce_tomatoes_meat_herbs_italian_style.jpeg'),
    },
    {
      name: "שניצל דג - פילה דג אמנון בציפוי פירורי לחם",
      image: importImage('fish_schnitzel_tilapia_breadcrumb_coating.jpeg'),
    },
    {
      name: "תבשיל צ'לי קון קרנה - בשר ושעועית בסגנון מקסיקני",
      image: importImage('mexican_style_chili_con_carne.jpeg'),
    },
  ];

  const initialHerbsSpices = [
    {
      name: "שום כתוש",
      image: importImage('crushed_garlic_small.jpeg'),
    },
    {
      name: "בזיליקום קצוץ",
      image: importImage('chopped_basil.jpeg'),
    },
    {
      name: "פטרוזיליה קצוצה",
      image: importImage('chopped_parsley.jpeg'),
    },
    {
      name: "שמיר קצוץ",
      image: importImage('chopped_dill.jpeg'),
    },
    {
      name: "כוסברה קצוצה",
      image: importImage('chopped_coriander.jpeg'),
    },
    {
      name: "ג'ינג'ר כתוש",
      image: importImage('crushed_ginger.jpeg'),
    },
    {
      name: "שום חריף - תערובת שום וצ'ילי",
      image: importImage('spicy_garlic_chili_mix.jpeg'),
    },
    {
      name: "עשבי תיבול לבישול איטלקי",
      image: importImage('italian_herbs_mix.jpeg'),
    },
    {
      name: "תיבול לטחינה",
      image: importImage('tahini_spices.jpeg'),
    },
    {
      name: "רוטב עגבניות בזיליקום",
      image: importImage('tomato_basil_sauce.jpeg'),
    },
    {
      name: "רוטב פסטו",
      image: importImage('pesto_sauce.jpeg'),
    },
    {
      name: "בצל קצוץ ומטוגן",
      image: importImage('chopped_fried_onion_small.jpeg'),
    },
    {
      name: "שורש כורכום כתוש",
      image: importImage('crushed_turmeric_root.jpeg'),
    },
    {
      name: "שיני שום מקולפות ומוקפאות בקופסא",
      image: importImage('peeled_frozen_garlic_cloves.jpeg'),
    },
  ];

  const initialFrozenfruit = [
    {
      name: "תערובת פירות יער מוקפאים",
      image: importImage('frozen_berry_mix.png'),
    },
    {
      name: "דובדבן מתוק מוקפא",
      image: importImage('frozen_sweet_cherries.jpeg'),
    },
    {
      name: "מנגו חתוך מוקפא",
      image: importImage('frozen_mango_slices.png'),
    },
  ];

  initialFrozenVegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialDoughsPizzasPastries.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPreparedFoods.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPreparedFoods.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFrozenfruit.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [frozenVegetables, setFrozenvegetables] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFrozenVegetables.map(product => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === product.name);
      return {
        ...product,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [doughsPizzasPastries, setDoughsPizzasPastries] = useState<{ name: string; image: string | null; count: number }[]>(
    initialDoughsPizzasPastries.map(product => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === product.name);
      return {
        ...product,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [preparedFoods, setPreparedFoods] = useState<{ name: string; image: string | null; count: number }[]>(
    initialPreparedFoods.map(product => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === product.name);
      return {
        ...product,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [herbsSpices, setHerbsSpices] = useState<{ name: string; image: string | null; count: number }[]>(
    initialHerbsSpices.map(product => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === product.name);
      return {
        ...product,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const [frozenFruit, setFrozenFruit] = useState<{ name: string; image: string | null; count: number }[]>(
    initialFrozenfruit.map(product => {
      const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === product.name);
      return {
        ...product,
        count: basketItem ? basketItem.quantity : 0,
      };
    })
  );
  
  const handleIncrement = (name: string) => {
    setFrozenvegetables(frozenVegetables.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
    setDoughsPizzasPastries(doughsPizzasPastries.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
    setPreparedFoods(preparedFoods.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
    setHerbsSpices(herbsSpices.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
    setFrozenFruit(frozenFruit.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
  };

  const handleDecrement = (name: string) => {
    setFrozenvegetables(frozenVegetables.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
    setDoughsPizzasPastries(doughsPizzasPastries.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
    setPreparedFoods(preparedFoods.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
    setHerbsSpices(herbsSpices.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
    setFrozenFruit(frozenFruit.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
  };

  const handleSave = async () => {
    const allProducts = [
      ...frozenVegetables.filter(product => product.count > 0),
      ...doughsPizzasPastries.filter(product => product.count > 0),
      ...preparedFoods.filter(product => product.count > 0),
      ...herbsSpices.filter(product => product.count > 0),
      ...frozenFruit.filter(product => product.count > 0)
    ].map(product => ({ ...product, quantity: product.count }));

    allProducts.forEach(product => addProduct(product));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={frozenVegetables}
          categoryTitle="ירקות קפואים"
          icon={<img alt="" src={importImage('frozen_vegetables_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={doughsPizzasPastries}
          categoryTitle="בצקים, פיצות ומאפים"
          icon={<img alt="" src={importImage('doughs_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={preparedFoods}
          categoryTitle="מאכלים מוכנים"
          icon={<img alt="" src={importImage('prepared_foods_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={herbsSpices}
          categoryTitle="עשבי תיבול ותבלינים"
          icon={<img alt="" src={importImage('herbs_spices_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={frozenFruit}
          categoryTitle="פירות קפואים"
          icon={<img alt="" src={importImage('frozen_fruit_icon.png')} />} 
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default FrozenPage;
