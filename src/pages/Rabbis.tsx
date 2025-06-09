import { motion } from 'framer-motion';
import haravIgal from '../Assets/harav igal.mp4';
import haravRafael from '../Assets/harav zer.mp4';
import haravDavid from '../Assets/harav david.mp4';
import haravRachamim from '../Assets/harav rahamim.mp4';
import haravSharabi from '../Assets/harav sharabi.mp4';
import { useEffect, useState } from 'react';

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
        <p>המלצת הרב יוסף כהן שליט"א</p>        <video 
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

      </div>

    </div>
  );
};

export default Rabbis;