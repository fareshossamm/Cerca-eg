import React from 'react';
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate
import './NewArrival.css'; // ملف CSS مخصص
import img7 from './IMGS/white2.webp';
import img8 from './IMGS/blue4.webp';
import img9 from './IMGS/gray double.webp';
import img10 from './IMGS/gray1.webp';
import img11 from './IMGS/blue 3.webp';
import img12 from './IMGS/white3.webp';

const NewArrival = () => {
  const navigate = useNavigate(); // تهيئة useNavigate

  const newArrivals = [
    {
      id: 1,
      image: img7,
    },
    {
      id: 2,
      image: img9,
    },
    {
      id: 3,
      image: img8,
    },
    {
      id: 4,
      image: img10,
    },
    {
        id: 5,
        image: img12,
      },

      {
        id: 6,
        image: img11,
      },
  ];



  return (
    <section className="new-arrival-section">
      <h2 className="section-title">New Arrivals 🔥</h2>
      <div className="new-arrival-grid">
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="new-arrival-card"
          >
            <div className="image-container">
              <img src={item.image} alt={`Product ${item.id}`} className="new-arrival-image" />
              <div className="caption">New Arrival</div> {/* نص توضيحي */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;