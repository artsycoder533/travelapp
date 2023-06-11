import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';

const Home = () => {
  const [title, setTitle] = useState('My First Component');

  useEffect(() => {
    setTimeout(() => {
      setTitle('Updated Prop Text!!');
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Title text={title} />
        <Title />
      </View>
    </SafeAreaView>
  );
};

export default Home;
