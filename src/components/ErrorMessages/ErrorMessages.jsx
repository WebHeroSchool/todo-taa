import styles from './ErrorMessages.module.css';

const ErrorMessages = ({
  errorType,
  ...props
}) => {
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
    'fetch error': {
      errorText: 'Что-то пошло не так...',
      errorDescription: (
        <>Попробуйте <a
          href="#"
          onClick={() => props.refreshFetchData()}
        >загрузить</a> ещё раз</>),
    },
    'empty todoList': {
      errorText: 'Вы ещё не добавили ни одной задачи',
      errorDescription: 'Сделайте это прямо сейчас!',
    },
  };


  return (
    <div className={ styles.windowWrapper }>
      <div className={ styles.background } />
      <div className={ styles.errorMessage }>
        <p className={ styles.errorText }>
          { errorsState.[errorType].errorText }
        </p>
        <p className={ styles.errorDescription }>
          <small>
            { errorsState.[errorType].errorDescription }
          </small>
        </p>
      </div>
    </div>
  );
};


export default ErrorMessages;
