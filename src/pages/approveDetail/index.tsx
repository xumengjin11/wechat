import { Component, PropsWithChildren, useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import Taro,{ useRouter } from '@tarojs/taro';
import './index.scss'
import { AtDrawer } from 'taro-ui';
import MyDrawer from '../../components/Drawer/Drawer'

export default function index() {
  const router = useRouter();
  console.log('router',router);
  
  const [showDrawer, setShowDrawer] = useState(false);
  function handleToggleDrawer() {
    setShowDrawer(!showDrawer);
  }
  function handleCloseDrawer() {
    setShowDrawer(false);
  }
  return (
    <View className='all'>
      <View className='top'>
        <View className='top-show'>
          <View className='note'>事件简报</View>
          <View className='level'>紧急程度：1</View>
          <View className='at-icon at-icon-map-pin icon'></View>
        </View>
        <View className='row'>
          <Text>事件名称</Text>
          <Text>1</Text>
        </View>
        <View className='row'>
          <Text>工单类型</Text>
          <Text>待处理</Text>
        </View>
        <View className='row'>
          <Text>工单内容</Text>
          <Text>新的沉降区域出现</Text>
        </View>
        <View className='separator'></View>
      </View>
      <View className='bottom'>
        <View className='bottom-show'>
        <View className='note'>处理报告</View>
        <Button className='cancel' size='mini'>撤销审批</Button>
        </View>
        <View className='row'>
          <Text>提交审批时间</Text>
          <Text>2023-04-21 17：36  王鹏  提交</Text>
          <View className='at-icon at-icon-phone icon'></View>
        </View>
        <View className='row'>
          <Text>任务执行描述</Text>
          <View className='textArea'>
            <Text>描述内容</Text>
          </View>
        </View>
        <View className='row'>
            <Text>任务执行照片</Text>
            <Button className='btn' size='mini'>查看执行定位</Button>
        </View>
        <View className="image">
            <Image
              mode="widthFix"
              src={require("../../assets/images/aaa.jpeg")}
            />
            <Image
              mode="widthFix"
              src={require("../../assets/images/aaa.jpeg")}
            />
            <Image
              mode="widthFix"
              src={require("../../assets/images/aaa.jpeg")}
            />
          </View>
          <View className='separator'></View>
      </View>
      <View className='end'>
      <View className='note'>审批结果</View>
      <View className='row'>
            <Text>当前审批状态</Text>
            <View className='status'>已完结</View>
      </View>
      <View className='row'>
          <Text>审批时间</Text>
          <Text>2023-04-21 17：36</Text>
        </View>
        <View className='row'>
          <Text>审批反馈</Text>
          <Text>xxxxxxxxx</Text>
        </View>
      </View>
      <Button className='submit'>进行审批</Button>
    </View>
  )

}
