import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableNativeFeedback,
} from 'react-native';
import {Card, Button, Input, Text} from 'react-native-elements';

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Card.Title h4>Inicio de sesión</Card.Title>
          <Input
            label={'Email'}
            placeholder={'ejem: Alex@gmail.com'}
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
          <Button
            title={'Ingresar'}
            buttonStyle={styles.button}
            onPress={() => navigation.navigate('AssignaturesScreen')}
          />
          <View style={styles.containerlinks}>
            <Text>Olvidaste tu contraseña?</Text>
            <Text onPress={() => navigation.navigate('RegisterScreen')}>
              Registrarse
            </Text>
          </View>
        </Card>
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
  },
  button: {
    backgroundColor: '#0069c0',
  },
  containerlinks: {
    padding: 10,
    alignItems: 'center',
  },
});
export default LoginScreen;
