import * as React from 'react';
import Dropdown from '../../packages/Dropdown';

const DropdownExample = () => {
  return (
    <div className='flex'>
    <Dropdown
      title='GDL'
      position='bottom-start'
      className='mr-2'
    >
      <ul className='flex flex-col w-50'>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>CDMX</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>Colima</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>Guadalajara</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer'>

        </li>
      </ul>
    </Dropdown>

    <Dropdown
      title='Colima'
      position='right'
      className='mr-2'
    >
      <ul className='flex flex-col w-50'>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>CDMX</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>Colima</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>Guadalajara</li>
      </ul>
    </Dropdown>

    <Dropdown
      title='CDMX'
      position='top'
      className='mr-2'
    >
      <ul className='flex flex-col w-50'>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>CDMX</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>Colima</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>Guadalajara</li>
      </ul>
    </Dropdown>

    <Dropdown
      title='Monterrey'
      position='left'
      className='mr-2'
    >
      <ul className='flex flex-col w-50'>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>CDMX</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>Colima</li>
        <li className='hover:text-secondary-500 hover:bg-surface-100 cursor-pointer pl-4'>Guadalajara</li>
      </ul>
    </Dropdown>
    </div>
  );
};

export default DropdownExample;
