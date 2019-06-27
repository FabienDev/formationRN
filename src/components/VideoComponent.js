/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'; // obligatoire
import Video from 'react-native-video';
import {StyleSheet, ScrollView, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class VideoComponent extends React.Component {
  
  callback = () => {
    this.props.onVideoEnd(this.props.uri)
  }

  render() {
      
    // size sert juste à tester les paramètres optionnels
    let size = 20;
    if(this.props.size) {
      size = this.props.size;
    }
    return (
      <ScrollView>
     <Video source={{uri: this.props.uri}}
      onEnd={() => this.callback()}
      controls={this.props.controls}
      style={styles.video} />
      </ScrollView>
    );
  }
}

VideoComponent.propTypes = {
  controls: PropTypes.bool.isRequired,
  uri: PropTypes.string.isRequired,
  size: PropTypes.number
}

const styles = StyleSheet.create({
  video: {
    width: 300, height:300, position:'relative'
  }
});

