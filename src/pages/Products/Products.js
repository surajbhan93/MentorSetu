import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo,homeObjFour } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Products;