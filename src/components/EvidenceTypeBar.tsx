import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

interface Props {
  type: string | [string];
  setTypeSubmit: (value: string) => void;
}

const EvidenceTypeBar = ({type, setTypeSubmit}: Props) => {
  const tipos = type;
  const [microphone, setMicrophone] = useState(false);
  const [video, setVideo] = useState(false);
  const [image, setImage] = useState(false);
  const [document, setDocument] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  useEffect(() => {
    const comprobarIconoAudio = () => {
      if (tipos.includes('Audio') === true) {
        setMicrophone(true);
        return;
      }
    };
    const comprobarIconoVideo = () => {
      if (tipos.includes('Link') === true) {
        setVideo(true);
        return;
      }
    };
    const comprobarIconoTexto = () => {
      if (tipos.includes('Document') === true) {
        setDocument(true);
        return;
      }
    };
    const comprobarIconoImagen = () => {
      if (tipos.includes('Image') === true) {
        setImage(true);
        return;
      }
    };
    const comprobarIconoAutomatico = () => {
      if (tipos.includes('Automatic') === true) {
        setAutomatic(true);
        return;
      }
    };
    comprobarIconoAudio();
    comprobarIconoVideo();
    comprobarIconoTexto();
    comprobarIconoImagen();
    comprobarIconoAutomatico();
  }, [tipos]);
  return (
    <View style={styles.container}>
      {microphone ? (
        <Icon
          reverse
          raised
          size={20}
          type={'material-community'}
          name={'microphone'}
          onPress={() => setTypeSubmit('Audio')}
        />
      ) : null}
      {video ? (
        <Icon
          size={20}
          raised={true}
          type={'material-community'}
          name={'video'}
          onPress={() => setTypeSubmit('Link')}
        />
      ) : null}
      {document ? (
        <Icon
          size={20}
          raised={true}
          type={'material-community'}
          name={'format-text'}
          onPress={() => setTypeSubmit('Document')}
        />
      ) : null}
      {image ? (
        <Icon
          size={20}
          raised={true}
          type={'material-community'}
          name={'image-multiple'}
          onPress={() => setTypeSubmit('Image')}
        />
      ) : null}
      {automatic ? (
        <Icon
          size={20}
          raised={true}
          type={'material-community'}
          name={'robot'}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});
export default EvidenceTypeBar;
