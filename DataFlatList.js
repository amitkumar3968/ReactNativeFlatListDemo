import React, { Component } from 'react';
import { View, Text, FlatList, Image ,ImageBackground } from 'react-native';


class DataFlatList extends React.Component {

    constructor(props) {
        super(props);

        this.state = { testdata: [1, 2, 3] };
    }

    _keyExtractor = (item, index) => item.toString();

    _renderItem = ({ item }) => (

        <View>
            <ImageBackground 
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg' }}
                style={{ width: 150, height: 150, flexDirection:'column', justifyContent:'flex-end' }}
            >
                <Text style={{backgroundColor:'orange'}}>{item}</Text>
            </ImageBackground>
            
        </View>
    );

    render() {
        return (
            <View>
                <Text>Hello World</Text>
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