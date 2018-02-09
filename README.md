# ReactRedux

# Initialize Project

Run `react-native init $PROJECT_NAME`

#Setup

run `npm install --save react-redux redux`

## Setup Root Component 

Create folder `/src`

Create App.js:

`import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';`

## Note: App can be a Class based component or a Function component

Class Based:

`class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Header headerText="ScheduleFire" />
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
		);
	}
};`

`export default App;`


Functional:

`const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>	
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
		</Provider>
	);
};`

`export default App;`


Go with functional if your component doesn't do much more than take in some props and render. You can think of these as pure functions because they will always render and behave the same, given the same props. Also, they don't care about lifecycle methods or have their own internal state.



## Make sure to give the Provider tag an instance of a redux store
with:

`store={createStore(reducers)}`

`<Provider store={createStore(reducers)}>`


## Setup index.js

At the project level make sure to have an index.js file with the following contents:

`import { AppRegistry } from 'react-native';
import App from './src/App';`

`AppRegistry.registerComponent('manager', () => App);`

`manager` would be the $PROJECT_NAME on init


