import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/FarmHome/${imageName}`);
  } catch (error) {
    return null;
  }
};

const FarmHomePage: React.FC = () => {
        const initialShampoo = [
          {
            name: "שמפו לשיער רגיל",
            image: importImage(`shampoo_for_normal_hair.jpeg`),
          },

        ];
      
        initialShampoo.sort((a, b) => a.name.localeCompare(b.name, 'he'));

        const initialConditioner = [
            {
              name: "מרכך לשיער רגיל",
              image: importImage(`conditioner_for_normal_hair.jpeg`),
            },
  
          ];
        
          initialConditioner.sort((a, b) => a.name.localeCompare(b.name, 'he'));


        const initialBathsoap = [
            {
              name: "תחליב רחצה קלאסי",
              image: importImage(`classic_shower_lotion.png`),
            },
  
          ];
        
          initialBathsoap.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialDeodorantforwomen = [
            {
              name: "דאודורנט סטיק אוריגינל",
              image: importImage(`original_deodorant_stick.png`),
            },
  
          ];
        
          initialDeodorantforwomen.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialDeodorantformen = [
            {
              name: "דאודורנט ספריי גוף לגבר ICE",
              image: importImage(`deodorant_body_spray_for_men_ICE.jpeg`),
            },
  
          ];
        
          initialDeodorantformen.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialSunprotection = [
            {
              name: "ג'ל אלוורה להרגעה ורענון העור",
              image: importImage(`aloe_vera_gel_for_soothing_and_refreshing_the_skin.jpeg`),
            },
  
          ];
        
          initialSunprotection.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialShavingpreparationsaccessories = [
            {
              name: "סכיני גילוח פיוזן",
              image: importImage(`fusion_razors.jpeg`),
            },
  
          ];
        
          initialShavingpreparationsaccessories.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialToothpastesmouthwash = [
            {
              name: "זוג משחת שיניים קולגייט טוטאל הלבנה",
              image: importImage(`A pair of colgate_total_whitening_toothpaste.png`),
            },
  
          ];
        
          initialToothpastesmouthwash.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialToothbrushesdentalaccessories = [
            {
              name: "מברשת שיניים חשמלית עם סוללות אדבנס פאוור",
              image: importImage(`electric_toothbrush_with_advance_power_batteries.jpeg`),
            },
  
          ];
        
          initialToothbrushesdentalaccessories.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialCosmeticsfacialcare = [
            {
              name: "תרחיץ פנים לכל סוגי העור",
              image: importImage(`face_wash_for_all_skin_types.jpeg`),
            },
  
          ];
        
          initialCosmeticsfacialcare.sort((a, b) => a.name.localeCompare(b.name, 'he'));


          const initialHaircarestyling = [
            {
              name: "קרם לחות לשיער יבש מאוד ופגום עם חוחבה",
              image: importImage(`moisturizer_for_very_dry_and_damaged_hair_with_guava.png`),
            },
  
          ];
        
          initialHaircarestyling.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialFemininehygieneabsorbentproducts = [
            {
              name: "מגיני תחתון יאנג נורמל",
              image: importImage(`young_normal_bottom_protectors.jpeg`),
            },
  
          ];
        
          initialFemininehygieneabsorbentproducts.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialCareaccessories = [
            {
              name: "מקלוני עץ",
              image: importImage(`wooden_sticks.jpeg`),
            },
  
          ];
        
          initialCareaccessories.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialBodycare = [
            {
              name: "קרם לחות רב שימושי Soft",
              image: importImage(`soft_multipurpose_moisturizer.jpeg`),
            },
  
          ];
        
          initialBodycare.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialFirstaid = [
            {
              name: "אלכוג'ל לשמירה על הייגיינת הידיים",
              image: importImage(`alcohol_gel_to_maintain_hand_hygiene.jpeg`),
            },
  
          ];
        
          initialFirstaid.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialVitaminsnutritionalsupplements = [
            {
              name: "בנפייבר סיבים תזונתיים אבקת דקסטרין חיטה",
              image: importImage(`benefiber_dietary_fiber_wheat_dextrin_powder.jpeg`),
            },
  
          ];
        
          initialVitaminsnutritionalsupplements.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialAirperfume = [
            {
              name: "מבשם אוויר אריגים וארונות בניחוח מאסק",
              image: importImage(`musk-scented_fabric_and_closet_air_freshener.jpeg`),
            },
  
          ];
        
          initialAirperfume.sort((a, b) => a.name.localeCompare(b.name, 'he'));

          const initialCandlesmatches= [
            {
              name: "נר נשמה 26 שעות",
              image: importImage(`26_hour_soul_candle.jpeg`),
            },
  
          ];
        
          initialCandlesmatches.sort((a, b) => a.name.localeCompare(b.name, 'he'));
      
        const [Shampoo] = React.useState<{ name: string; image: any; }[]>(initialShampoo);
        const [conditioner] = React.useState<{ name: string; image: any; }[]>(initialConditioner);
        const [bathsoap] = React.useState<{ name: string; image: any; }[]>(initialBathsoap);
        const [deodorantforwomen] = React.useState<{ name: string; image: any; }[]>(initialDeodorantforwomen);
        const [deodorantformen] = React.useState<{ name: string; image: any; }[]>(initialDeodorantformen);
        const [sunprotection] = React.useState<{ name: string; image: any; }[]>(initialSunprotection);
        const [shavingpreparationsaccessories] = React.useState<{ name: string; image: any; }[]>(initialShavingpreparationsaccessories);
        const [toothpastesmouthwash] = React.useState<{ name: string; image: any; }[]>(initialToothpastesmouthwash);
        const [toothbrushesdentalaccessories] = React.useState<{ name: string; image: any; }[]>(initialToothbrushesdentalaccessories);
        const [cosmeticsfacialcare] = React.useState<{ name: string; image: any; }[]>(initialCosmeticsfacialcare);
        const [haircarestyling] = React.useState<{ name: string; image: any; }[]>(initialHaircarestyling);
        const [femininehygieneabsorbentproducts] = React.useState<{ name: string; image: any; }[]>(initialFemininehygieneabsorbentproducts);
        const [careaccessories] = React.useState<{ name: string; image: any; }[]>(initialCareaccessories);
        const [bodycare] = React.useState<{ name: string; image: any; }[]>(initialBodycare);
        const [firstaid] = React.useState<{ name: string; image: any; }[]>(initialFirstaid);
        const [vitaminsnutritionalsupplements] = React.useState<{ name: string; image: any; }[]>(initialVitaminsnutritionalsupplements);
        const [airperfume] = React.useState<{ name: string; image: any; }[]>(initialAirperfume);
        const [candlesmatches] = React.useState<{ name: string; image: any; }[]>(initialCandlesmatches);

      
        return (
          <div>
            <div>
              <ProductsPage
                products={Shampoo}
                categoryTitle="שמפו"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={conditioner}
                categoryTitle="מרכך"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={bathsoap}
                categoryTitle="סבון רחצה"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={deodorantforwomen}
                categoryTitle="דאודורנט לאישה"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={deodorantformen}
                categoryTitle="דאודורנט לגבר"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={sunprotection}
                categoryTitle="מוצרי הגנה מהשמש"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={shavingpreparationsaccessories}
                categoryTitle="תכשירים ואביזרים לגילוח"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={toothpastesmouthwash}
                categoryTitle="משחות שיניים ומי פה"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={toothbrushesdentalaccessories}
                categoryTitle="מברשות שיניים ואביזרים דנטליים"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={cosmeticsfacialcare}
                categoryTitle="קוסמטיקה וטיפוח הפנים"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={haircarestyling}
                categoryTitle="טיפוח ועיצוב שיער"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={femininehygieneabsorbentproducts}
                categoryTitle="היגיינה נשית ומוצרי ספיגה"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={careaccessories}
                categoryTitle="אביזרי טיפוח"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={bodycare}
                categoryTitle="טיפוח הגוף"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={firstaid}
                categoryTitle="עזרה ראשונה"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={vitaminsnutritionalsupplements}
                categoryTitle="ויטמינים ותוספי תזונה"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={airperfume}
                categoryTitle="בישום אוויר"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
            <div>
              <ProductsPage
                products={candlesmatches}
                categoryTitle="נרות וגפרורים"
                icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}              />
            </div>
          </div>
      
        );
      };
      
export default FarmHomePage;
