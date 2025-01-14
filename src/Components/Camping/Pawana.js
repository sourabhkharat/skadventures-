import React, { useState, useEffect } from 'react';
import PackageInfo from '../PackageInfo/PackageInfo';
import triangle1 from "../../../src/Images/pawana/TriangleStay/1.jpg"
import triangle2 from "../../../src/Images/pawana/TriangleStay/2.jpg"
import triangle3 from "../../../src/Images/pawana/TriangleStay/3.jpg"
import triangle4 from "../../../src/Images/pawana/TriangleStay/tlights.jpg"
import triangle5 from "../../../src/Images/pawana/TriangleStay/5.jpg"
import room1 from "../../../src/Images/pawana/RoomStay/1.jpg"
import room2 from "../../../src/Images/pawana/RoomStay/2.jpg"
import room3 from "../../../src/Images/pawana/RoomStay/3.jpg"
import room4 from "../../../src/Images/pawana/RoomStay/4.jpg"
import tent1 from "../../../src/Images/pawana/TentStay/tnt1.jpg"
import tent2 from "../../../src/Images/pawana/TentStay/tnt2.jpg"
import tent3 from "../../../src/Images/pawana/TentStay/tnt3.jpg"
// import tent4 from "../../../src/Images/pawana/TentStay/tnt4.jpg"
// import tent5 from "../../../src/Images/pawana/tnt5.jpg"
import cmn1 from "../../../src/Images/pawana/cmn1.jpg"
import cmn2 from "../../../src/Images/pawana/cmn2.jpg"
import cmn3 from "../../../src/Images/pawana/cmn3.jpg"
import cmn4 from "../../../src/Images/pawana/cmn4.jpg"
import cmn5 from "../../../src/Images/pawana/cmn5.JPG"
import cmn6 from "../../../src/Images/pawana/cmn6.JPG"
import cmn7 from "../../../src/Images/pawana/cmn7.jpg"
import cmn8 from "../../../src/Images/pawana/cmn8.jpg"
import cmn9 from "../../../src/Images/pawana/cmn9.JPG"
import cmn10 from "../../../src/Images/pawana/cmn10.jpg"
import cmn11 from "../../../src/Images/pawana/cmn11.jpg"
import cmn12 from "../../../src/Images/pawana/cmn12.JPG"
import cmn13 from "../../../src/Images/pawana/cmn13.JPG"

