import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Rate = ({count, rating, color, onRating}) => {
    const startRatting = useMemo(() => {
        return Array(count)
                    .fill(0)
                    .map((_, i) => i + 1)
                    .map(idx => {
                        <FontAwesomeIcon
                            key={idx}
                            className="cursor-pointer"
                            icon="star"
                            onClick={() => onRating(idx)}
                        />
                    });
    },[count, rating]);
    
    return (
        <div>
            {startRatting}
        </div>
    )
}

Rate.propTypes = {
    count: propTypes.number,
    rating: propTypes.number,
    onChange: propTypes.func,
    color: {
        filled: propTypes.string,
        undefined: propTypes.string
    }
    
}

Rate.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: "#F5eb3b",
        undefined: "#DCDCDC"
    }
}

export default Rate;