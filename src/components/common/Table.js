/**
 *  taken from https://raw.githubusercontent.com/Jeepeng/react-native-simple-table/master/src/Table.js
* for some cutomization...
 */

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Platform
} from 'react-native';
import fonts from '../../config/fonts';
import colors from '../../config/colors';
import normalize from '../../utils/normalizeText';

const DEFAULT_HEIGHT = 240;
const DEFAULT_COLUMN_WIDTH = 60;

class Table extends Component {

  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      width: PropTypes.number
    })).isRequired,
    columnWidth: PropTypes.number,
    height: PropTypes.number,
    dataSource: PropTypes.array.isRequired,
    renderCell: PropTypes.func,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    fontFamily: PropTypes.string,

  };

  static defaultProps = {
    columns: [],
    dataSource: [],
    columnWidth: DEFAULT_COLUMN_WIDTH,
  //  height: DEFAULT_HEIGHT,
    renderCell: undefined
  };

  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this._renderCell = this._renderCell.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }

  _renderCell(cellData, col) {
    let style = {width: col.width || this.props.columnWidth || DEFAULT_COLUMN_WIDTH};
    return (
      <View key={col.dataIndex} style={[styles.cell, style]}>
        <Text>{cellData}</Text>
      </View>
    );
  }

  _renderHeader() {
    let { columns, columnWidth } = this.props;
    const { headerTextStyle, h1, h2, h3, h4, fontFamily } = this.props;
    return columns.map((col, index) => {
      let style = {width: col.width || columnWidth || DEFAULT_COLUMN_WIDTH};
      return (
        <View key={index} style={[styles.headerItem, style]}>
          <Text
            style={[
             styles.text,
              h1 && { fontSize: normalize(40) },
              h2 && { fontSize: normalize(34) },
              h3 && { fontSize: normalize(28) },
              h4 && { fontSize: normalize(18) },
              h1 && styles.bold,
              h2 && styles.bold,
              h3 && styles.bold,
              h4 && styles.bold,
              fontFamily && { fontFamily },
              headerTextStyle && headerTextStyle,
      ]}
      >{col.title}</Text>
        </View>
      )
    })
  }

  _renderRow(rowData, index) {
    let { columns, renderCell } = this.props;
    let rowStyle = styles.rowOdd;
    if((index % 2) === 0) {
      rowStyle  = styles.rowEven;
    }
    if(!renderCell) {
    //  renderCell = this._renderCell.bind(this, );
      return (
        <View key={index} style={[styles.row, rowStyle]}>
          {
              columns.map(col => this._renderCell(rowData[col.dataIndex], col))
          }
        </View>
      );
    }
    return (
      <View key={index} style={[styles.row, rowStyle]}>
        {
          columns.map(col => renderCell(rowData[col.dataIndex], col, rowData))
        }
      </View>
    );
  }

  render() {
    let { dataSource, height } = this.props;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.contentContainer]}
        horizontal={true}
        bounces={false} >
        <View>
          <View style={[styles.header, styles.row]}>
            { this._renderHeader() }
          </View>
          <ScrollView
            style={styles.dataView}
            contentContainerStyle={styles.dataViewContent} >
            { dataSource.map((rowData, index) => this._renderRow(rowData, index)) }
          </ScrollView>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  //  marginTop: 20,
    marginBottom: 40,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: colors.white,
  },
  contentContainer: {
   height: '85%'
  },
  header: {
    flexDirection: 'row',
  },
  headerItem: {
    minHeight: 30,
    width: DEFAULT_COLUMN_WIDTH,
    //backgroundColor: '#efefef',
  //  borderRightWidth: 1,
  //  borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerItemText: {
    minHeight: 25,
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: '#efefef',
  //  borderRightWidth: 1,
  //  borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataView: {
    flexGrow: 1,
  },
  dataViewContent: {
  },
  row: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderBottomColor: colors.greyOutline,
    borderBottomWidth: 1,
    backgroundColor: 'transparent'
  },
  rowEven:{
    backgroundColor: '#dde3e6'
  },
  rowOdd:{
    backgroundColor: 'white'
  },
  cell: {
    minHeight: 25,
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: 'transparent',
    //borderRightWidth: 1,
    //borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
      ...Platform.select({
        ios: {},
        android: {fontFamily: fonts.android.regular}
      }),
    },
  bold: {
      ...Platform.select({
        ios: {},
        android: {fontFamily: fonts.android.bold}
      }),
    }
});

export default Table
