import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';

function Sorting (props) {
  const {sortType, onSortingChange,sortingTypes} = props;
  const [visible, setVisible] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={()=> setVisible(true)}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        { visible &&
          Object.keys(sortingTypes).map((keyName) => (
            <li key={keyName}
              className={`places__option places__option ${sortingTypes[keyName] === sortType ? 'places__option--active' : ''}`}
              tabIndex="0"
              onClick={() => {
                onSortingChange(sortingTypes[keyName]);
                setVisible(false);
              }}
            >
              {sortingTypes[keyName]}
            </li>
          ))}
      </ul>
    </form>
  );
}

Sorting.defaultProps = {
  onSortingChange: () => {},
};

Sorting.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
  sortingTypes: PropTypes.objectOf(string).isRequired,
};


export default Sorting;
