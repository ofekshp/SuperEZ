import React, { useEffect, useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Frozen/${imageName}`);
  } catch (error) {
    return null;
  }
};

const FrozenPage: React.FC = () => {
  const { addProduct , removeProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

  const initialFrozenVegetables = [
    {
      name: "שעועית ירוקה עדינה שלמה מוקפאת",
      image: importImage('green_bean.jpeg'),
      id: 8,
    },
    {
      name: "אפונה",
      image: importImage('garden_peas.jpeg'),
      id: 8,
    },
    {
      name: "ברוקולי",
      image: importImage('frozen_broccoli.jpeg'),
      id: 8,
    },
    {
      name: "ירקות מעורבים מוקפאים",
      image: importImage('mixed_vegetables.jpeg'),
      id: 8,
    },
    {
      name: "גרגרי חומוס מבושלים",
      image: importImage('cooked_chickpeas.jpeg'),
      id: 8,
    },
    {
      name: "שעועית ירוקה חתוכה",
      image: importImage('cut_green_beans.jpeg'),
      id: 8,
    },
    {
      name: "לקט נורמנדי",
      image: importImage('normandy_blend.jpeg'),
      id: 8,
    },
    {
      name: "גרעיני תירס",
      image: importImage('corn_kernels.jpeg'),
      id: 8,
    },
    {
      name: "עלי תרד",
      image: importImage('spinach_leaves.jpeg'),
      id: 8,
    },
    {
      name: "שעועית לבנה מבושלת",
      image: importImage('cooked_white_beans.jpeg'),
      id: 8,
    },
    {
      name: "גזר גמדי",
      image: importImage('baby_carrots.jpeg'),
      id: 8,
    },
    {
      name: "בצל קצוץ",
      image: importImage('chopped_onion.jpeg'),
      id: 8,
    },
    {
      name: "פול ירוק",
      image: importImage('fava_beans.jpeg'),
      id: 8,
    },
    {
      name: "עדשים ירוקות מבושלות מוקפאות",
      image: importImage('frozen_cooked_green_lentils.jpeg'),
      id: 8,
    },
    {
      name: "לקט אפונה וגזר",
      image: importImage('peas_and_carrots.jpeg'),
      id: 8,
    },
    {
      name: "פתיתי ברוקולי",
      image: importImage('broccoli_florets.jpeg'),
      id: 8,
    },
    {
      name: "מיני כרובית",
      image: importImage('mini_cauliflower.jpeg'),
      id: 8,
    },
    {
      name: "שעועית צהובה עדינה שלמה מוקפאת",
      image: importImage('frozen_yellow_beans.jpeg'),
      id: 8,
    },
    {
      name: "לקט לקוסקוס",
      image: importImage('couscous_mix.jpeg'),
      id: 8,
    },
    {
      name: "ירקות ואננס",
      image: importImage('asian_vegetables_with_pineapple.jpeg'),
      id: 8,
    },
    {
      name: "לקט עם פסטה פוזילי",
      image: importImage('stir_fry_with_fusilli.jpeg'),
      id: 8,
    },
    {
      name: "לקט ירקות מעורבים",
      image: importImage('mixed_vegetables.jpeg'),
      id: 8,
    },
    {
      name: "לקט לעוף",
      image: importImage('chicken_vegetable_mix.jpeg'),
      id: 8,
    },
    {
      name: "פסטה וירקות להקפצה",
      image: importImage('stir_fry_pasta_vegetables.jpeg'),
      id: 8,
    },
    {
      name: "לקט להקפצה בסגנון תאילנדי",
      image: importImage('thai_style_vegetables.jpeg'),
      id: 8,
    },
    {
      name: "פולי סויה - אדממה",
      image: importImage('frozen_edamame.jpeg'),
      id: 8,
    },
    {
      name: "צ'יפס",
      image: importImage('french_fries.jpeg'),
      id: 8,
    },
    {
      name: "צ'יפס אמריקאי",
      image: importImage('american_fries.jpeg'),
      id: 8,
    },
    {
      name: "צ'יפס זיג זג",
      image: importImage('zigzag_fries.jpeg'),
      id: 8,
    },
    {
      name: "צ'יפס בטטה",
      image: importImage('frozen_sweet_potato_fries.jpeg'),
      id: 8,
    },
    {
      name: "צ'יפס בטטה זיגזג",
      image: importImage('zigzag_sweet_potato_fries.jpeg'),
      id: 8,
    },
    {
      name: "אדממה אורגני - פולי סויה",
      image: importImage('organic_edamame.jpeg'),
      id: 8,
    },
    {
      name: "בצל סגול ובצל לבן מוקפאים",
      image: importImage('frozen_red_and_white_onions.jpeg'),
      id: 8,
    },
    {
      name: "תחתיות ארטישוק מוקפאות",
      image: importImage('frozen_artichoke_hearts.jpeg'),
      id: 8,
    },
  ];  

  const initialDoughsPizzasPastries = [
    {
      name: "בצק פילאס תורכי",
      image: importImage('turkish_phyllo_dough.jpeg'),
      id: 8,
    },
    {
      name: "בצק עלים מרודד",
      image: importImage('rolled_puff_pastry.jpeg'),
      id: 8,
    },
    {
      name: "בצק שמרים עלים",
      image: importImage('yeast_puff_pastry.jpeg'),
      id: 8,
    },
    {
      name: "בצק פילו",
      image: importImage('phyllo_dough.jpeg'),
      id: 8,
    },
    {
      name: "בצק פילו קפוא",
      image: importImage('frozen_phyllo_dough.jpeg'),
      id: 8,
    },
    {
      name: "שערות בצק קדאיף",
      image: importImage('kataifi_dough.jpeg'),
      id: 8,
    },
    {
      name: "עלי סיגר מרוקאי",
      image: importImage('moroccan_cigar_sheets.jpeg'),
      id: 8,
    },
    {
      name: "פיצה עם זיתים",
      image: importImage('pizza_with_olives.jpeg'),
      id: 8,
    },
    {
      name: "פיצה מרגריטה",
      image: importImage('margarita_pizza.jpeg'),
      id: 8,
    },
    {
      name: "חטיפי פיצה גבינה",
      image: importImage('cheese_pizza_snacks.jpeg'),
      id: 8,
    },
    {
      name: "חטיפי פיצה בתוספת זיתים",
      image: importImage('olive_pizza_snacks.jpeg'),
      id: 8,
    },
    {
      name: "פיצה משפחתית עם גבינת מוצרלה וגאודה",
      image: importImage('family_pizza.jpeg'),
      id: 8,
    },
    {
      name: "פרצל",
      image: importImage('frozen_pretzel.jpeg'),
      id: 8,
    },
    {
      name: "בורקס במילוי גבינה",
      image: importImage('cheese_bourekas.jpeg'),
      id: 8,
    },
    {
      name: "בורקס פילו אצבעות גבינה",
      image: importImage('cheese_bourekas_fingers.jpeg'),
      id: 8,
    },
    {
      name: "בורקס פילו גבינה וזיתים",
      image: importImage('cheese_and_olive_bourekas.jpeg'),
      id: 8,
    },
    {
      name: "מיני בורקס פילו גבינה",
      image: importImage('mini_cheese_bourekas.jpeg'),
      id: 8,
    },
    {
      name: "מקלות בורקס פילו גבינה",
      image: importImage('cheese_bourekas_sticks.jpeg'),
      id: 8,
    },
    {
      name: "בורקס גבינה קפוא",
      image: importImage('frozen_cheese_bourekas.jpeg'),
      id: 8,
    },
    {
      name: "בורקס פילו אצבעות בולגרית",
      image: importImage('bulgarian_cheese_bourekas_fingers.jpeg'),
      id: 8,
    },
    {
      name: "מיני בורקס במילוי תפוח אדמה",
      image: importImage('mini_potato_bourekas.jpeg'),
      id: 8,
    },
    {
      name: "בורקס במילוי תפוחי אדמה",
      image: importImage('potato_bourekas.jpeg'),
      id: 8,
    },
    {
      name: "בורקס יפו במילוי תפוחי אדמה",
      image: importImage('jaffa_potato_bourekas.jpeg'),
      id: 8,
    },
    {
      name: "ג'חנון בצק",
      image: importImage('jahnun_dough.jpeg'),
      id: 8,
    },
    {
      name: "ג'חנון מופחת שומן רווי",
      image: importImage('reduced_fat_jahnun.jpeg'),
      id: 8,
    },
    {
      name: "ג'חנון לאפייה",
      image: importImage('baking_jahnun.jpeg'),
      id: 8,
    },
    {
      name: "מלאווח מוקפא",
      image: importImage('frozen_malawach.jpeg'),
      id: 8,
    },
    {
      name: "מלאווח",
      image: importImage('malawach.jpeg'),
      id: 8,
    },
    {
      name: "מלאווח מופחת שומן רווי",
      image: importImage('reduced_fat_malawach.jpeg'),
      id: 8,
    },
    {
      name: "מקלות בורקס פילו תרד ובצל",
      image: importImage('spinach_onion_bourekas_sticks.jpeg'),
      id: 8,
    },
    {
      name: "בלינצ'ס גבינה",
      image: importImage('frozen_cheese_blintzes.jpeg'),
      id: 8,
    },
    {
      name: "ג'חנון קפוא",
      image: importImage('frozen_jahnun.jpeg'),
      id: 8,
    },
    {
      name: "וופל בלגי",
      image: importImage('frozen_belgian_waffle.jpeg'),
      id: 8,
    },
    {
      name: "מאפה פילו יווני מסורתי ממולא גבינת פטה",
      image: importImage('greek_feta_phyllo_pastry.jpeg'),
      id: 8,
    },
    {
      name: "מאפה פילו יווני מסורתי ממולא תרד וגבינת פטה",
      image: importImage('greek_spinach_feta_phyllo_pastry.jpeg'),
      id: 8,
    },
    {
      name: "מיני בורקס גבינה",
      image: importImage('mini_frozen_cheese_bourekas.jpeg'),
      id: 8,
    },
    {
      name: "מלאווח תימני מקורי",
      image: importImage('original_yemeni_malawach.jpeg'),
      id: 8,
    },
    {
      name: "פיצה מרגריטה עם פטריות",
      image: importImage('frozen_margherita_mushroom_pizza.jpeg'),
      id: 8,
    },
    {
      name: "פיצה עם ירקות בגריל",
      image: importImage('italpizza_grilled_vegetable_pizza.jpeg'),
      id: 8,
    },
    {
      name: "פיצה עם עגבניות וריחן",
      image: importImage('italpizza_tomato_basil_pizza.jpeg'),
      id: 8,
    },
    {
      name: "באן - מאפה מאודה 4 יח' במארז",
      image: importImage('steamed_buns.jpeg'),
      id: 8,
    },
  ];
  
  const initialPreparedFoods = [
    {
      name: "גיוזה בטטה",
      image: importImage('sweet_potato_gyoza.jpeg'),
      id: 8,
    },
    {
      name: "גיוזה עוף",
      image: importImage('chicken_gyoza.jpeg'),
      id: 8,
    },
    {
      name: "גיוזה בקר",
      image: importImage('beef_gyoza.jpeg'),
      id: 8,
    },
    {
      name: "אגרול ירקות אסייתי",
      image: importImage('asian_vegetable_eggroll.jpeg'),
      id: 8,
    },
    {
      name: "גיוזה ירקות אדממה",
      image: importImage('edamame_vegetable_gyoza.jpeg'),
      id: 8,
    },
    {
      name: "גיוזה פטריות",
      image: importImage('mushroom_gyoza.jpeg'),
      id: 8,
    },
    {
      name: "גיוזה עוף פטריות ופקאן",
      image: importImage('chicken_mushroom_pecan_gyoza.jpeg'),
      id: 8,
    },
    {
      name: "כיסונים ממולאים בבשר,ירקות וציר מרק",
      image: importImage('dim_sum_meat_vegetable_soup_dumplings.jpeg'),
      id: 8,
    },
    {
      name: "שניצל עוף מיני דובונים",
      image: importImage('mini_chicken_bear_schnitzel.jpeg'),
      id: 8,
    },
    {
      name: "שניצל עוף מיני דינוזאור",
      image: importImage('mini_chicken_dinosaur_schnitzel.jpeg'),
      id: 8,
    },
    {
      name: "שניצל עוף קריספי קלאסי דק ענק",
      image: importImage('giant_classic_crispy_chicken_schnitzel.jpeg'),
      id: 8,
    },
    {
      name: "רצועות שניצל בציפוי שומשום",
      image: importImage('sesame_schnitzel_strips.jpeg'),
      id: 8,
    },
    {
      name: "שניצלונים",
      image: importImage('chicken_nuggets.jpeg'),
      id: 8,
    },
    {
      name: "שניצלונים בציפוי שומשום",
      image: importImage('sesame_chicken_nuggets.jpeg'),
      id: 8,
    },
    {
      name: "לחמניות באן מאודות",
      image: importImage('steamed_bao_buns.jpeg'),
      id: 8,
    },
    {
      name: "סמבוסק אורגינל במילוי חומוס",
      image: importImage('original_sambusak_hummus_filling.jpeg'),
      id: 8,
    },
    {
      name: "אמפנדס במילוי בשר וזיתים",
      image: importImage('beef_olive_empanadas.jpeg'),
      id: 8,
    },
    {
      name: "קרפלך במילוי בשר",
      image: importImage('beef_kreplach.jpeg'),
      id: 8,
    },
    {
      name: "קרפלך במילוי תפו\"א",
      image: importImage('potato_kreplach.jpeg'),
      id: 8,
    },
    {
      name: "אגרול סיני במילוי ירקות",
      image: importImage('chinese_vegetable_eggroll.jpeg'),
      id: 8,
    },
    {
      name: "קובה בסגנון ביתי",
      image: importImage('homestyle_kubba.jpeg'),
      id: 8,
    },
    {
      name: "קובה חמוסטה",
      image: importImage('kubba_hamusta.jpeg'),
      id: 8,
    },
    {
      name: "קובה סורית",
      image: importImage('syrian_kubba.jpeg'),
      id: 8,
    },
    {
      name: "קובה בורגול במילוי בשר",
      image: importImage('bulgur_beef_kubba_three_bakers.jpeg'),
      id: 8,
    },
    {
      name: "קובה למרק",
      image: importImage('kubba_soup_three_bakers.jpeg'),
      id: 8,
    },
    {
      name: "קוסקוס טוניסאי בבישול ביתי מסורתי",
      image: importImage('homemade_tunisian_couscous.jpeg'),
      id: 8,
    },
    {
      name: "כדורי פלאפל",
      image: importImage('falafel_balls.jpeg'),
      id: 8,
    },
    {
      name: "בשר מפורק בריסקט בבישול ארוך בסגנון אמריקאי",
      image: importImage('pulled_beef_brisket_american_style.jpeg'),
      id: 8,
    },
    {
      name: "מרק לקוסקוס - מרק עוף עם ירקות וחומוס",
      image: importImage('couscous_chicken_soup_vegetables_chickpeas.jpeg'),
      id: 8,
    },
    {
      name: "סיגרים בשר",
      image: importImage('beef_cigars_three_bakers.jpeg'),
      id: 8,
    },
    {
      name: "סיגרים תפוחי אדמה",
      image: importImage('potato_cigars_three_bakers.jpeg'),
      id: 8,
    },
    {
      name: "סלופי ג'ו בסגנון אמריקאי",
      image: importImage('american_sloppy_joe.jpeg'),
      id: 8,
    },
    {
      name: "עוף בקארי אדום בסגנון תאילנדי",
      image: importImage('thai_red_curry_chicken.jpeg'),
      id: 8,
    },
    {
      name: "עוף סצ'ואן - תבשיל ירקות ועוף בסגנון סיני",
      image: importImage('szechuan_chicken_vegetable_stew.jpeg'),
      id: 8,
    },
    {
      name: "קארי מסמאן בקר ותפוחי אדמה בסגנון תאילנדי",
      image: importImage('thai_massaman_beef_potato_curry.jpeg'),
      id: 8,
    },
    {
      name: "קובה חמוסטה -קובה במלית בשר במתכון מסורתי",
      image: importImage('kubba_hamusta_traditional_meat_filling_three_bakers.jpeg'),
      id: 8,
    },
    {
      name: "קציצות דג אמנון טחון",
      image: importImage('ground_tilapia_fish_patties.jpeg'),
      id: 8,
    },
    {
      name: "קציצות בקר ברוטב עגבניות",
      image: importImage('grandmas_beef_meatballs_tomato_sauce.jpeg'),
      id: 8,
    },
    {
      name: "רוטב בולונז - עגבניות, בשר ועשבי תיבול",
      image: importImage('bolognese_sauce_tomatoes_meat_herbs_italian_style.jpeg'),
      id: 8,
    },
    {
      name: "שניצל דג - פילה דג אמנון בציפוי פירורי לחם",
      image: importImage('fish_schnitzel_tilapia_breadcrumb_coating.jpeg'),
      id: 8,
    },
    {
      name: "תבשיל צ'לי קון קרנה - בשר ושעועית בסגנון מקסיקני",
      image: importImage('mexican_style_chili_con_carne.jpeg'),
      id: 8,
    },
  ];
  
  const initialHerbsSpices = [
    {
      name: "שום כתוש",
      image: importImage('crushed_garlic_small.jpeg'),
      id: 8,
    },
    {
      name: "בזיליקום קצוץ",
      image: importImage('chopped_basil.jpeg'),
      id: 8,
    },
    {
      name: "פטרוזיליה קצוצה",
      image: importImage('chopped_parsley.jpeg'),
      id: 8,
    },
    {
      name: "שמיר קצוץ",
      image: importImage('chopped_dill.jpeg'),
      id: 8,
    },
    {
      name: "כוסברה קצוצה",
      image: importImage('chopped_coriander.jpeg'),
      id: 8,
    },
    {
      name: "ג'ינג'ר כתוש",
      image: importImage('crushed_ginger.jpeg'),
      id: 8,
    },
    {
      name: "שום חריף - תערובת שום וצ'ילי",
      image: importImage('spicy_garlic_chili_mix.jpeg'),
      id: 8,
    },
    {
      name: "עשבי תיבול לבישול איטלקי",
      image: importImage('italian_herbs_mix.jpeg'),
      id: 8,
    },
    {
      name: "תיבול לטחינה",
      image: importImage('tahini_spices.jpeg'),
      id: 8,
    },
    {
      name: "רוטב עגבניות בזיליקום",
      image: importImage('tomato_basil_sauce.jpeg'),
      id: 8,
    },
    {
      name: "רוטב פסטו",
      image: importImage('pesto_sauce.jpeg'),
      id: 8,
    },
    {
      name: "בצל קצוץ ומטוגן",
      image: importImage('chopped_fried_onion_small.jpeg'),
      id: 8,
    },
    {
      name: "שורש כורכום כתוש",
      image: importImage('crushed_turmeric_root.jpeg'),
      id: 8,
    },
    {
      name: "שיני שום מקולפות ומוקפאות בקופסא",
      image: importImage('peeled_frozen_garlic_cloves.jpeg'),
      id: 8,
    },
  ];  

  const initialFrozenfruit = [
    {
      name: "תערובת פירות יער מוקפאים",
      image: importImage('frozen_berry_mix.png'),
      id: 8,
    },
    {
      name: "דובדבן מתוק מוקפא",
      image: importImage('frozen_sweet_cherries.jpeg'),
      id: 8,
    },
    {
      name: "מנגו חתוך מוקפא",
      image: importImage('frozen_mango_slices.png'),
      id: 8,
    },
  ];
  

  initialFrozenVegetables.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialDoughsPizzasPastries.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPreparedFoods.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialPreparedFoods.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialFrozenfruit.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [frozenVegetables, setFrozenVegetables] = useState<{ name: string; image: string | null; count: number }[]>(
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
  
  useEffect(() => {
    handleSave();
  }, [frozenVegetables, doughsPizzasPastries, preparedFoods, herbsSpices, frozenFruit]);

  const handleIncrement = (name: string) => {
    setFrozenVegetables(frozenVegetables.map(product =>
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
    setFrozenVegetables(frozenVegetables.map(product => {
      if (product.name === name && product.count > 0) {
        const newCount = product.count - 1;
        if (newCount === 0) {
          removeProduct(product.name);
        }
        return { ...product, count: newCount };
      }
      return product;
    }));
    
    setDoughsPizzasPastries(doughsPizzasPastries.map(product => {
      if (product.name === name && product.count > 0) {
        const newCount = product.count - 1;
        if (newCount === 0) {
          removeProduct(product.name);
        }
        return { ...product, count: newCount };
      }
      return product;
    }));
    
    setPreparedFoods(preparedFoods.map(product => {
      if (product.name === name && product.count > 0) {
        const newCount = product.count - 1;
        if (newCount === 0) {
          removeProduct(product.name);
        }
        return { ...product, count: newCount };
      }
      return product;
    }));
    
    setHerbsSpices(herbsSpices.map(product => {
      if (product.name === name && product.count > 0) {
        const newCount = product.count - 1;
        if (newCount === 0) {
          removeProduct(product.name);
        }
        return { ...product, count: newCount };
      }
      return product;
    }));
    
    setFrozenFruit(frozenFruit.map(product => {
      if (product.name === name && product.count > 0) {
        const newCount = product.count - 1;
        if (newCount === 0) {
          removeProduct(product.name);
        }
        return { ...product, count: newCount };
      }
      return product;
    }));
    
  };

  const handleSave = async () => {
    const frozenVegetablesToSave = frozenVegetables.filter(frozenVegetables => frozenVegetables.count > 0).map(frozenVegetables => ({ ...frozenVegetables, quantity: frozenVegetables.count }));
    const doughsPizzasPastriesToSave = doughsPizzasPastries.filter(doughsPizzasPastries => doughsPizzasPastries.count > 0).map(doughsPizzasPastries => ({ ...doughsPizzasPastries, quantity: doughsPizzasPastries.count }));
    const preparedFoodsToSave = preparedFoods.filter(preparedFoods => preparedFoods.count > 0).map(preparedFoods => ({ ...preparedFoods, quantity: preparedFoods.count }));
    const herbsSpicesToSave = herbsSpices.filter(herbsSpices => herbsSpices.count > 0).map(herbsSpices => ({ ...herbsSpices, quantity: herbsSpices.count }));
    const frozenFruitToSave = frozenFruit.filter(frozenFruit => frozenFruit.count > 0).map(frozenFruit => ({ ...frozenFruit, quantity: frozenFruit.count }));

    const allItems = [...frozenVegetablesToSave, ...doughsPizzasPastriesToSave , ...preparedFoodsToSave , ...herbsSpicesToSave , ...frozenFruitToSave];
    allItems.forEach(item => addProduct(item));
  };

  
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filterFrozenVegetables = frozenVegetables.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterDoughsPizzasPastries = doughsPizzasPastries.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterPreparedFoods = preparedFoods.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterHerbsSpices = herbsSpices.filter(product =>
    product.name.includes(searchTerm)
  );
  
  const filterFrozenFruit = frozenFruit.filter(product =>
    product.name.includes(searchTerm)
  );
  
  

  return (
<div>
  <div style={{
    position: 'absolute',
    marginTop: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }}>
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="חפש מוצר קפואים"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: '100%',
      
          padding: '5px 40px 5px 5px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          textAlign: 'right',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
      <i className="fas fa-search" style={{
        position: 'absolute',
        right: '-30px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#aaa',
        pointerEvents: 'none',
      }}></i>
    </div>

</div> {filterFrozenVegetables.length > 0 && (
  <div>
    <ProductsPage
      products={filterFrozenVegetables}
      categoryTitle="ירקות קפואים"
      icon={<img alt="" src={importImage('frozen_vegetables_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterDoughsPizzasPastries.length > 0 && (
  <div>
    <ProductsPage
      products={filterDoughsPizzasPastries}
      categoryTitle="בצקים, פיצות ומאפים"
      icon={<img alt="" src={importImage('doughs_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterPreparedFoods.length > 0 && (
  <div>
    <ProductsPage
      products={filterPreparedFoods}
      categoryTitle="מאכלים מוכנים"
      icon={<img alt="" src={importImage('prepared_foods_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterHerbsSpices.length > 0 && (
  <div>
    <ProductsPage
      products={filterHerbsSpices}
      categoryTitle="עשבי תיבול ותבלינים"
      icon={<img alt="" src={importImage('herbs_spices_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

{filterFrozenFruit.length > 0 && (
  <div>
    <ProductsPage
      products={filterFrozenFruit}
      categoryTitle="פירות קפואים"
      icon={<img alt="" src={importImage('frozen_fruit_icon.png')} />}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onSave={handleSave}
    />
  </div>
)}

    </div>
  );
};

export default FrozenPage;