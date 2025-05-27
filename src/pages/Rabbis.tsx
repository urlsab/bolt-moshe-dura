// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';
// import PageHero from '../components/PageHero';

// const recommendations = [
//   {
//     id: 1,
//     rabbi: "הרב יצחק יוסף שליט\"א",
//     title: "הראשון לציון והרב הראשי לישראל",
//     recommendation: "אטליז להדרין מקפיד על כל חומרות הכשרות ומספק בשר באיכות הגבוהה ביותר.",
//     date: "תשרי תשפ\"ג"
//   },
//   {
//     id: 2,
//     rabbi: "הרב דוד לאו שליט\"א",
//     title: "הרב הראשי לישראל",
//     recommendation: "המקום ראוי לשבח על הקפדה יתרה בענייני כשרות והידור.",
//     date: "אלול תשפ\"ב"
//   }
// ];

const Rabbis = () => {
  return (
    <div>
        <p>המלצת הרב יגאל כהן שליט"א</p>
        <p>המלצת הרב יגאל כהן שליט"א</p>
        <p>המלצת הרב יגאל כהן שליט"א</p>
    </div>
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 0.5 }}
    // >
    //   <PageHero 
    //     title="המלצות רבנים" 
    //     subtitle="תעודות והמלצות מגדולי הרבנים"
    //     backgroundImage="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg"
    //   />
      
    //   <section className="py-16">
    //     <div className="container-custom">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //         {recommendations.map((rec) => (
    //           <motion.div
    //             key={rec.id}
    //             className="bg-white rounded-lg shadow-md p-8 text-right"
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //           >
    //             <div className="flex items-center justify-end mb-4">
    //               <Star className="text-gold ml-2" size={24} />
    //               <h3 className="text-xl font-serif font-bold">{rec.rabbi}</h3>
    //             </div>
    //             <p className="text-burgundy-600 mb-4">{rec.title}</p>
    //             <p className="text-lg mb-4">{rec.recommendation}</p>
    //             <p className="text-sm text-charcoal-light">{rec.date}</p>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </motion.div>
  );
};

export default Rabbis;