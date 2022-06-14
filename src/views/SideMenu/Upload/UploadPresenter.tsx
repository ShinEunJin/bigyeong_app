import React, { ReactComponentElement } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface UploadProps {
  uploadPhoto: () => void;
}

const UploadPresenter = (props: UploadProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.uploadBtn} onPress={props.uploadPhoto}>
        <Text>Upload</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#1B2430',
  },
});

export default UploadPresenter;
