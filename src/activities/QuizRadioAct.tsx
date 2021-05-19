import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Modal,
  Pressable,
} from 'react-native';
import {Icon, Card, Button} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';
//Componentes
import EvidenceTypeBar from '../components/EvidenceTypeBar';
import MyList from '../components/MyList';

const QuizRadioAct = () => {
  const [typeSubmit, setTypeSubmit] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [respuesta, setRespuesta] = useState('');

  const [activity] = useState({
    id: 10,
    title: 'Quiz',
    type: 'Automatic',
    description: 'Responda la siguiente pregunta:',
    concept: '¿Que es python?',
    instruction: 'Seleccione la alternativa correcta.',
    options: [
      {id: 1, label: 'Un Lenguaje de bajo nivel.'},
      {id: 2, label: 'Un lenguaje de maquina.'},
      {id: 3, label: 'Un lenguaje de alto nivel.'},
    ],
  });

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {respuesta === '3' ? (
              <Text style={styles.modalTextTitle}>Correcto</Text>
            ) : (
              <Text style={styles.modalTextTitle}>Incorrecto</Text>
            )}
            <Pressable
              style={[styles.cancelButton, styles.modalButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Card>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card.Title style={styles.title}>{activity.title}</Card.Title>
          <EvidenceTypeBar type={activity.type} setTypeSubmit={setTypeSubmit} />
          <Card.Image
            style={styles.imageStyle}
            PlaceholderContent={<ActivityIndicator />}
            source={require('../assets/activities/quiz.jpg')}
          />
          <Card containerStyle={styles.secondaryCard}>
            <Text style={styles.infoTitle}>Descripcion:</Text>
            <Text style={styles.infoDesc}>
              {activity.description} {activity.concept}
            </Text>
            <Text style={styles.infoTitle}>Instruciones:</Text>
            <Text style={styles.infoDesc}>{activity.instruction}</Text>
            <RadioButton.Group
              onValueChange={valueOption => setRespuesta(valueOption)}
              value={respuesta}>
              {activity.options.map(item => (
                <RadioButton.Item
                  key={item.id}
                  label={item.label.toString()}
                  value={item.id.toString()}
                />
              ))}
            </RadioButton.Group>
          </Card>
          <View style={styles.containerSubmit}>
            <Button
              icon={
                <Icon
                  name="check"
                  type="font-awesome"
                  size={20}
                  color="#ffffff"
                />
              }
              titleStyle={styles.textButton}
              containerStyle={styles.containerButton}
              buttonStyle={styles.buttonStyle}
              title={'Revisar'}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          <MyList />
        </ScrollView>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 15,
  },
  secondaryCard: {
    marginHorizontal: 0,
    width: '100%',
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
  containerSubmit: {
    flexDirection: 'row',
  },
  containerButton: {
    flex: 1,
  },
  buttonStyle: {
    height: 50,
    backgroundColor: '#062b3c',
  },
  textButton: {
    marginLeft: 3,
  },
  imageStyle: {
    height: 100,
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
  //Estilos Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    maxWidth: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalInput: {
    fontSize: 18,
    color: '#000',
    borderRadius: 3,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  modalButton: {
    marginVertical: 5,
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 10,
    elevation: 2,
  },
  submitButton: {
    backgroundColor: '#002b3c',
  },
  cancelButton: {
    backgroundColor: '#ff0000',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalTextTitle: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default QuizRadioAct;
