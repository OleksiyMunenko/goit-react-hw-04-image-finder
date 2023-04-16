import { Component } from 'react';
import css from '../Button/Button.module.css';


class Button extends Component {

  render() {
    return (
      <button
        type="button"
        className={css.load__moreBtn}
        onClick={this.props.loadMore}
      >
        Load more
      </button>
    );
  }
}

export default Button;