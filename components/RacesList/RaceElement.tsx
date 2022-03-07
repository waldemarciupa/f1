import ImageCountry from './ImageCountry';
import styles from './RacesList.module.css';
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

  console.log('raceTime');
  console.log(raceTime);

  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
  console.log(
    dayjs(raceTime)
      .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
      .format('D MMM YYYY H:mm ')
  );

  console.log('Europe/Tallinn');
  console.log(dayjs(raceTime).tz('Europe/Tallinn').format('D MMM YYYY H:mm '));

  console.log('Australia/Brisbane');
  console.log(
    dayjs(raceTime).tz('Australia/Brisbane').format('D MMM YYYY H:mm ')
  );

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
