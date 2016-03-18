'use strict';

import React, { View, Image, Text } from 'react-native';

export default class Mine extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.selectfn = props.selectComponent;
    }
    _gotoNewHouse(index){
        this.selectfn(index);
    }
    // 渲染
    render(){
        return (
            <View style={{flex: 1}} onTouchEnd={this._gotoNewHouse.bind(this,1)}>
                <View style={{flex: 1,backgroundColor: 'red'}}><Text>{'我的'}</Text></View>
            </View>
        );
    }
};