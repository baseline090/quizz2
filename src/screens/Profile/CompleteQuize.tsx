import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import CardSection from '../../common/CardSection';

const CompletedQuizes = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white" }} >
        <ScrollView style={{paddingHorizontal:15, }}> 
       <CardSection /> 

   </ScrollView>
    </SafeAreaView>
  );
}

export default CompletedQuizes;
