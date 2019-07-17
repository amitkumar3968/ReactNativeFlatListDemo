import React, { Component } from 'react';
import { View, Text, FlatList, Image, ImageBackground } from 'react-native';

import NetInfo from "@react-native-community/netinfo";
import Toast, {DURATION} from 'react-native-easy-toast'

class DataFlatList extends React.Component {

    constructor(props) {
        super(props);

        this.state = { testdata: [1, 2, 3] };
    }

    componentDidMount() {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            this.refs.toast.show( state.type+state.isConnected);
        });

        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            this.refs.toast.show( state.type+state.isConnected);
        });

        // Unsubscribe
        //unsubscribe();


    }
    _keyExtractor = (item, index) => item.toString();

    _renderItem = ({ item }) => (

        <View>
            <ImageBackground
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg' }}
                style={{ width: 150, height: 150, flexDirection: 'column', justifyContent: 'flex-end' }}
            >
                <Text style={{ backgroundColor: 'orange' }}>{item}</Text>
            </ImageBackground>

        </View>
    );

    render() {
        return (
            <View>
                <Text>Hello World</Text>
                <Toast ref="toast"/>
                <FlatList
                    data={this.state.testdata}
                    // extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        )


    }
}
export default DataFlatList;