import { useSelector, useDispatch } from 'react-redux';
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue';
import { decrement, increment } from '../../store/reducers/counterReducer';

export function Counter() {
    const count = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment());
    };
    const onDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <div>
                <h1 data-testid={'count-item'}>{count}</h1>
                <button
                    data-testid={'decrement-btn'}
                    aria-label="Decrement value"
                    onClick={onDecrement}
                >
                    Decrement
                </button>
                <button
                    data-testid={'increment-btn'}
                    aria-label="Increment value"
                    onClick={onIncrement}
                >
                    Increment
                </button>
            </div>
        </div>
    );
}