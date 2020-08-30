import React, { useEffect } from "react";
import {  View, ImageBackground, StyleSheet, SafeAreaView, FlatList, TouchableOpacity  } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getListPrivate, increaseItemQuantity, decreaseItemQuantity } from "../store/listPrivate";
import { globalStyles } from '../../styles/globalStyles';
import { Text, Icon, Body, Right, Button, ListItem, Card, Left, Container } from 'native-base';
import { Actions } from "react-native-router-flux";

export default function ListPrivate() {


    const navigate = (screen) => {
      Actions[screen]();
    };

    const renderItem = ({ item }) => {
        return (
          <ListItem icon>
          <Left />
          <Body>
            <Text numberOfLines={1}>{item.item.itemName}</Text>
            <Text note numberOfLines={1}>Quantity: {item.quantity}</Text>
          </Body>
          <Right style={{ width: "35%" }}>
            <Button style={styles.button} transparent onPress={() => increase(item.userId, item.listId, item.itemId, item.quantity)}>
              <Text>+</Text>
            </Button>
            <Button style={styles.button} transparent onPress={() => decrease(item.userId, item.listId, item.itemId, item.quantity)}>
              <Text>-</Text>
            </Button>
            <Button style={styles.button} transparent onPress={() => console.log("DELETE ITEM")}>
              <Text>x</Text>
            </Button>
          </Right>
        </ListItem>
    )};

    const listPrivate = useSelector((state) => state.listPrivate);
    const user = useSelector((state) => state.singleUser);
    const dispatch = useDispatch();
    const loadListPrivate = (userId) => {
        dispatch(getListPrivate(userId));
    };
    const increase = (userId, listId, itemId, quantity) => {
      dispatch(increaseItemQuantity(userId, listId, itemId, quantity))
    }
    const decrease = (userId, listId, itemId, quantity) => {
      if(quantity > 1){
        dispatch(decreaseItemQuantity(userId, listId, itemId, quantity))
      }
    }

    useEffect(() => {
        loadListPrivate(user.id);
    }, [user.id]);

        return (
            <Container>
            <ImageBackground source={require("../../assets/peas.jpg")} style={globalStyles.background}>
                <View style={styles.background}>
                <View>
                {!user.id && listPrivate.length === 0
                ? <View style={{ marginTop: 30, backgroundColor: 'rbga(255,0,0,0.5)', height: '90%', width: '95%', alignSelf: 'center', borderRadius: 25 }}>
                    <Text>You don't have any item in your private list!</Text>
                </View>
                : <SafeAreaView style={{ marginTop: 30, backgroundColor: 'white', height: '80%', width: '95%', alignSelf: 'center', borderRadius: 25 }}>
                    <FlatList
                        data={listPrivate}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.item.id.toString()}
                        />
                    </SafeAreaView>
                }
                </View>
                <View style={{flex: 1, marginTop: '3%'}}>
                  <TouchableOpacity onPress={() => navigate("AddNewItem")} title="Add New Item">
                  <Text style={globalStyles.button}>Add New Item</Text>
                </TouchableOpacity>
                </View>
                </View>
          </ImageBackground>
          </Container>
        )
}


var styles = StyleSheet.create({
    buttonGroup: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex: 1
    },
    button: {
      marginHorizontal: '-5%'
    },
    background: {
      marginVertical: 30, backgroundColor: 'white', width: '85%', flexDirection: 'column', borderRadius: 25,  justifyContent: 'space-between', flex: 1, alignSelf: 'center', paddingVertical: 10
    }
  })
  