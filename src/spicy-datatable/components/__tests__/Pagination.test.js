import React from 'react';
import Pagination from '../Pagination.js';
import { shallow } from 'enzyme';

let called = false;
const call = () => { called = true; };

describe('<Pagination /> component', () => {
  it('should render a list of pagination buttons', () => {
    const PaginationWrapper = shallow(
      <Pagination onPage={call} itemsPerPage={10} total={100} activePage={3} />
    );
    expect(PaginationWrapper.find('li').length).toEqual(9); // 7 regular + 2 nav buttons
    expect(PaginationWrapper.find('li').get(0).props.children).toEqual('Back');
    expect(PaginationWrapper.find('li').get(8).props.children).toEqual('Next');
  });
  it('should call the onPage callback when clicking on next/back', () => {
    const PaginationWrapper = shallow(
      <Pagination onPage={call} itemsPerPage={10} total={100} activePage={3} />
    );
    PaginationWrapper.find('li').last().simulate('click');
    expect(called).toEqual(true);
    called = false;
    PaginationWrapper.find('li').first().simulate('click');
    expect(called).toEqual(true);
  });
});
