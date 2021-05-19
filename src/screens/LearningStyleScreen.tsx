import React from 'react';
import {useState} from 'react';
import {Icon, Text} from 'react-native-elements';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

//Variables
const WidthScreen = Dimensions.get('window').width;
const HeightScreen = Dimensions.get('window').height;

interface Props extends StackScreenProps<any, any> {}

const LearningStyleScreen = ({navigation}: Props) => {
  const [learnings] = useState([
    {id: 1, name: 'Kinetica', icon: 'child', backgroundColor: '#754d24'},
    {id: 2, name: 'Auditivo', icon: 'music', backgroundColor: '#0070bd'},
    {id: 3, name: 'Visual', icon: 'tablet', backgroundColor: '#c2262e'},
    {id: 4, name: 'Logica', icon: 'calculator', backgroundColor: '#77cc83'},
    {id: 5, name: 'Intrapersonal', icon: 'heart', backgroundColor: '#9e005c'},
    {id: 6, name: 'Interpersonal', icon: 'chain', backgroundColor: '#fab03b'},
    {id: 7, name: 'Linguistica', icon: 'book', backgroundColor: '#662e91'},
    {id: 8, name: 'Naturalista', icon: 'leaf', backgroundColor: '#00a89e'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {learnings.map(item => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Activities')}
              key={item.id}
              style={[
                styles.buttonContainer,
                {backgroundColor: item.backgroundColor},
              ]}>
              <Icon
                type={'font-awesome'}
                color={'#fff'}
                name={item.icon}
                size={50}
              />
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: 'red',
    borderWidth: 1.5,
    borderColor: '#fff',
    margin: 5,
    borderRadius: Math.round(WidthScreen + HeightScreen) / 2,
    width: WidthScreen * 0.4,
    height: WidthScreen * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LearningStyleScreen;
