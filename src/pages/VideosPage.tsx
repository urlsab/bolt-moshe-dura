import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Example video imports (replace with your own)
// import exampleVideo1 from '../Assets/example1.mp4';
// import exampleVideo2 from '../Assets/example2.mp4';

const videos = [
  {
    title: 'כותרת וידאו 1',
    // src: exampleVideo1,
    src: '', // Add your video source here
  },
  {
    title: 'כותרת וידאו 2',
    // src: exampleVideo2,
    src: '', // Add your video source here
  },
  // הוסף כאן עוד וידאוים
];

const VideosPage = () => {
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
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ minHeight: '80vh', paddingTop: 40, marginTop:'60px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + idx * 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: 400,
              width: '100%',
            }}
          >
            <p style={{ marginBottom: 12, fontWeight: 500 }}>{video.title}</p>
            {video.src ? (
              <video
                width={videoSize}
                height={videoSize}
                controls
                style={{ borderRadius: '12px', overflow: 'hidden', background: '#eee' }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                style={{
                  width: videoSize,
                  height: videoSize,
                  borderRadius: 12,
                  background: '#f3f3f3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#aaa',
                  fontSize: 18,
                  border: '1px dashed #ccc',
                }}
              >
                כאן יופיע הוידאו
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
