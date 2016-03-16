'use strict';

import React, { View, Image, Text } from 'react-native';
import { styles } from './navCss';

export default class Nav extends React.Component {
    static defaultProps = {
        current: 0,
        component: null,
        data: null
    };
    /*static propTypes = {

    };*/
    /*构造*/
    constructor(props) {
        super(props);
        /*初始状态*/
        this.state = {
            component: props.component,
            data: props.data,
            currentComponent: props.current
        };
    }
    selectComponent(index){
        if(this.state.currentComponent !== index){
            this.setState({
                currentComponent: index
            });
        }
    }
    render(){
        return (
            <View style={styles.wrap}>
                <View style={styles.view}>
                    {this.state.component[this.state.currentComponent]}
                </View>
                <View style={styles.navbar}>
                    {
                        this.state.data.map((value,key)=>
                            <View style={styles.navli} key={key} onTouchStart={this.selectComponent.bind(this,key)}>
                                <Image style={styles.navliimage} source={key==this.state.currentComponent?value.suri:value.uri}/>
                                <Text style={[styles.navlitxt,(key==this.state.currentComponent)&&styles.navlitxtcurrent]}>{value.txt}</Text>
                            </View>
                        )
                    }
                </View>
            </View>
        );
    }
};
