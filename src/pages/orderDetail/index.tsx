import { Component, PropsWithChildren, useState } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro';

export default function index() {
  const data = [{order: '一'},{order: '二'}]
  const onClickOrder = (type) => {
    if(type === 'deal'){
      Taro.navigateTo({
        url: '/pages/orderDeal/index'
      })
    }else{
      Taro.navigateTo({
        url: '/pages/approveDetail/index'
      })
    }
  }
  return (
    <View style={{ backgroundColor: '#f5f5f5', height: '100%', overflowY: 'hidden' }}>
      <View className='top'>
        <View className='row'>
          <Text>紧急程度</Text>
          <Text>1</Text>
        </View>
        <View className='row'>
          <Text>事件区域</Text>
          <Text>水水水水</Text>
          <Button className='btn' size='mini'>导航</Button>
        </View>
        <View className='row'>
          <Text>处理状态</Text>
          <Text>待处理</Text>
        </View>
        <View className='row'>
          <Text>工单内容</Text>
          <Text>新的沉降区域出现</Text>
        </View>
      </View>
      <View className='bottom'>
        {data.map(item =>(
          <View>
          <View className='title'>工单处理记录·{item.order}</View>
          <View className='row'>
            <Text>提交审批时间</Text>
            <Text>2023-04-19</Text>
          </View>
          <View className='row'>
            <Text>任务执行描述</Text>
            <Button className='btn' size='mini'>查看执行定位</Button>
          </View>
          <View className='textArea'>
            <Text>描述内容</Text>
          </View>
          <View className='row'>
            <Text>任务执行照片</Text>
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
          <View className='row'>
            <Text>审批结果</Text>
            <Text>新的沉降区域出现</Text>
          </View>
          <View className='row'>
            <Text>当前审批状态</Text>
            <View className='note'>已完结</View>
          </View>
          <View className='row'>
            <Text>审批时间</Text>
            <Text>2023-04-20</Text>
          </View>
          <View className='row'>
            <Text>审批反馈</Text>
            <Text>2023-04-20</Text>
          </View>
          <View className='separator'></View>  
          </View>
        ))}
        </View>
      <View onClick={()=>onClickOrder('deal')} className='orderDeal'>工单处理</View>
      <View onClick={()=>onClickOrder('approve')} className='orderApprove'>工单审批</View>
    </View>
  )

}
