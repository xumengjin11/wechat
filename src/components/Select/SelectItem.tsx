import React from 'react';
import './style.scss';
import { View } from '@tarojs/components'

const SelectItem = ({ item, onClick }) => {
  return (
    <View className='select-item' onClick={onClick}>
      {item.label}
    </View>
  );
};
export default SelectItem;