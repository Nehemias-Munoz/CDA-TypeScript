import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';

//Componentes
import EvidenceTypeBar from '../components/EvidenceTypeBar';
import MyList from '../components/MyList';

const LabyrinthAct = () => {
  //RADIO BUTTON
  const [value, setValue] = useState('');
  //Datos Actividad
  const [activity] = useState({
    id: 9,
    title: 'Laberinto',
    type: 'Automatic',
    description:
      'Responda la siguiente pregunta, puede acceder a su respuesta recorriendo el laberinto:',
    concept: '¿Cuanto es 3 * 7?',
    instruction: 'Seleccione la alternativa correcta.',
    options: [
      {id: 1, label: 'A. 21'},
      {id: 2, label: 'B. 37'},
      {id: 3, label: 'C. 10'},
    ],
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card.Title style={styles.title}>{activity.title}</Card.Title>
              <EvidenceTypeBar type={activity.type} />
              <Card.Image
                style={styles.imageStyle}
                PlaceholderContent={<ActivityIndicator />}
                source={require('../assets/activities/labyrinth.jpg')}
              />
              <Card containerStyle={styles.secondaryCard}>
                <Text style={styles.infoTitle}>Descripcion:</Text>
                <Text style={styles.infoDesc}>
                  {activity.description} {activity.concept}
                </Text>
                <Card.Image
                  containerStyle={styles.imageConceptContainer}
                  PlaceholderContent={<ActivityIndicator />}
                  style={styles.imageConcept}
                  source={require('../assets/activities/labyrinth/labyrinth.jpeg')}
                />
                <Text style={styles.infoTitle}>Instruciones:</Text>
                <Text style={styles.infoDesc}>{activity.instruction}</Text>
                <RadioButton.Group
                  onValueChange={valueOption => setValue(valueOption)}
                  value={value}>
                  {activity.options.map(item => (
                    <RadioButton.Item
                      key={item.id}
                      label={item.label.toString()}
                      value={item.label}
                    />
                  ))}
                </RadioButton.Group>
              </Card>
              <Button title={'Enviar'} buttonStyle={styles.buttonStyle} />
              <MyList />
            </ScrollView>
          </Card>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    height: 100,
  },
  title: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
  secondaryCard: {
    marginHorizontal: 0,
    width: '100%',
  },
  infoTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoDesc: {
    fontSize: 14,
    marginVertical: 3,
    fontWeight: 'normal',
    textAlign: 'justify',
  },
  imageConceptContainer: {
    height: 300,
    borderRadius: 5,
  },
  imageConcept: {
    height: '100%',
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#062b3c',
  },
});

export default LabyrinthAct;
