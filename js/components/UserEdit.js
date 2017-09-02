import React from 'react';
import { Animated, Dimensions, Image, Text, TouchableOpacity, View, WebView, Button, StyleSheet, TextInput } from 'react-native';
const io = require('socket.io-client');
import ImageModal from './modals/ImageModal';
import TextModal from './modals/TextModal';
import ColorModal from './modals/ColorModal';
import OrderModal from './modals/OrderModal';
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var {
  height: deviceHeight
} = Dimensions.get('window');

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textModal: false,
      title: '',
      imageModal: false,
      colorModal: false,
      imageId: null,

      order: this.props.order,
      orderModal: false,
      html: '',
      componentOrder: '',
    };
    this.handleRearrange = this.handleRearrange.bind(this);
  };

  handleRearrange() {
    this.setState({ orderModal: true });
  }

  componentDidMount() {
    const socket = io(global.HOST, { transports: ['websocket'] });

    socket.on('launchTitleModal', (title) => {
      this.setState({ title, textModal: true });
    });

    socket.on('imgChange', (id) => {
      this.setState({ imageModal: true, imageId: id });
    });

    socket.on('colorChange', (data) => {
      console.log('colorChange data', data);
      this.setState({ colorModal: true });
    });
  }

  render() {
    return (
      <View style={styles.flexContainer}>
        <WebView style={styles.webView} source={{uri: `${global.HOST}/pages/templates/reactify.html`}} />
        {this.state.textModal ? <TextModal title={this.state.title} closeModal={() => this.setState({textModal: false}) } /> : null}
        {this.state.imageModal ? <ImageModal imageId={this.state.imageId} closeModal={() => this.setState({imageModal: false})} /> : null}
        {this.state.colorModal ? <ColorModal navigation={this.props.navigation} closeModal={() => this.setState({colorModal: false})} /> : null}
        {this.state.orderModal ? <OrderModal closeModal={() => this.setState({orderModal: false})} /> : null}
        <Button title="Rearrange (click this 2x)" onPress={this.handleRearrange} />
      </View>
    )
  };
}

export const styles = StyleSheet.create({
  form: {
    padding: 10,
    borderColor: '#eee',
    borderWidth: 1,
  },
  flexContainer: {
    flex: 1,
  },
  webView: {
    padding: 10,
    width: '100%'
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.3)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
  innerModal:{
    width: '80%',
    backgroundColor: '#fff',
    padding: 10,
    position: 'relative',
    top: '5%',
    borderRadius: 10
  },
  bigText:{
    fontSize: 20,
  },
});

function mapStateToProps({ order }) {
  return { order };
}

export default connect(mapStateToProps, null)(UserEdit);