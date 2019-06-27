/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ScrollView, Button} from 'react-native';
import Video from 'react-native-video';
import VideoComponent from "../components/VideoComponent";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as defaultActions from "../actions/defaultActions"
import * as velibActions from "../actions/velibActions"
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import * as RNLocalize from "react-native-localize";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class MainScreen extends React.Component {
  state = {prenom:"Fabien", nom:"VEYRAT"};
  meteo = {lundi:`mauvais 
    temps`, mardi:"bon"};

  state = {
    videoStatus:"Not ended",
  } 

  fetchData = () => {
    let results = fetch(
      "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state"
      );
  // On récupère la "promise"
    results.then(response => { // On récupère la réponse (code 55)
      response.json()
              .then(data => { 
                this.setState({ // On stock la donnée
                  data: data
                });
      });
    })

  };

  renderItemRow = ({item}) => {
    let isBookmarked = (this.props.velib_bookmarked.find(velib => velib.id === item.recordid));
    let jsx = <Icon.Button
      onPress={ () => this.props.velibActions.addBookmark({"id":item.recordid}) }
      name="plus"
      color="green"
      accessibilityLabel=""/>

    if( isBookmarked  ) {
      jsx = <Icon.Button
          onPress={ () => this.props.velibActions.removeBookmark(item.recordid) }
          name="minus"
          color="red"
          accessibilityLabel=""/>

    }

    return <View>{ jsx }<Text>{item.fields.station_name}</Text></View>
  }

    componentDidMount() {
    this.fetchData();
    this.props.userActions.acceptCgu(true);
  }

  onVideoEnded = () => {
   this.setState({
      videoStatus : "ended !"
    })
  }

  render() {
    return (
      <ScrollView>
        {this.state.data && <FlatList style={styles.flatlist} 
          data={ this.state.data.records} 
          renderItem={(item) => this.renderItemRow(item)} 
          keyExtractor={(item) => "" + item.recordid} 
          extraData= { this.props.velib_bookmarked } 
           />}
          
        <Text style={styles.toto}>Welcome to {this.state.prenom} !</Text>
        <Text>test</Text>
        <Text style={styles.instructions}>Demain il fera {this.meteo.lundi} To get started, edit App.js</Text>
        <VideoComponent 
          onVideoEnd = {(uri) => this.onVideoEnded(uri)}
          controls={true} uri={"https://r3---sn-hgn7rn7y.googlevideo.com/videoplayback?expire=1561560544&ei=gDETXd-_J4jN8wTWx5XICQ&ip=159.89.236.235&id=o-AM6TfqvUMrTGxrxdSiPvFKzXvw4eENf5XwRiqmRlWwRH&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=13346468&ratebypass=yes&dur=285.373&lmt=1540795863779461&fvip=2&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAOTAbbwEClMyvfHmxMDkYGO3KhVUvaVlvXS2KZqDcj2zAiEA2sqRXGsAw1O4ZFQnx7a4wccaS4ioq1tZLrkbu57WFDk=&title=Soprano%20-%20Roule%20(Clip%20officiel)&cms_redirect=yes&mip=194.51.210.209&mm=31&mn=sn-hgn7rn7y&ms=au&mt=1561538825&mv=m&pl=23&lsparams=mip,mm,mn,ms,mv,pl&lsig=AHylml4wRgIhALaSKiiI8Dtruqx0Aq9y3CSZ-5wtRjIZIaAZjA1z4EHeAiEAt_K1G1lKMtrnUAY78pOVHvXkhlKKiM4-nlfTJLnxSkc="} />
        
      <Text>{this.state.videoStatus}</Text>
        </ScrollView>
    );
  }
}


function mapStateToProps(state) {
  // Ajoute les variables issu du store aux variables du MainScreen via les props
  return {
    user: state.defaultReducer.user,
    cgu_accepted: state.defaultReducer.cgu_accepted,
    velib_bookmarked: state.velibReducer.velib_bookmarked 
  }
}

function mapDispatchToProps(dispatch) {
  // Permet d'utiliser les actions des reducers depuis le MainScreen
  return {
    userActions: bindActionCreators(defaultActions, dispatch),
    velibActions : bindActionCreators(velibActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);

const styles = StyleSheet.create({
  flatlist: {
    fontSize:16,
  },
  flatlistChild: {
    color:'#EEEEEE',
    fontSize:16,
    borderBottomColor: '#ccc',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toto: {
    fontSize: 30,
    color:'cadetblue'
  }
});
