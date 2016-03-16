'use strict';

import React, { Platform } from 'react-native';
import PixelRatio from 'PixelRatio';

let PR = PixelRatio.get();

export const styles = {
    wrap: {
        flex: 1,
        flexDirection: 'column'
    },
    view: {
        flex: 1,
        overflow: 'hidden'
    },
    navbar: {
        height: 44,
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
