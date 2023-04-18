import react, { useState } from 'react'
import { View, Text,Input } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtButton, AtList, AtListItem, AtSearchBar  } from 'taro-ui'
import './index.scss'

export default function index() {
  const [order, setOrder] = useState([{ id: 1, name: 'aaa' },{ id: 2, name: 'bbb' }])

  const goto = (item) => {
    Taro.navigateTo({
      url: '/pages/orderDetail/index?id=' + item.id
    })

  }
  return (
    <View>
      <View className='search'>
      <Input type='text' placeholder='请搜索事件关键字' focus/>
      <Input type='text' placeholder='工单类型' focus/>
      <Input type='text' placeholder='处理状态' focus/>
      </View>

      <AtList>
        {order.map((item) => (
          <AtListItem
            title={item.name}
            note='处理状态'
            arrow='right'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
          />
          
      ))}
      </AtList>
    </View>
  )

}
