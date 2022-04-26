import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { NativeRouter, Route, Router } from 'react-router-native';
import LoginPage from './src/Components/LoginPage/LoginPage';

export default function App(){
  return(
    // <View style={styles.container}>
    //   <LoginPage/>
    // </View>
    <NativeRouter>
      <Router>
        <Route exact path="/" element={<LoginPage/>}/>
      </Router>
    </NativeRouter>  
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1
  }
});