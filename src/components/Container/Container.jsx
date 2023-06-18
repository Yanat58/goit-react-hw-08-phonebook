import css from './Container.module.css'

export const Container= ({ children }) => {
    return <main className={css.container}>{children}</main>;
  };