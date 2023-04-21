import react, { useEffect, useState } from 'react'
import { View, Text, Button, Textarea, Image,Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import { useDidShow, useDidHide } from '@tarojs/taro'

export default function index() {
  const [value, setValue] = useState('');

  // 点击返回上一页时的提示框
  const onClickBack = ()=>{
    console.log('dianjifanhui');
    
    Taro.showModal({
      content: '是否存储当前记录为草稿？',
      confirmText: '存草稿'
    }).then((res) => {
      if (res.confirm) {
        console.log('用户点击了确认按钮');
        // 在这里添加你的保存操作
        Taro.navigateBack();
        // 返回上一页
      } else if (res.cancel) {
        console.log('用户点击了取消按钮');
        Taro.navigateBack();
        // 直接返回上一页
      }
    });

  }

  // 监听输入事件
  const handleInput = (event) => {
    // 设置输入框的值
    setValue(event.target.value);
  };
  // 统计字数
  const countWords = () => {
    return value.length;
  };

  const [images, setImages] = useState([]);
  // 上传图片
  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1, // 只能上传一张图片
      sizeType: ['compressed'], // 压缩图片
      sourceType: ['album', 'camera'], // 从相册或相机中选择
      success: (res) => {
        // 更新图片列表
        setImages(images.concat(res.tempFilePaths));
      },
    });
  };
  // 删除图片
  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  // 计算上传数量
  const countImages = () => {
    return images.length;
  };

  return (
    <View>
    <View className='all'>
      <Text>任务执行描述（{countWords()}/1000）</Text>
      <View>
        <Textarea className='taxtArea' value={value} onInput={handleInput} placeholder="请输入任务执行描述" />
      </View>
      <Text>任务执行照片（{countImages()}/9）</Text>
      <View>
        <View className='image'>
          {images.map((image, index) => (
            <View key={index}>
              <Image src={image} mode="widthFix" />
              {/* <Button onClick={() => handleRemoveImage(index)}>删除</Button> */}
            </View>
          ))}
          <View className='update' onClick={handleChooseImage}>
          <View className='at-icon at-icon-add'></View>
        </View>
        </View>
        
      </View>
      <View>
      <Text>任务执行地点</Text>
      <View className='orderArea'>
      <Input className='area' type='text' focus/>
      <Button className='btn' size='mini'>
      <View className='at-icon at-icon-map-pin icon'></View>
      </Button>
      </View>
      </View>
      {/* <Button onClick={()=>onClickBack()} size='mini'>返回</Button> */}
    </View>
    <Button className='submit'>工单提交</Button>

    </View>
  )
}
