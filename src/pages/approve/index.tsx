import react, { useState } from 'react'
import { View, Text,Input,CheckboxGroup } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtButton, AtList, AtListItem, AtSearchBar  } from 'taro-ui'
import './index.scss'
import Selecrt from '../../components/Select/Select'


export default function index() {
  const [order, setOrder] = useState([{ id: 1, name: 'aaa',time: '2023-04-19' },{ id: 2, name: 'bbb',time: '2023-04-19' },{ id: 3, name: 'ccc',time: '2023-04-19' }])

  const list = [{label: '选项1', value: 'aaaaa'},{label: '选项2', value: 'bbbb'}]

  const goto = (item) => {
    Taro.navigateTo({
      url: '/pages/approveDetail/index?id=' + item.id
    })
  }

  const onSelect = (value) => {
    console.log('value',value);
  }

  return (
    <View>
      <View className='search'>
      <Input type='text' placeholder='请搜索事件关键字' focus/>
      <Selecrt options={list} onSelect={onSelect} placeholder ='工单类型'></Selecrt>
      <Selecrt options={list} onSelect={onSelect} placeholder ='处理状态'></Selecrt>
      </View>

      <AtList className='list'>
        {order.map((item) => (
          <AtListItem
          className='listItem'
            title={item.name}
            note={<View className='note'>已完结</View>}
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            hasBorder={true}
            extraText={item.time}
            onClick={()=>goto(item.id)}
          />
      ))}
      </AtList>
    </View>
  )
}
