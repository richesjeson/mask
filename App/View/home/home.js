'use strict';

import React, { View, Image, Text } from 'react-native';

import Nav from '../../Component/nav/nav';

export default class Home extends React.Component{
    static defaultProps = {
        component: [<View style={{width:320,height:568,backgroundColor:'red'}} />,<View style={{width:320,height:568,backgroundColor:'green'}} />,<View style={{width:320,height:568,backgroundColor:'yellow'}} />,<View style={{width:320,height:568,backgroundColor:'blue'}} />,<View style={{width:320,height:568,backgroundColor:'#893333'}} />],
        data: null,
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
                    uri: require('./img/tab0_1.png'),
                    suri: require('./img/tab0_2.png')
                },
                {
                    txt: '购物车',
                    uri: require('./img/tab2_1.png'),
                    suri: require('./img/tab2_2.png')
                },
                {
                    txt: '公文包',
                    uri: require('./img/tab3_1.png'),
                    suri: require('./img/tab3_2.png')
                },
                {
                    txt: '我的',
                    uri: require('./img/tab4_1.png'),
                    suri: require('./img/tab4_2.png')
                }
            ]
        }
    }
    // 渲染
    render(){
        return (
            <View>
                <Nav component={this.props.component} data={this.state.data} />
            </View>
        );
    }
};