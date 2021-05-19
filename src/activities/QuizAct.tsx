import React, {useState} from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import {Icon, Card, Button, CheckBox} from 'react-native-elements';
//Componentes
import EvidenceTypeBar from '../components/EvidenceTypeBar';
import MyList from '../components/MyList';

const QuizAct = () => {
  const [typeSubmit, setTypeSubmit] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [check1BoxValue, setCheck1BoxValue] = useState(false);
  const [check2BoxValue, setCheck2BoxValue] = useState(false);
  const [check3BoxValue, setCheck3BoxValue] = useState(false);

  const [activity] = useState({
    id: 10,
    title: 'Quiz',
    type: 'Automatic',
    description: 'Responda la siguiente pregunta:',
    concept: '¿Que es un algoritmo?',
    instruction: 'Seleccione la o las alternativas correctas.',
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
            {check2BoxValue && check1BoxValue && !check3BoxValue ? (
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
            source={require('../assets/activities/quiz.jpg')}
          />
          <Card containerStyle={styles.secondaryCard}>
            <Text style={styles.infoTitle}>Descripcion:</Text>
            <Text style={styles.infoDesc}>
              {activity.description} {activity.concept}
            </Text>
            <Text style={styles.infoTitle}>Instruciones:</Text>
            <Text style={styles.infoDesc}>{activity.instruction}</Text>
            <View>
              <CheckBox
                title={'Secuencia de pasos'}
                checked={check1BoxValue}
                onPress={() => setCheck1BoxValue(!check1BoxValue)}
              />
              <CheckBox
                title={'Busca resolver un problema'}
                checked={check2BoxValue}
                onPress={() => setCheck2BoxValue(!check2BoxValue)}
              />
              <CheckBox
                title={'Ninguna de las anteriores'}
                checked={check3BoxValue}
                onPress={() => setCheck3BoxValue(!check3BoxValue)}
              />
            </View>
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
export default QuizAct;
