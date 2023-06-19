import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.wrapper}>
      <TailSpin
        height="100"
        width="100"
        color="#2525eb;"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{ position: 'absolute', top: '30%', left: '50%' }}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};
