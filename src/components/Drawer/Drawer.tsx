import { AtDrawer } from 'taro-ui';
import { View, Text, Button, Image } from '@tarojs/components'
function MyDrawer(props) {
  return (
    <View style={{height: '60%'}}>
      <AtDrawer
      show={props.show}
      onClose={props.onClose}
      mask
      custom-class="my-drawer"  // 添加 custom-class 属性
    />

    </View>
    
  );
}
export default MyDrawer;
