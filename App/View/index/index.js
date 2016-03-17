'use strict';

import React, { View, Image, Text } from 'react-native';
import Nav from '../../Component/nav/nav';
import Home from '../home/home';

export default class Index extends React.Component{
    static defaultProps = {
        component: [<Home />,<View style={{flex:1,backgroundColor:'green'}} />,<View style={{flex:1,backgroundColor:'yellow'}} />,<View style={{flex:1,backgroundColor:'blue'}} />],
        data: null
    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [
                {
                    txt: '首页',
                    uri: require('./img/tab1_1.png'),
                    suri: require('./img/tab1_2.png')
                },
                {
                    txt: '新房',
                    uri: require('./img/tab2_1.png'),
                    suri: require('./img/tab2_2.png')
                },
                {
                    txt: '二手房',
                    uri: require('./img/tab3_2.png'),
                    suri: require('./img/tab3_1.png')
                },
                {
                    txt: '我的',
                    uri: require('./img/tab4_2.png'),
                    suri: require('./img/tab4_1.png')
                }
            ]
        }
    }
    // 渲染
    render(){
        return (
            <Nav component={this.props.component} data={this.state.data} />
        );
    }
};