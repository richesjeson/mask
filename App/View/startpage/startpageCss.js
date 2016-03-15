'use strict';

import React, { Platform } from 'react-native';
import Dimensions from 'Dimensions';

let { width, height } = Dimensions.get('window');

export const styles = {
    wrap: {
        width: width,
        height: height,
        overflow: 'hidden'
    },
    main: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        width: width,
        height: height,
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0
    },
    btnmain: {
        width: width,
        height: height,
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        backfaceVisibility: 'hidden'
    },
    btn: {
        width: 50,
        height: 20,
        position: 'absolute',
        top: 20,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btntxt: {
        color: '#fff',
        fontSize: 10,
        opacity: 0.8
    },
    link: {
        width: width,
        height: 150,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    linktxt: {
        opacity: 0.8,
        fontSize: 18,
        color: '#fff',
        textDecorationLine: 'underline'
    }
};

