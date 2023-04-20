import React, { useState } from 'react';
import SelectItem from './SelectItem';
import './style.scss';
import { View, Text, Button, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


const Select = ({ options, onSelect, placeholder = '' }) => {
  // 初始状态为关闭
  const [isOpen, setIsOpen] = useState(false);
  // 当前选中的值
  const [selectedValue, setSelectedValue] = useState(placeholder);
  // 点击 Select 组件
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // 点击选项
  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };
  return (
    <View className='select-container'>
      <View className='select' onClick={handleClick}>
        {selectedValue}
      </View>
      {isOpen ? <View className='at-icon at-icon-chevron-up icon'></View> : <View className='at-icon at-icon-chevron-down icon'></View> }
      
      {isOpen && (
        <View className='select-options'>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              item={option}
              onClick={() => handleSelect(option.value)}
            />
          ))}
        </View>
      )}
    </View>
  );
};
export default Select;