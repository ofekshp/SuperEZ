import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="main-heading"> ברוכים הבאים לסופר איזי!</h1>
      <h2 className="second-header">אנחנו הפלטפורמה היחידה בארץ שמאפשרת להשוות מחיר סל קניות בין סופרים שונים ולקצר את תהליך הקנייה בו זמנית, בארבעה שלבים פשוטים!</h2>
      
      <div className="sections-container">
        <section className="section">
          <h2 className="section-heading">
            <span className="section-number">1</span>
          </h2>
          <p className="section-text">ממלאים סל קניות לבחירתכם</p>
        </section>

        <section className="section">
          <h2 className="section-heading">
            <span className="section-number">2</span>
          </h2>
          <p className="section-text">לוחצים על ה"סל שלי"</p>
        </section>

        <section className="section">
          <h2 className="section-heading">
            <span className="section-number">3</span>
          </h2>
          <p className="section-text">בוחרים את הסופר שמציע את הסל המשתלם ביותר</p>
        </section>

        <section className="section">
          <h2 className="section-heading">
            <span className="section-number">4</span>
          </h2>
          <p className="section-text">מגיעים לאתר הסופר שבחרנו וממלאים פרטי תשלום להשלמת הרכישה</p>
        </section>
      </div>

      <p className="bottom-text">וסיימת!</p>
      <p className="bottom-text-second">בלחיצת כפתור תוכלו לעבור ישירות לאתר הסופרמרקט עם הסל שמילאתם אצלנו, ככה קל ופשוט!</p>
      <p className="bottom-text-third">דיי לבזבוז זמן וכסף ושלום לקניות יעילות עם סופר איזי</p>
    </div>
  );
};
export default LandingPage;