'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import { CustomIcon } from '../common/CustomIcon.js';

const MenuList = (props) => {
  const itemSelectedValue = props.selectedItem ? props.selectedItem : '';
  const menuDataArray = props.menuData ? props.menuData : [];
  const menuList = menuDataArray.map((menuItem, key) => (
    <TouchableOpacity
      onPress={() => props.openMenu(menuItem.route, menuItem.name)}
      key={key}
      >
        <View
          style={menuItem.route === itemSelectedValue ?
            [styles.items, styles.itemSelected] : styles.noSelectedItems}
            >
              <View style={styles.withIcon}>
                <CustomIcon
                  style={styles.iconWithText}
                  name={menuItem.icon}
                  iconPackage={menuItem.iconPackage}
                  color="white"
                  size={28}
                />
                <Text style={styles.text}>{menuItem.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ));
        console.log(menuList);
        if (menuList && menuList.length > 0) {
          return (
            <View style={{ flexDirection: 'column' }}>
              {menuList}
            </View>
          );
        } else {
          return <View><Text> hello </Text></View>
        }

        //return menuList && menuList.length > 0 ? menuList : null;
      };

      const styles = {
        items: {
          paddingVertical: 15,
          paddingLeft: 20,
          marginTop: 5
        },
        itemSelected: {
          borderLeftWidth: 5,
          borderColor: 'red'
        },
        noSelectedItems: {
          paddingVertical: 15,
          paddingLeft: 25,
          marginTop: 5
        },
        withIcon: {
          flexDirection: 'row',
          alignItems: 'center'
        },
        iconWithText: {
          marginRight: 10,
          paddingLeft: 20
        },
        text: {
          color: '#b3b3b3',
          fontSize: 18
        },
      };

      MenuList.propTypes = {
        openMenu: PropTypes.func,
        selectedItem: PropTypes.string,
        menuData: PropTypes.array

      };

      export default MenuList;
