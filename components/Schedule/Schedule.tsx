import dayjs from 'dayjs';
import dayjsutc from 'dayjs/plugin/utc';
import dayjstimezone from 'dayjs/plugin/timezone';
import styles from './Schedule.module.css';

const Schedule = ({ sessions }) => {
  dayjs.extend(dayjsutc);
  dayjs.extend(dayjstimezone);

  return (
    <div>
      <div className={styles.date}>
        <p>
          {dayjs(`${sessions.fp1}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('ddd D MMM')}
          {' - '}
          {dayjs(`${sessions.gp}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('ddd D MMM YYYY')}
        </p>
      </div>

      <div className={styles.session}>
        <span>Practice 1 </span>
        <span>
          {dayjs(`${sessions.fp1}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('ddd')}
        </span>
        <span>
          {dayjs(`${sessions.fp1}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('H:mm')}
        </span>
      </div>

      <div className={styles.session}>
        <span>Practice 2 </span>
        <span>
          {dayjs(`${sessions.fp2}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('ddd')}
        </span>
        <span>
          {dayjs(`${sessions.fp2}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('H:mm')}
        </span>
      </div>

      <div className={styles.session}>
        <span>Practice 3 </span>
        <span>
          {dayjs(`${sessions.fp3}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('ddd')}
        </span>
        <span>
          {dayjs(`${sessions.fp3}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('H:mm')}
        </span>
      </div>

      <div className={styles.session}>
        <span>Qualifying </span>
        <span>
          {dayjs(`${sessions.qualifying}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('ddd')}
        </span>
        <span>
          {dayjs(`${sessions.qualifying}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('H:mm')}
        </span>
      </div>

      <div className={`${styles.session} ${styles.race}`}>
        <span>Race </span>
        <span>
          {dayjs(`${sessions.gp}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('ddd')}
        </span>
        <span>
          {dayjs(`${sessions.gp}`)
            .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
            .format('H:mm')}
        </span>
      </div>
    </div>
  );
};

export default Schedule;
