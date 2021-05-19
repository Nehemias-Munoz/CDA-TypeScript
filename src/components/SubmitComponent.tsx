import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {Thumbnail} from 'react-native-thumbnail-video';
import ButtonResource from './ButtonResource';

interface Props {
  typeSubmit: string;
}

const Video = () => {
  //MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState('');

  //#region FUNCIONES
  const enviarDatos = () => {
    if (url.trim() === '' || url === null || url.length <= 5) {
      mostrarAlerta();
      return;
    }
    setModalVisible(!modalVisible);
  };

  const mostrarAlerta = () => {
    Alert.alert(
      'Error', //Titulo
      'Debe ingresar una Url Valida',
      [
        {
          text: 'Ok',
        },
      ],
    );
  };
  //#endregion

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={stylesVideo.centeredView}>
          <View style={stylesVideo.modalView}>
            <Text style={stylesVideo.modalTextTitle}>
              Revisa tu trabajo aqui
            </Text>
            {/* {activity.type === 'Link' ? ( */}
            <Thumbnail type={'standard'} imageWidth="100%" url={url} />
            {/* ) : null} */}
            <Pressable
              style={[stylesVideo.modalButton, stylesVideo.submitButton]}>
              <Text style={stylesVideo.modalButtonText}>Enviar Evidencia</Text>
            </Pressable>
            <Pressable
              style={[stylesVideo.cancelButton, stylesVideo.modalButton]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={stylesVideo.modalButtonText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={stylesVideo.containerSubmit}>
        <TextInput
          onChangeText={setUrl}
          style={stylesVideo.inputStyle}
          keyboardType={'url'}
          placeholder={'Copia tu link aqui'}
        />
        <Button
          icon={
            <Icon name="upload" type="font-awesome" size={20} color="#ffffff" />
          }
          titleStyle={stylesVideo.textButton}
          containerStyle={stylesVideo.containerButton}
          buttonStyle={stylesVideo.buttonStyle}
          title={' Entregar'}
          onPress={() => enviarDatos()}
        />
      </View>
    </View>
  );
};
const SubmitComponent = ({typeSubmit}: Props) => {
  return (
    <View>
      {typeSubmit === 'Link' ? <Video /> : null}
      {typeSubmit === 'Audio' ? (
        <ButtonResource typeResource={'Audio'} />
      ) : null}
      {typeSubmit === 'Document' ? (
        <ButtonResource typeResource={'Document'} />
      ) : null}
      {typeSubmit === 'Image' ? (
        <ButtonResource typeResource={'Image'} />
      ) : null}
    </View>
  );
};

const stylesVideo = StyleSheet.create({
  containerSubmit: {
    flexDirection: 'row',
    marginTop: 5,
  },
  inputStyle: {
    paddingHorizontal: 7,
    height: 50,
    flex: 2,
    borderWidth: 0.8,
    borderColor: '#000',
    borderRightColor: '#0069c0',
  },
  containerButton: {
    flex: 1,
  },
  buttonStyle: {
    height: 50,
    backgroundColor: '#0069c0',
  },
  textButton: {
    marginLeft: 3,
  },
  //Modal
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
    backgroundColor: '#0069c0',
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
export default SubmitComponent;
