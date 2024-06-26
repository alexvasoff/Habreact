import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { counterActions } from '@/entities/Counter/model/slice/counterSlice';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from '@/entities/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
      <div>
          <h1 data-testid="value-title">
              value is
              { value }
          </h1>
          <Button data-testid="increment-btn" onClick={increment}>Increment</Button>
          <Button data-testid="decrement-btn" onClick={decrement}>Decrement</Button>
      </div>
  );
};
