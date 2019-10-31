// Test 
import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Dashboard from './Dashboard'


test('Dashboard renders controls and display without crashing', ()=>{
	const wrapper = rtl.render(< Dashboard/>)

	expect(wrapper.asFragment()).toMatchSnapshot()

})

test('Initial state is unlocked', async ()=>{
	const wrapper = rtl.render(< Dashboard/>);
	await wrapper.findByText(/unlocked/i);

	wrapper.debug();
})





