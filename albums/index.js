// Index.ios.js - place code in here for IOS

// Import lib to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

// Create a component
// const App = () => {
// 	return (
// 		<Text>Some Text</Text>
// 	);
// };

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList>
		</AlbumList>
	</View>
);


// Render it to a device

// import { AppRegistry } from 'react-native';
// import App from './App';

AppRegistry.registerComponent('albums', () => App);
