import React from 'react';

import s from './Select.scss';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
  }

  renderOptions() {
    const {sizes, size} = this.props.data;
    const list = sizes[size.list];
    return list.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )
    });
  }

  render() {
    return (
      <div className={s.wrap}>
        <select className={s.select} value={this.props.data.size.selected} name="size" onChange={(e) => this.props.change(e.target.value)}>
          {this.renderOptions()}
        </select>
        <img className={s.arrow} src="img/select-arrow.png" alt="↓" />
      </div>
    )
  }
}
