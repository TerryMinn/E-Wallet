import CText from "@/components/ui/c-text";
import Heading from "@/components/ui/heading";
import { Colors } from "@/constants/Colors";
import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useBalanceQuery } from "../hook/useBalanceFetcher";

type MoneyCardProps = {
  userId: string;
};

const MonetCard = ({ userId }: MoneyCardProps) => {
  const { amount, isLoading } = useBalanceQuery({ id: userId });
  const [show, setShow] = useState(false);
  return (
    <ImageBackground
      source={require("../../../assets/images/photos/money-card.png")}
      style={styles.cardContainer}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.floatContainer}>
          <Image
            source={require("../../../assets/images/photos/overlay-card.png")}
          />
        </View>
        <View style={styles.placeholder}>
          <CText style={{ color: Colors.primary }}>Balance</CText>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            {isLoading ? (
              <ActivityIndicator color={Colors.primary} />
            ) : (
              <Heading>{show ? "****" : `$${amount}`}</Heading>
            )}
            <TouchableOpacity onPress={setShow.bind(null, !show)}>
              {show ? <EyeOff /> : <Eye />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MonetCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    width: "100%",
    height: 200,
  },
  container: {
    position: "relative",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  image: {
    borderRadius: 20,
  },
  floatContainer: {
    position: "absolute",
    right: 0,
    top: -40,
  },
  placeholder: {
    alignSelf: "flex-end",
  },
});
