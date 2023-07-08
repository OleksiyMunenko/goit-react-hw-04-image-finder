import css from '../Button/Button.module.css';

const Button = ({loadMore}) => {
   return (
     <button
       type="button"
       className={css.load__moreBtn}
       onClick={loadMore}
     >
       Load more
     </button>
   );
}; 

export default Button;