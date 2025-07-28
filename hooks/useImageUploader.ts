import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Platform } from "react-native";

export default function useImageUploader() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Sorry, we need camera roll permissions to make this work!"
        );
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Sorry, we need camera permissions to make this work!"
        );
        return;
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    console.log(blob);
    const formData = new FormData();
    formData.append("file", blob, `${Math.random()}.jpg`);

    try {
      const uploadResponse = await fetch("/api/profile/upload", {
        method: "POST",
        body: formData,
      });

      const data = await uploadResponse.json();
      console.log(data);
      if (data) {
        setImage(data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const showImageSourcePrompt = () => {
    Alert.alert(
      "Select Image",
      "Choose an image source",
      [
        {
          text: "Photo Library",
          onPress: pickImage,
        },
        {
          text: "Camera",
          onPress: takePhoto,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  return { showImageSourcePrompt, image };
}