const PawanaCamping = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchedData = {
      itinerary: {
        camping:"Pawana Lake Camping",
        day1: [
          { time: "04:00 pm", activity: "Check In" },
          { time: "04:30 pm to 06:00 pm", activity: "Games & Activities" },
          { time: "05:30 pm to 06:30 pm", activity: "Evening Tea with Snacks" },
          { time: "07:30 pm to 09:00 pm", activity: "BBQ (Veg & Non-Veg Limited)" },
          { time: "08:00 pm to 10:00 pm", activity: "DJ Music" },
          {
            time: "10:00 pm to 11:00 pm",
            activity: "Dinner (Veg & Non-Veg Unlimited)",
          },
          {
            time: "11:00 pm to 12:00 am",
            activity: "Live Guitar Music and Bonfire",
          },
          { time: "12:00 am to 06:00 am", activity: "Silent zone" },
        ],
        day2: [
          {
            time: "07:00 am to 08:00 am",
            activity: "Sunrise View for early risers",
          },
          { time: "08:30 am to 09:30 am", activity: "Morning tea with Breakfast" },
          {
            time: "09:00 am to 10:30 am",
            activity: "Enjoy Watersports (Boating & Kayaking) (not included in package)",
          },
          {
            time: "11:00 am",
            activity: "Check Out with Sweet & Lovable Memories…!!!",
          },
        ],
      },
      title: "New Year Party 2024 at Pawna Lake",
    tagline: "Book Your Pawna Lake Camping Experience!",
    description: `
      If you're looking for an unforgettable weekend getaway, look no further than Pawna Lake Camping. It’s the perfect spot to reconnect with nature, recharge your mind, and make lasting memories with friends, family, or that special someone.

Whether it's the peaceful vibes, the thrilling adventures, or the chance to disconnect from the everyday grind, Pawna Lake has it all. So why wait? Pack your bags, bring your loved ones, and book your stay today!
    `,
    cost: {
      child: "Free (0 to 5 years)",
      childDiscounted: "50% of Adult price",
      adult: "As Mentioned Above",
      groupDiscount: "Special Group Discount available up to 20%",
    },
      inclusions: {
        title:"Inclusions ✅",
        items:[
        "Evening Tea & Snacks and Morning Breakfast",
        "Live DJ Music",
        "Live Music (Only on Saturday) & bonfire",
        "Limited BBQ (Veg/non-Veg)",
        "Unlimited dinner (Veg/Non-veg)",
        "Tent stays on a sharing basis with mat and blanket",
        "First Aid kit",
        "Indoor games (Chess, Carrom, Cards)",
        "Outdoor games (Cricket, badminton, Archery, Volleyball)",
      ]},
      exclusions: [
        "Any transportation",
        "All kinds of Extra Meals / Drinks Ordered",
        "Insurance, tips, Porters, bottled mineral water, aerated drinks, etc.",
        "Any kind of personal expenses",
        "Boating & Kayaking",
        "Expenses due to unforeseen circumstances",
        "Medical / Emergency evacuations if required",
        "Any cost not mentioned above",
      ],
      foodMenu: [
        "Evening Snacks: Tea & Misal Pav (Limited)",
        "Veg: Mix Veg or Paneer sabzi, Dal Tadka, Chapati, steamed Rice, Sweet Dish, Papad, Salad (Unlimited)",
        "BBQ (Limited): Chicken and Paneer",
        "Non-Veg: Chicken Fry, Chicken Curry, Chapati, Rice, Salad (Unlimited)",
        "Breakfast: Tea & Pohe (Limited)",
      ],
      bookingInstructions: [
        "To secure your reservation, kindly make a payment using the provided QR code.",
        "After completing the payment, please share a screenshot of the transaction with us via WhatsApp for verification.",
        "Upon confirmation of your payment, we will send you a confirmation message on WhatsApp along with a Google Form to gather additional details.",
      ],
      productData:[
        {
          title: 'Tent Stay',
          images: [
            tent1,tent2,tent3,
          ],
          price: 999,
        },
        {
          title: 'Triangle/pod',
          images: [
            triangle4,triangle1,triangle2,triangle3,triangle5,
          ],
          price: 1499,
        },
        {
          title: 'Cottage',
          images: [
            
            room4,room1,room2,room3,
          ],
          price: 1999,
        },
      ],
      imageUrls:[
        triangle1,triangle2,triangle3,
      ],
      verticalCards:[
        { title: 'Card 4', image: cmn1 },
        { title: 'Card 10', image: cmn10 },
        { title: 'Card 11', image: cmn11 },
        { title: 'Card 6', image: cmn6 },
        { title: 'Card 12', image: cmn12 },
        { title: 'Card 1', image: cmn2 },
        { title: 'Card 2', image: cmn3 },
        { title: 'Card 3', image: cmn4 },
        { title: 'Card 5', image: cmn5},
        { title: 'Card 7', image: cmn7 },
        { title: 'Card 8', image: cmn8 },
        { title: 'Card 9', image: cmn9 },
        { title: 'Card 9', image: cmn13 }      
      ],
      faq: [
        {
          question: "How to reach Pawna lake Camping?",
          answer: "You can quickly drive to the campsite we provide parking space. Camping is well connected by the national highway a few hours drives from Mumbai, Pune, Lonavala. We’ll provide you with google maps directions after you complete the booking. People using public transport you can get down at Lonavala or Kamshet railway station. From here, jeeps are available on a private rental basis till Pawna Lake Pune. You can also hop on sharing vehicles from Kamshet to Pawna campsite."
        },
        {
          question: "What is Pawna Camping?",
          answer: "Pawna Camping is a popular outdoor adventure experience near Pawna Lake, where guests can enjoy camping, bonfires, BBQ, and various adventure activities like trekking and fishing. The site offers a beautiful view of the lake and surrounding hills."
        },
        {
          question: "Where is Pawna Camping located?",
          answer: "Pawna Camping is located in Lonavala, Maharashtra, India, around 20-25 kilometers from Lonavala city center. The exact location is near Pawna Lake, which is easily accessible by road from Mumbai, Pune, and other nearby areas."
        },
        {
          question: "What should I bring for camping at Pawna?",
          answer: "We provide the necessary camping equipment, such as tents, sleeping bags, and mattresses. However, it is recommended to bring comfortable clothing, a light jacket, personal toiletries, camera, and any medications you may need. Don't forget to bring your adventurous spirit!"
        },
        {
          question: "Is food provided during the camping trip?",
          answer: "Yes, food is provided during your stay at Pawna Camping. We serve freshly prepared meals including breakfast, lunch, and dinner. Vegetarian and non-vegetarian options are available. You can also enjoy a BBQ and snacks around the campfire."
        },
        {
          question: "Are pets allowed at Pawna Camping?",
          answer: "Yes, pets are welcome at Pawna Camping! We understand that pets are part of the family, and we encourage you to bring them along. Please ensure they are kept under control and cleaned up after."
        },
        {
          question: "Can we go boating on Pawna Lake?",
          answer: "Yes, boating is available at Pawna Lake. You can enjoy a peaceful boat ride with friends or family, surrounded by the natural beauty of the lake and hills. The boat rides are typically organized by local vendors, and you can inquire about the availability at the campsite."
        },
        {
          question: "Is Pawna Camping safe for families and children?",
          answer: "Yes, Pawna Camping is safe for families and children. The camping site is well-maintained and supervised by experienced staff. The adventure activities are designed to be fun and safe for people of all ages, but it's always a good idea to keep an eye on younger kids."
        },
        {
          question: "How do I book a spot at Pawna Camping?",
          answer: "You can easily book a spot at Pawna Camping through our website or by contacting us via phone or email. We recommend making a reservation in advance, especially on weekends and holidays, as the campsite tends to fill up quickly."
        },
        {
          question: "What is the best time to visit Pawna Camping?",
          answer: "The best time to visit Pawna Camping is between October and March when the weather is cool and pleasant. Monsoon (June to September) offers lush green landscapes, but the region experiences heavy rainfall during this period, which may affect certain activities."
        },
        {
          question: "Do you provide transportation to the campsite?",
          answer: "We do not provide transportation to Pawna Camping, but we can assist you with arranging transport from nearby cities like Mumbai or Pune. Alternatively, you can drive directly to the campsite in your own vehicle."
        },
        {
          question: "Can I cancel my booking at Pawna Camping?",
          answer: "Yes, you can cancel your booking, but please check our cancellation policy on the website. We typically offer a refund (minus a small cancellation fee) if you cancel within a specified period before your check-in date."
        },

        {
          question: "What are the activities available at Pawna Lake Camping?",
          answer: "Below are activities not included in the camping package; these are available near Pawna lake Camping: Paragliding at Pawna, Water sports at Pawna, Lohgad Fort Pune Trek, Visapur Fort Trek, Tung Fort Trek, Tikona Fort Trek, Kamshet Paragliding, Rajmachi fort Trek."
        },
        {
          question: "Can we charge our phones and gadgets inside the tents?",
          answer: "Electricity is available at Pawna Lake Camping, with limited slots. We recommend you carry your power bank. You can spend more time with your friends and family rather than standing next to the charging board."
        },
      ],
    };

    setData(fetchedData);
  }, []);

  return (
    <div>
      {data ? (
        <PackageInfo data={data} />
      ) : (
        <div className="text-red-600"></div>
      )}
    </div>
  );
};

export default PawanaCamping;
