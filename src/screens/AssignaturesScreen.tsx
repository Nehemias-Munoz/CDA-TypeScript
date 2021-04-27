import React, {useState} from 'react';
import {View, StyleSheet, FlatList, ImageBackground} from 'react-native';
import {Text} from 'react-native-elements';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

const AssignaturesScreen = ({navigation}: Props) => {
  const [assignatures, setAssignatures] = useState([
    {id: 1, name: 'Matematicas'},
    {id: 2, name: 'Lenguaje'},
    {id: 3, name: 'Musica'},
    {id: 4, name: 'Historia'},
    {id: 5, name: 'Artes'},
    {id: 6, name: 'Ciencias'},
    {id: 7, name: 'Algebra'},
  ]);
  return (
    <ImageBackground
      source={require('../assets/images/assignatures.jpg')}
      style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={assignatures}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.tarjetas}>
              <Text style={styles.tarjetaText} h3>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  tarjetas: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.2,
    marginVertical: 7,
    paddingVertical: 25,
    shadowColor: '#000',
    backgroundColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tarjetaText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
export default AssignaturesScreen;
