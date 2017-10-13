import React, { Component } from 'react';
import App from './App';
import {
  AppRegistry } from 'react-native';

AppRegistry.registerComponent('ReactNativeWeb', () => App);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });
