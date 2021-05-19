import React from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import {Card, Button, Input} from 'react-native-elements';
import {StackScreenProps} from '@react-navigation/stack';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

interface Props extends StackScreenProps<any, any> {}

const RegisterScreen = ({navigation}: Props) => {
  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}>
          <Card containerStyle={styles.card}>
            <Card.Title h4>Registro</Card.Title>
            <Input
              label={'Nombre'}
              placeholder={'Ejem: Alex Romero'}
              autoCompleteType={'name'}
              autoCapitalize={'words'}
              maxLength={25}
            />
            <Input
              label={'Email'}
              placeholder={'Ejem: Alex@gmail.com'}
              keyboardType={'email-address'}
              autoCompleteType={'email'}
              maxLength={25}
            />
            <Input
              label={'Contraseña'}
              keyboardType={'number-pad'}
              secureTextEntry={true}
              placeholder={'****'}
              maxLength={4}
            />
            <Input
              label={'Confirme su contraseña'}
              keyboardType={'number-pad'}
              secureTextEntry={true}
              placeholder={'****'}
              maxLength={4}
            />
            <Button title={'Registrarse'} buttonStyle={styles.button} />
          </Card>
        </KeyboardAvoidingScrollView>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    top: -25,
    padding: 10,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0069c0',
  },
  containerlinks: {
    padding: 10,
    alignItems: 'center',
  },
});
export default RegisterScreen;
