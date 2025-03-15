import styles from './banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src ="/banner-image.jpg" alt="venue" className={styles.bannerImage} />
        <div className={styles.bannerText}>
          <h1 className='text-4xl font-medium'>where every event finds its venue</h1>
          <h3 className='text-xl'>Finding the perfect venue has never been easier. Whether it’s a wedding, corporate event, or private party, we connect people to the perfect place.</h3>
        </div>
    </div>
  );
};

export default Banner;