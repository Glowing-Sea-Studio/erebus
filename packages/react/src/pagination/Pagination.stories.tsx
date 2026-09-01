import React from 'react';
import { Pagination } from './Pagination';

export default { title: 'Components/Pagination', component: Pagination };

export const Default = () => <Pagination currentPage={1} totalPages={3} onPageChange={()=>{}} />;
