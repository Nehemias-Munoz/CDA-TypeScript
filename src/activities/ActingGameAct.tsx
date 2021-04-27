import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

const ActingGameAct = () => {
  //Datos Actividad
  const [activity] = useState({
    id: 1,
    title: 'Actuación',
    type: 'Link',
    description:
      'Crea un video de un minuto, donde tu y tus amigos representen el siguiente concepto:',
    concept: 'Celula',
    instruction:
      'Grabe un video, suba a Youtube y comparta el link del video, ejemplo: https://youtu.be/ejemplo.',
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card.Title style={styles.title}>{activity.title}</Card.Title>
              <View style={styles.activityContent}>
                <Text style={styles.infoTitle}>Descripción:</Text>
                <Text style={styles.infoDesc}>
                  {activity.description} {activity.concept}
                </Text>
                <Text style={styles.infoTitle}>Instruciones:</Text>
                <Text style={styles.infoDesc}>{activity.instruction}</Text>
              </View>
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
  title: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
  activityContent: {
    padding: 10,
    borderWidth: 0,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
  },
  infoTitle: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoDesc: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'justify',
  },
  containerConcept: {
    padding: 5,
    alignItems: 'center',
  },
  imageConceptContainer: {
    margin: 10,
    borderRadius: 5,
  },
  imageConceptStyle: {
    width: 100,
    height: 100,
  },
});

export default ActingGameAct;
