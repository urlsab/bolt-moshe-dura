import haravIgal from '../Assets/harav igal.mp4';
import haravRafael from '../Assets/harav zer.mp4';
import haravDavid from '../Assets/harav david.mp4';
import haravRachamim from '../Assets/harav rahamim.mp4';
import haravSharabi from '../Assets/harav sharabi.mp4';

const Rabbis = () => {
  return (
    <div>
      <div style={{display: 'flex', textAlign:'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop:'80px', marginBottom:'20px'}}>

      <div style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}>
      <p>המלצת הרב יגאל כהן שליט"א</p>
        <video width="300" height="300" controls>
          <source src={haravIgal} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}>
      <p>המלצת הרב רפאל זר שליט"א</p>
        <video width="300" height="300" controls>
          <source src={haravRafael} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      </div>

      <div style={{display: 'flex', textAlign:'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop:'80px', marginBottom:'20px'}}>

      <div style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}>
      <p>המלצת הרב דוד פריוף שליט"א</p>
        <video width="300" height="300" controls>
          <source src={haravDavid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}>
      <p>המלצת הרב רחמים נימני שליט"א</p>
        <video width="300" height="300" controls>
          <source src={haravRachamim} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      </div>

      <div style={{display: 'flex', textAlign:'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop:'80px', marginBottom:'20px'}}>

      <div style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}>
      <p>המלצת הרב עודד שרעבי שליט"א</p>
        <video width="300" height="300" controls>
          <source src={haravSharabi} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      </div>

    </div>
    
  );
};

export default Rabbis;