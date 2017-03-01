import React from 'react';
import FilterLink from '../containers/FilterLink';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <p>
          状態:
          {' '}
          <FilterLink filter = {{status:'SHOW_ALL'}}>
            All
          </FilterLink>
          {', '}
          <FilterLink filter = {{status:'SHOW_ACTIVE'}}>
            Active
          </FilterLink>
          {', '}
          <FilterLink filter = {{status:'SHOW_COMPLETED'}}>
            Completed
          </FilterLink>
        </p>
        <p>
          種別:
          {' '}
          <FilterLink filter = {{category:'SHOW_ALL'}}>
            All
          </FilterLink>
          {', '}
          <FilterLink filter = {{category:'SHOW_A'}}>
            A
          </FilterLink>
          {', '}
          <FilterLink filter = {{category:'SHOW_B'}}>
            B
          </FilterLink>
        </p>
      </div>
    );
  }
}

export default Footer;
