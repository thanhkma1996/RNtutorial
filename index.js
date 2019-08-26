/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Draw a basic ScrollView with mixed Components
*/
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './App';
import VerticalScrollView from './components/VerticalScrollView';
import HorizontalScrollView from './components/HorizontalScrollView';
import BasicFlatList from './components/BasicFlatList';

AppRegistry.registerComponent('RNtutorial', () => BasicFlatList );
