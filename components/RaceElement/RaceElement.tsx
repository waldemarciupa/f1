import Link from 'next/link';
import ImageCountry from '../ImageCountry/ImageCountry';
import styles from './RaceElement.module.css';
import dayjs from 'dayjs';
import dayjsutc from 'dayjs/plugin/utc';
import dayjstimezone from 'dayjs/plugin/timezone';

interface RaceProps {
  name: string;
  country: string;
  raceTime: string;
  id: string;
}

const RaceElement = ({ name, country, raceTime, id }: RaceProps) => {
  dayjs.extend(dayjsutc);
  dayjs.extend(dayjstimezone);

  return (
    <li className={styles.raceElement}>
      <Link href={`/races/${id}`}>
        <a className={styles.link}>
          <ImageCountry country={country} />
          <p>{name}</p>
          <p className={styles.raceTime}>
            {dayjs(`${raceTime}`)
              .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
              .format('D MMMM')}
          </p>
          <p className={styles.raceTime}>
            {dayjs(`${raceTime}`)
              .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
              .format('H:mm')}
          </p>
        </a>
      </Link>
    </li>
  );
};

export default RaceElement;
