import styles from './ErrorMessages.module.css';

const ErrorMessages = ({
  errorType,
}) => {
  let errorMessage;
  if (errorType === 'empty') {
    errorMessage = (
      <>
        <p className={ styles.errorText }>Репозитории отсутствуют</p>
        <p className={ styles.errorDescription }>
          <small>
            Добавьте как минимум один репозиторий на <a
              href="https://github.com"
              target="blank">
              github.com
            </a>
          </small>
        </p>
      </>
    );
  }

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
