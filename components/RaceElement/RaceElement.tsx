import ImageCountry from '../ImageCountry/ImageCountry';
import styles from './RaceElement.module.css';
import dayjs from 'dayjs';
import dayjsutc from 'dayjs/plugin/utc';
import dayjstimezone from 'dayjs/plugin/timezone';

interface RaceProps {
  name: string;
  country: string;
  raceTime: string;
}

const RaceElement = ({ name, country, raceTime }: RaceProps) => {
  dayjs.extend(dayjsutc);
  dayjs.extend(dayjstimezone);

  return (
    <li className={styles.raceElement}>
      <ImageCountry country={country} />
      <p>{country}</p>
      <p>{name}</p>
      <p>
        {dayjs(`${raceTime}`)
          .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
          .format('D MMM YYYY H:mm ')}
      </p>
    </li>
  );
};

export default RaceElement;