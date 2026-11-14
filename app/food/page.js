import Link from "next/link";
import {
  Utensils,
  ShoppingBasket,
  MapPin,
  Heart,
  Search,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const foodOptions = [
  {
    icon: <ShoppingBasket size={26} />,
    title: "Grocery Shopping",
    description:
      "Learn how to find supermarkets, local grocery stores and international food products."
  },
  {
    icon: <Utensils size={26} />,
    title: "Finding Familiar Food",
    description:
      "Discover ways to find food from your home country while studying abroad."
  },
  {
    icon: <MapPin size={26} />,
    title: "Local Food Options",
    description:
      "Explore affordable local restaurants, cafes and student-friendly food options."
  },
  {
    icon: <Heart size={26} />,
    title: "Healthy Eating",
    description:
      "Simple tips for maintaining a healthy and balanced diet while living abroad."
  }
];

const tips = [
  "Compare prices between supermarkets",
  "Look for student discounts",
  "Learn basic local food terms",
  "Check ingredients if you have allergies",
  "Plan meals to save money"
];

export default function FoodPage() {
  return (
    <main className="food-page">

      {/* HERO */}

      <section className="food-hero">

        <div>

          <span className="section-label">
            FOOD & GROCERY
          </span>

          <h1>
            Feel at home,
            <span> one meal at a time.</span>
          </h1>

          <p>
            Discover food, grocery and everyday eating
            information to make life abroad a little easier.
          </p>

        </div>

        <div className="food-hero-icon">
          <Utensils size={75} />
        </div>

      </section>


      {/* RESOURCES */}

      <section className="food-section">

        <div className="section-heading">

          <span className="section-label">
            FOOD RESOURCES
          </span>

          <h2>
            Find what works for you
          </h2>

          <p>
            Helpful information for eating well and finding
            familiar food in a new country.
          </p>

        </div>


        <div className="food-grid">

          {foodOptions.map((item) => (

            <div
              className="food-card"
              key={item.title}
            >

              <div className="food-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* SHOPPING TIPS */}

      <section className="food-tips">

        <div>

          <span className="section-label">
            SMART SHOPPING
          </span>

          <h2>
            Save money on food
          </h2>

          <p>
            Small changes to your shopping habits can make
            a big difference to your student budget.
          </p>

        </div>


        <div className="food-checklist">

          {tips.map((tip) => (

            <div key={tip}>
              <CheckCircle size={20} />
              <span>{tip}</span>
            </div>

          ))}

        </div>

      </section>


      {/* SEARCH IDEA */}

      <section className="food-search">

        <div className="food-search-icon">
          <Search size={28} />
        </div>

        <div>

          <h2>
            Looking for something specific?
          </h2>

          <p>
            In the future, students can use this section
            to find nearby grocery stores and food options.
          </p>

        </div>

      </section>


      {/* NAVIGATION */}

      <div className="food-navigation">

        <Link href="/dashboard">
          ← Back to Dashboard
        </Link>

        <Link href="/language">
          Language Support
          <ArrowRight size={17} />
        </Link>

      </div>

    </main>
  );
}