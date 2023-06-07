import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { greetapi } from '../redux/Greet/GreetSlice';

function Greetings() {
  const greet = useSelector((state) => state.greet.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(greetapi());
  }, [dispatch]);
  return (
    <div>
      <h1>
        Random greetings:
        {greet.title}
      </h1>
    </div>
  );
}

export default Greetings;
