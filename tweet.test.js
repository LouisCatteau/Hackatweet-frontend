import Home from './components/Home';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';


const tweet = {
    message: 'Bonjour à tous ! Ceci est mon premier tweet',
    firstname: 'Louis',
    username: 'LouisCatteau',
}

it('tweet on screen', async () => {
    const container  = render(<Home/>)
    const registerBtn = container.querySelector('#tweet');
    const textInput = container.querySelector('#textInput');

    fireEvent.change(textInput, { target: { value: tweet.message } });
    fireEvent.click(registerBtn);

	const message = await screen.findByText(new RegExp(tweet.message, 'i'));
	//const firstname = await screen.findByText(new RegExp(tweet.firstname, 'i'));
    //const username = await screen.findByText(new RegExp(tweet.username, 'i'));

	expect(message).toBeInTheDocument();
	//expect(firstname).toBeInTheDocument();
	//expect(username).toBeInTheDocument();
})
