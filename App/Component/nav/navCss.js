'use strict';

import React, { Platform } from 'react-native';
import Dimensions from 'Dimensions';
import PixelRatio from 'PixelRatio';

let { width, height } = Dimensions.get('window');
let PR = PixelRatio.get();

export const styles = {
    wrap: {
        height: height
    },
    view: {
        height: height,
        overflow: 'hidden'
    },
    viewli: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fff'
    },
    navbar: {
        width: width,
        height: 44,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        borderTopColor: '#ccc',
        borderTopWidth: 1/PR
    },
    navli: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navlitxt: {
        color: '#333',
        fontSize: 10,
        marginTop: 5
    },
    navlitxtcurrent: {
        color: '#873663'
    },
    navliimage: {
        width: 20,
        height: 20
    }
};
