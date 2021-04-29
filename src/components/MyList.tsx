import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {Snackbar} from 'react-native-paper';

const MyList = () => {
  const [visible, setVisible] = useState(false);

  //Fuciones
  const AddMyList = () => {
    setVisible(true);
  };

  return (
    <>
      <View style={styles.container}>
        <Button
          onPress={() => AddMyList()}
          type={'clear'}
          title={'Agregar a mi lista'}
          icon={<Icon name={'plus'} type={'evilicon'} size={45} />}
        />
      </View>
      <View style={{flex: 1}}>
        <Snackbar
          visible={visible}
          onDismiss={() => setVisible(false)}
          action={{
            label: 'Deshacer',
            onPress: () => {
              console.log('Deshecho');
            },
          }}>
          Se ha agregado a tu lista
        </Snackbar>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginVertical: 3,
  },
});
export default MyList;
