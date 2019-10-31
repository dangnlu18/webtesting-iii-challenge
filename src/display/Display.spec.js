// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Display from './Display';



test('Renders open/close and locked/unlocked', ()=>{
	const wrapper = rtl.render(< Display/>);

	expect(wrapper.asFragment()).toMatchSnapshot();

})

test('Displays CLOSED if closed prop is true', async ()=>{
	const wrapper = rtl.render(< Display closed={true}/>);

	const closed = wrapper.getByText(/closed/i);
	expect(closed).toHaveTextContent('Closed');

	
})


test('When closed, uses red-led class', ()=>{
	const wrapper = rtl.render(< Display closed={true}/>);

	const closed = wrapper.getByText(/closed/i);
	expect(closed).toHaveClass('red-led');
})

test('When unlocked, uses green-led class', ()=>{
	const wrapper = rtl.render(< Display closed={true}/>);

	const unlocked = wrapper.getByText(/unlocked/i);
	expect(unlocked).toHaveClass('green-led');
})

test('Initial state is unlocked', async ()=>{
	const wrapper = rtl.render(< Display/>);
	await wrapper.findByText(/unlocked/i);

	wrapper.debug();
})

test('Initial state is open', async ()=>{
	const wrapper = rtl.render(< Display/>);
	await wrapper.findByText(/open/i);

	wrapper.debug();
})