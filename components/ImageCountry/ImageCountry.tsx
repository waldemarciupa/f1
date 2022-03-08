import Image from 'next/image';
import styles from './ImageCountry.module.css';

interface ImageProps {
  country?: string;
}

const ImageCountry = ({ country }: ImageProps) => {
  return (
    <div className={styles.imageWrapper}>
      <Image width='40px' height='26px' src={`/${country}.jpg`} alt={country} />
    </div>
  );
};

export default ImageCountry;
