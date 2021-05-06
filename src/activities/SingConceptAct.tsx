import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-elements';

//Componentes
import EvidenceTypeBar from '../components/EvidenceTypeBar';
import SubmitComponent from '../components/SubmitComponent';
import MyList from '../components/MyList';

const SingConceptAct = () => {
  //Tipo de componente submit
  const [typeSubmit, setTypeSubmit] = useState('');
  //Datos Actividad
  const [activity] = useState({
    id: 13,
    title: 'A Cantar',
    type: ['Link', 'Audio'],
    description:
      'Te invito a crear un video donde puedas expresar cantando el siguiente concepto:',
    concept: 'Amor',
    instruction:
      'Grabe un audio o un video, si es audio suba como recurso y si es video suba a Youtube y comparta el link del video, ejemplo: https://youtu.be/ejemplo.',
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card.Title style={styles.title}>{activity.title}</Card.Title>
              <EvidenceTypeBar
                type={activity.type}
                setTypeSubmit={setTypeSubmit}
              />
              <Card.Image
                style={styles.imageStyle}
                PlaceholderContent={<ActivityIndicator />}
                source={require('../assets/activities/singconcept.jpg')}
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
                  source={require('../assets/activities/singconcept/amor.jpg')}
                />
                <Text style={styles.infoTitle}>Instruciones:</Text>
                <Text style={styles.infoDesc}>{activity.instruction}</Text>
              </Card>
              {typeSubmit ? <SubmitComponent typeSubmit={typeSubmit} /> : null}
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
    margin: 10,
    borderRadius: 5,
  },
  imageConcept: {
    height: 100,
    width: '100%',
  },
});

export default SingConceptAct;
