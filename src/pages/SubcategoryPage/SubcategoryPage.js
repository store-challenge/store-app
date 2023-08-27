import { useState } from 'react';
import Sort from '../../components/Sort/Sort';

const SubcategoryPage = ({ desktop }) => {
  const [sortOption, setSortOption] = useState('newest');
  return <Sort onSelect={sort => setSortOption(sort)} breakpoint={desktop} />;
};
export default SubcategoryPage;
