import styles from './ErrorMessages.module.css';

const errorsState = {
  empty: {
    errorText: 'Репозитории отсутствуют',
    errorDescription: (
      <>Добавьте как минимум один репозиторий на <a
        href="https://github.com" target="blank">github.com</a></>),
  },
  'Not Found': {
    errorText: 'Пользователь не найден',
    errorDescription: 'Не могу найти данного пользователя',
  },
};

const ErrorMessages = ({
  errorType,
}) => {
  const errorMessage = (
    <>
      <p className={ styles.errorText }>
        { errorsState.[errorType].errorText }
      </p>
      <p className={ styles.errorDescription }>
        <small>
          { errorsState.[errorType].errorDescription }
        </small>
      </p>
    </>
  );

  return (
    <div className={ styles.windowWrapper }>
      <div className={ styles.background } />
      <div className={ styles.errorMessage }>
        { errorMessage }
      </div>
    </div>
  );
};


export default ErrorMessages;
