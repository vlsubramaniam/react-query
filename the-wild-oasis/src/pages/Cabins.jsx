import { useEffect } from 'react';
import { getCabins } from '../services/apiCabins';

const Cabins = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Cabins</h1>
      <img src='https://enflovyeeovqsvusknoy.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-06-06T17%3A43%3A03.347Z' />
    </div>
  );
};

export default Cabins;
