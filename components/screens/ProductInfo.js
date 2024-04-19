import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ToastAndroid,
  FlatList,
} from "react-native";
import { COLOURS } from "../database/Database";
import { Rating } from "react-native-ratings";
import data from "../database/db.json";
import Entypo from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;
  const [product, setProduct] = useState({});
  const [showFullDescription, setShowFullDescription] = useState(false);

  const width = Dimensions.get("window").width;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    for (let index = 0; index < data.length; index++) {
      if (data[index].id == productID) {
        await setProduct(data[index]);
        return;
      }
    }
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show("Item Added Successfully", ToastAndroid.SHORT);
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show("Item Added Successfully", ToastAndroid.SHORT);
      } catch (error) {
        return error;
      }
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        margin: 15,
        backgroundColor: COLOURS.white,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {item.author} -
        <Rating
          imageSize={15}
          readonly
          startingValue={item.rating}
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        />
      </Text>
      <Text>{item.comment}</Text>
      <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <FlatList
      style={{ backgroundColor: COLOURS.white }}
      ListHeaderComponent={
        <>
          <View
            style={{
              width: "100%",
              backgroundColor: COLOURS.white,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 16,
                paddingLeft: 16,
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack("Home")}>
                <Entypo
                  name="chevron-left"
                  style={{
                    fontSize: 18,
                    color: COLOURS.backgroundDark,
                    padding: 12,
                    backgroundColor: COLOURS.backgroundLight,
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: width,
                  height: 240,
                  paddingRight: 120,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: product.image }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginVertical: 4,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "600",
                  letterSpacing: 0.5,
                  marginVertical: 4,
                  color: COLOURS.black,
                  maxWidth: "84%",
                }}
              >
                {product.watchName}
              </Text>
              <TouchableOpacity onPress={() => addToCart(product.id)}>
                <Entypo
                  name="heart"
                  style={{
                    fontSize: 24,
                    color: COLOURS.red,
                    backgroundColor: COLOURS.red + 10,
                    padding: 8,
                    borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 4,
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: -10,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "600",
                  letterSpacing: 0.5,
                  marginVertical: 4,
                  color: COLOURS.red,
                  maxWidth: "84%",
                }}
              >
                &euro; {product.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 14,
                marginTop: -3,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  color: COLOURS.black,
                }}
              >
                Automatic {product.automatic}
              </Text>
              {product.automatic ? (
                <Entypo
                  name="check"
                  style={{
                    fontSize: 18,
                    color: COLOURS.green,
                    marginRight: 6,
                  }}
                />
              ) : (
                <Entypo
                  name="circle-with-cross"
                  style={{
                    fontSize: 18,
                    color: COLOURS.red,
                    marginRight: 6,
                  }}
                />
              )}
            </View>
            <View>
              {showFullDescription ? (
                <Text
                  style={{
                    fontSize: 12,
                    color: COLOURS.black,
                    fontWeight: "400",
                    letterSpacing: 1,
                    lineHeight: 20,
                  }}
                >
                  {product.description}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 12,
                    color: COLOURS.black,
                    fontWeight: "400",
                    letterSpacing: 1,
                    lineHeight: 20,
                  }}
                  numberOfLines={5}
                >
                  {product.description}
                </Text>
              )}
              {!showFullDescription && (
                <TouchableOpacity onPress={toggleDescription}>
                  <Text style={{ color: "blue" }}>See All</Text>
                </TouchableOpacity>
              )}
              {showFullDescription && (
                <TouchableOpacity onPress={toggleDescription}>
                  <Text style={{ color: "blue" }}>Show Less</Text>
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 14,
              }}
            >
              <Entypo
                name="archive"
                style={{
                  fontSize: 18,
                  color: COLOURS.blue,
                  marginRight: 6,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLOURS.black,
                }}
              >
                Brand Name: {product.brandName}
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 15 }}>
            Feedbacks
          </Text>

          {product.feedbacks && product.feedbacks.length > 0 ? (
            <FlatList
              data={product.feedbacks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              ListHeaderComponent={
                <>
                  <View>
                    <Text>Total feedbacks: {product.feedbacks.length}</Text>
                  </View>
                </>
              }
            />
          ) : (
            <Text style={{ fontSize: 16, margin: 15 }}>
              This watch no have comment
            </Text>
          )}
        </>
      }
    />
  );
};

export default ProductInfo;
