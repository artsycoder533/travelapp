import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({text}) => {
  const [changeableText, setChangeableText] = useState('');

  useEffect(() => {
    setChangeableText(text);
  }, [text]);

  const onChange = () => {
    setChangeableText('Updated State');
  };

  return (
    <Text onPress={onChange} style={styles.title}>
      {changeableText}
    </Text>
  );
};

Title.defaultProps = {
  text: 'Default Text',
};

export default Title;
