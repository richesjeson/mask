'use strict';

import React, { ScrollView, View, Image, Text, Animated } from 'react-native';
import { styles } from './homeCss';

export default class Home extends React.Component {
    /*构造*/
    constructor(props) {
        super(props);
        /*初始状态*/
        this.state = {
            defaultCity: '上海'
        };
        this.setTransY = {};
        this.bgopacity = {};
        this.imgopacity = {};
    }
    onScroll(e){
        if(e.nativeEvent.contentOffset.y<0) {
            this.setTransY.setNativeProps({
                style: {
                    transform:[{translateY:e.nativeEvent.contentOffset.y}],
                    marginBottom: e.nativeEvent.contentOffset.y,
                    height: styles.swithbox.height+Math.abs(e.nativeEvent.contentOffset.y)
                }
            })
        }
        if(e.nativeEvent.contentOffset.y){
            const count = Math.abs(e.nativeEvent.contentOffset.y<=10?0:e.nativeEvent.contentOffset.y)/100;
            this.bgopacity.setNativeProps({
                style: {
                    backgroundColor: 'rgba(255,102,0,'+count+')'
                }
            });
            this.imgopacity.setNativeProps({
               style: {
                   opacity: (1-count)
               }
            });
        }
    }
    render() {
        return (
            <View style={styles.wrap}>
                <ScrollView style={styles.main} scrollEventThrottle={1} keyboardDismissMode={'interactive'} automaticallyAdjustContentInsets={false} onScroll={this.onScroll.bind(this)}>
                    <View ref={(e)=>this.setTransY = e} style={styles.swithbox}>
                        <Image style={[styles.swithboximg,styles.resizeMode]} source={{uri:'http://f.hiphotos.baidu.com/lvpics/w=1000/sign=4d69c022ea24b899de3c7d385e361c95/f31fbe096b63f6240e31d3218444ebf81a4ca3a0.jpg'}} />
                        <View style={styles.swithboxlibox}>
                            <View style={[styles.swithboxli,styles.swithboxliCurrent]}></View>
                            <View style={styles.swithboxli}></View>
                            <View style={styles.swithboxli}></View>
                        </View>
                    </View>
                    <View style={styles.subnav}>
                        {
                            [1,2].map((value,key)=>
                                <View key={key} style={styles.subnavtr}>
                                    {
                                        [1,2,3,4].map((value,key)=>
                                            <View key={key} style={styles.subnavtd}>
                                                <Image style={[styles.subnavimg,styles.resizeMode]} source={{uri:'http://images2.laiyifen.com/20160315/521b305b35ca2b1891b7583d7232bccc.jpg'}} />
                                                <Text style={styles.subnavtxt}>{'新开楼盘'}</Text>
                                            </View>
                                        )
                                    }
                                </View>
                            )
                        }
                    </View>
                    <View style={[styles.borderTopBottom,styles.news]}>
                        <Image style={[styles.newsimg,styles.resizeMode]} source={require('./img/index_icon4.png')}/>
                        <Text style={styles.newstxt} numberOfLines={1}>{'江湖征集令：启动一天即冲破60人，世纪佳源精品好房'}</Text>
                    </View>
                    <View style={[styles.threenav,styles.borderTopBottom]}>
                        {
                            [1,2,3].map((value,key)=>
                                <View style={[styles.threenavli,(1==key)&&styles.threenavtisub]} key={key}>
                                    <Image style={[styles.threenavimg,styles.resizeMode]} source={{uri:'http://images2.laiyifen.com/20160315/521b305b35ca2b1891b7583d7232bccc.jpg'}}/>
                                    <Text style={styles.threenavti}>{'首付贷'}</Text>
                                    <Text style={styles.threenavdes}>{'放款快额度高'}</Text>
                                </View>
                            )
                        }
                    </View>
                    <View style={[styles.quotation,styles.borderTopBottom]}>
                        <View style={styles.quotationti}>
                            <Text style={styles.quotationtxt}>{'新房行情'}</Text>
                        </View>
                        <View style={styles.quotationcontent}>
                            <View style={[styles.quotationdata,styles.quotationdataBorder]}>
                                <Text style={styles.quotationth}>{'最新成交价'}</Text>
                                <Text style={styles.quotationtt}>{'35,000元/m²'}</Text>
                            </View>
                            <View style={styles.quotationdata}>
                                <Text style={styles.quotationth}>{'本月成交量'}</Text>
                                <Text style={styles.quotationtt}>{'25,152套'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.swithbox,styles.swithboxsmall,styles.borderTopBottom]}>
                        <Image style={[styles.swithboximg,styles.resizeMode]} source={{uri:'http://img.club.pchome.net/upload/club/other/2013/1/17/pics_shalaby_1374380713.jpg'}} />
                        <View style={styles.swithboxlibox}>
                            <View style={[styles.swithboxli,styles.swithboxliCurrent]}></View>
                            <View style={styles.swithboxli}></View>
                            <View style={styles.swithboxli}></View>
                        </View>
                    </View>
                    <View style={[styles.tjmf,styles.borderTopBottom]}>
                        <View style={styles.tjmfli}>
                            <Image style={[styles.tjmfimg,styles.resizeMode]} source={require('./img/index_icon5.png')}/>
                            <View style={styles.tjmftxt}>
                                <Text style={styles.tjmfti}>{'我要推荐'}</Text>
                                <Text style={styles.tjmfth}>{'最高可获'}<Text style={styles.tjmfthred}>{'5000'}</Text>{'元'}</Text>
                            </View>
                        </View>
                        <View style={styles.tjmfli}>
                            <Image style={[styles.tjmfimg,styles.resizeMode]} source={require('./img/index_icon6.png')}/>
                            <View style={styles.tjmftxt}>
                                <Text style={styles.tjmfti}>{'我要买房'}</Text>
                                <Text style={styles.tjmfth}>{'发布房源奖'}<Text style={styles.tjmfthred}>{'100'}</Text>{'元'}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.head} ref={(e)=>this.bgopacity = e}>
                    <Image ref={(e)=>this.imgopacity = e} style={[styles.headimg,styles.resizeMode]} source={require('./img/top.png')} />
                    <View style={styles.headContent}>
                        <View style={styles.seachbox}>
                            <View style={styles.seachadr}>
                                <Text style={styles.seachadrtxt}>{this.state.defaultCity}</Text>
                                <Image style={[styles.seachadrimg,styles.resizeMode]} source={require('./img/arrow13.png')} />
                            </View>
                            <View style={styles.text}>
                                <Image style={[styles.testimg,styles.resizeMode]} source={require('./img/search2.png')} />
                                <Text style={styles.textinput}>{'请输入楼盘名或区域名'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};