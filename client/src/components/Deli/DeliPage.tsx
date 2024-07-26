import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Deli/${imageName}`);
  } catch (error) {
    return null;
  }
};

const DeliPage: React.FC = () => {
        const initialMilk = [
          {
            name: "חלב 3%",
            image: importImage(`milk3%.jpeg`),
          },

        ];
      
        initialMilk.sort((a, b) => a.name.localeCompare(b.name, 'he'));
      
      
        const initialSoftCheeses = [
          { 
            name: "קוטג׳ 5%",
            image: importImage(`cottage_cheese.jpeg`)
          },
    
        ];
      
        initialSoftCheeses.sort((a, b) => a.name.localeCompare(b.name, 'he'));
      
        const [milk] = React.useState<{ name: string; image: any; }[]>(initialMilk);
        const [softCheese] = React.useState<{ name: string; image: any; }[]>(initialSoftCheeses);
      
      
        return (
          <div>
            <div>
              <ProductsPage
                products={milk}
                categoryTitle="חלב ומשקאות חלב"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
            <div>
              <ProductsPage
                products={softCheese}
                categoryTitle="גבינות רכות"
                icon={<img alt="" src={importImage('')} />}
              />
            </div>
          </div>
      
        );
      };
      
export default DeliPage;
