import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Button, Icon} from 'react-native-elements';

interface Props {
  typeResource: string;
}

const ButtonResource = ({typeResource}: Props) => {
  const [validation, setValidation] = useState(false);
  const [document, setDocument] = useState<any>();
  const openDocumentFile = async () => {
    let Resource;
    switch (typeResource) {
      case 'Image':
        Resource = [DocumentPicker.types.images];
        break;
      case 'Video':
        Resource = [DocumentPicker.types.video];
        break;
      case 'Document':
        Resource = [
          DocumentPicker.types.pdf,
          DocumentPicker.types.docx,
          DocumentPicker.types.doc,
        ];
        break;
      case 'Audio':
        Resource = [DocumentPicker.types.audio];
        break;
      default:
        Resource = [DocumentPicker.types.allFiles];
        break;
    }
    try {
      const res = await DocumentPicker.pick({
        type: Resource,
      });
      if (res) {
        setDocument(res);
        setValidation(true);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
        setValidation(false);
      } else {
        throw err;
      }
    }
  };
  return (
    <View>
      <Button
        title={' Subir Archivo'}
        buttonStyle={styles.buttonStyle}
        onPress={() => openDocumentFile()}
        icon={
          <Icon name="upload" type="font-awesome" size={20} color="#ffffff" />
        }
      />
      {validation ? (
        <>
          <View style={styles.container}>
            <View style={styles.iconContainerDocument}>
              <Icon type={'font-awesome'} name={'file-pdf-o'} size={37} />
            </View>
            <View style={styles.textContainerDocument}>
              <Text>{document.name}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Button
              containerStyle={styles.submitContainerButton}
              icon={<Icon name={'check'} type={'font-awesome'} />}
              title={' Enviar'}
            />
            <Button
              containerStyle={styles.cancelContainerButton}
              buttonStyle={styles.cancelButton}
              icon={<Icon name={'cancel'} type={'material-icon'} />}
              title={' Cancelar'}
              onPress={() => setValidation(!validation)}
            />
          </View>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  iconContainerDocument: {
    flex: 1,
    padding: 3,
  },
  textContainerDocument: {
    flex: 2,
    padding: 3,
  },
  buttonStyle: {
    backgroundColor: '#0069c0',
  },
  submitContainerButton: {
    flex: 2,
  },
  cancelContainerButton: {
    flex: 1,
  },
  cancelButton: {
    backgroundColor: '#ff8080',
  },
});
export default ButtonResource;
