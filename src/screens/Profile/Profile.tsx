import {Button} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import storage from '@react-native-firebase/storage';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {gql, useMutation} from '@apollo/client';

export function Profile() {
  const [photo, setPhoto] = useState<string>('');
  const [photoUri, setPhotoUri] = useState<string>('');
  const [uploadComplete, setUploadComplete] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const reference = storage().ref(
    'profile-pictures/clabmlx610000u8bsv9acxpnv-profile.png', //quando o contexto de auth for criado, pegar o id do usuário de lá
  );
  const base64Icon = `data:image/png;base64,${!!photo && photo}`;
  const uploadToFirebase = reference.putFile(photoUri);

  async function uploadToCloud() {
    await uploadToFirebase;
    uploadToFirebase.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
    });
    uploadToFirebase.then(() => {
      console.log('Image uploaded to the bucket!');
      setUploadComplete(true);
    });
  }

  const updateProfilePhoto = gql`
    mutation UpdateProfilePhoto($photoUrl: String!) {
      updateProfilePhoto(photoUrl: $photoUrl) {
        photoUrl
        name
      }
    }
  `;
    const [updateUserPhoto, data] = useMutation(updateProfilePhoto);
    
  useEffect(() => {
    !!uploadComplete &&
      reference.getDownloadURL().then(downloadLink => {
        setDownloadUrl(downloadLink),
          updateUserPhoto({variables: {photoUrl: downloadLink}});
      });
  }, [uploadComplete]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {!!photo && (
        <Image
          source={{uri: base64Icon}}
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            borderRadius: 20,
          }}
        />
      )}
      <Button
        onPress={async () =>
          await launchImageLibrary(
            {mediaType: 'photo', includeBase64: true, quality: 0.1},
            pickedImage => {
              if (pickedImage !== null || undefined) {
                setPhoto(pickedImage?.assets![0].base64);
                setPhotoUri(pickedImage?.assets![0].uri);
              }
            },
          )
        }>
        Escolher foto
      </Button>
      <Button onPress={() => uploadToCloud()}>Upload</Button>
      {!!downloadUrl && (
        <Image source={{uri: downloadUrl}} style={{width: 100, height: 100}} />
      )}
    </View>
  );
}
