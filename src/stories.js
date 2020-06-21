import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import { Button } from './';

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area


storiesOf('Button')
	.add('Default', () => (
		<Button variant="contained">OK</Button>
	))
	.add('with disabled prop', () => (
		<Button disabled>Disabled</Button>
	))
	.add('Prinary Color', () => (
	<Button variant="contained" color="primary">OK</Button>
))
	.add('Secondary Color', () => (
		<Button variant="contained" color="secondary">OK</Button>
	))
	.add('Text Button', () => (
		<Button >Text Button</Button>
	))
	.add('OutlineButton', () => (
		<div>
			<Button variant="outlined">outline Button</Button>
			<Button variant="outlined" color="primary">outline Button</Button>
		</div>
	));

