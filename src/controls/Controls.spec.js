// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Controls from './Controls'

test('Controls render without crashing', ()=>{
	const wrapper = rtl.render(< Controls/>)

	expect(wrapper.asFragment()).toMatchSnapshot()

})



test('Buttons to control lock and open renders', ()=>{
	const wrapper = rtl.render(<Controls />)
	const lock = wrapper.getByText(/lock gate/i)
	const open = wrapper.getByText(/close gate/i)

	expect(lock).toBeDefined();
	expect(open).toBeDefined();
})

test('If button open or close button is pressed, action should fire once', ()=>{
	const toggleClosed = jest.fn();
	const wrapper = rtl.render(<Controls toggleClosed={toggleClosed}/>)

	const button = wrapper.getByText(/close gate/i);
	rtl.act(()=>{
		rtl.fireEvent.click(button)
	})
	expect(toggleClosed).toHaveBeenCalledTimes(1);

})

test('If lock is open, lock button should fire not be available', ()=>{

	const mock = jest.fn();
	const wrapper = rtl.render(<Controls toggleLocked={mock}/>)

	const button = wrapper.getByText(/lock gate/i);
	rtl.act(()=>{
		rtl.fireEvent.click(button)
	})
	expect(mock).toHaveBeenCalledTimes(0);
})


