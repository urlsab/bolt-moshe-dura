import { motion } from 'framer-motion';
import haravIgal from '../Assets/harav igal.mp4';
import haravRafael from '../Assets/harav zer.mp4';
import haravDavid from '../Assets/harav david.mp4';
import haravRachamim from '../Assets/harav rahamim.mp4';
import haravSharabi from '../Assets/harav sharabi.mp4';
import haravigal2 from '../Assets/harav igal 2.mp4';
import { useEffect, useState } from 'react';
// import haravmoshehizkiyahu from '../Assets/haravmoshehizkiyahu.jpg';
// import haravezratrav from '../Assets/haravezratrav.png';
// import haravboazbetsaleli from '../Assets/haravboazbetsaleli.jpg';
// import haravyosefarbiv from '../Assets/haravyosefarbiv.jpg';
// import haravmosheparzis from '../Assets/haravmosheparzis.png';

const Rabbis = () => {
  const [videoSize, setVideoSize] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVideoSize(200);
      } else if (window.innerWidth <= 1024) {
        setVideoSize(250);
      } else {
        setVideoSize(300);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div style={{display: 'flex', textAlign:'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop:'80px', marginBottom:'20px', flexWrap: 'wrap', gap: '20px'}}>

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}
      >
        <p>המלצת הרב יגאל כהן שליט"א</p>        <video 
          width={videoSize} 
          height={videoSize} 
          controls
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
          <source src={haravIgal} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}
      >
        <p>המלצת הרב רפאל זר שליט"א</p>        <video 
          width={videoSize} 
          height={videoSize} 
          controls
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
          <source src={haravRafael} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      </div>

      <div style={{display: 'flex', textAlign:'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop:'80px', marginBottom:'20px', flexWrap: 'wrap', gap: '20px'}}>

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}
      >
        <p>המלצת הרב דוד פריוף שליט"א</p>        <video 
          width={videoSize} 
          height={videoSize} 
          controls
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
          <source src={haravDavid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}
      >
        <p>המלצת הרב רחמים נימני שליט"א</p>        <video 
          width={videoSize} 
          height={videoSize} 
          controls
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
          <source src={haravRachamim} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      </div>

      <div style={{display: 'flex', textAlign:'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop:'80px', marginBottom:'20px', flexWrap: 'wrap', gap: '20px'}}>

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}
      >
        <p>המלצת הרב עודד שרעבי שליט"א</p>        <video 
          width={videoSize} 
          height={videoSize} 
          controls
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
          <source src={haravSharabi} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}
      >
        <p>המלצת הרב יגאל כהן שליט"א</p>        <video 
          width={videoSize*1.5} 
          height={videoSize*1.5} 
          controls
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        >
          <source src={haravigal2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      </div>

      {/* Rabbinical Images Header */}
      <div
        style={{
          textAlign: 'center',
          fontWeight: 800,
          fontSize: '2rem',
          color: '#1e40af', // Tailwind blue-800
          margin: '48px 0 16px 0',
          letterSpacing: '0.5px',
        }}
        className="w-full md:text-3xl text-2xl font-extrabold text-blue-800"
      >
        בין לקוחותינו המכובדים נמנים גם הרבנים הגאונים
      </div>

      {/* Rabbinical Images Section */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '32px', margin: '40px 0'
      }}>
        { [
          {  name: 'הרב משה חזקיהו שליט"א' },
          {  name: 'הרב עזרא טראב שליט"א' },
           {  name: 'הרב יוסף ארביב שליט"א' },
          {  name: 'הרב בועז בצלאלי שליט"א' },
          {  name: 'הרב משה פרזיס שליט"א' }
        ].map((rabbi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + idx * 0.25 }}
            style={{
              width: '220px',
              maxWidth: '90vw',
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '18px 12px',
              margin: '0 auto',
              textAlign:'center'
            }}
          >
            <div style={{
              width: '100%',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
              background: 'linear-gradient(90deg, #e0e7ff 0%, #f3f4f6 100%)',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#1e40af',
              letterSpacing: '0.5px',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
              flexWrap: 'wrap',
              textAlign: 'center',
              // width: '100%'
            }}>
              {rabbi.name}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Rabbis;