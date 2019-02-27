# Vue-Content-Filter

<!-- ## 如何使用 -->

### 安装 **vue-content-filter**



#### 使用 npm 进行安装

```sh
npm install vue-content-filter --save
```



#### 注册插件

```javascript
//main.js
import VueContentFilter from "vue-content-filter";
import Vue from "vue";
Vue.use(VueContentFilter); // Vue2.x
```



### 使用 **Vue-Comtent-filter**



### 现有 5 个 API 可供使用

- [Capital](#Capital)
- [ReplaceVal](#ReplaceVal)
- [PlaceHolder](#PlaceHolder)
- [Omit](#Omit)
- [Hidden](#Hidden)


#### _Capital_

首字符大写。

```javascript

<p class="text">{{msg|Capital}}</p>
// this is capital => This Is Capital

new Vue({
    data:{
         msg:'this is capital'
    }
})
```


#### _ReplaceVal_

替换目标字符串，接收一个数组，数组元素为对象，每个对象有 2 个属性，*target*为目标值，*replacement*为替换值。

> **可选属性** &nbsp;&nbsp;&nbsp;_isSingle_ 
>&nbsp;&nbsp;&nbsp;**只适用于英文过滤** 
>&nbsp;&nbsp;&nbsp;每个对象包含布尔类型的*isSingle*属性，*isSingle*默认为*false*。
>&nbsp;&nbsp;&nbsp;isSingle 为 true 时，目标字符串为独立词组。

```javascript
<p class="text">{{msg|ReplaceVal(arr1)}}</p>
//'this is ReplaceVal' => 'thwas was ReplaceVal'

<p class="text">{{msg|ReplaceVal(arr2)}}</p>
// 'this is ReplaceVal' => 'this was ReplaceVal'

<p class="text">{{msg1|ReplaceVal(arr3)}}</p>
//'你们他们，今天明天' => '你说他说，今日明日'

new Vue({
    data:{
         msg:'this is ReplaceVal',
         msg1:'你们他们，今天明天',
         arr1:[
                {
                    target:'is',
                    replacement:'was'
                }
         ],
         arr2:[
                {
                    target:'is',
                    replacement:'was'
                    isSingle:true
                }
         ],
         arr3:[
                {
                    target:'们',
                    replacement:'说'
                },
                {
                    target:'日',
                    replacement:'日'
                }
         ]
    }
})
```


#### _PlaceHolder_

添加默认值，如果目标为空，则显示默认值。**不包含空格！**

```javascript
<p class="text">{{msg|PlaceHolder(placeholder)}}</p>
// "" => this is PlaceHolder

<p class="text">{{msg1|PlaceHolder(placeholder)}}</p>
// " "

new Vue({
    data:{
         msg:'',
         msg1:' ',
         placeholder:'this is PlaceHolder'
    }
})
```


#### _Omit_

省略字符，接收一个类型为数字的参数，确认保留的字符串。**不接受负值，如果输入值为 0，则返回空。**

```javascript
<p class="text">{{msg|Omit(4)}}</p>
// "this is Omit" => "this..."

 <p class="text">{{msg|Omit(omit)}}</p>
// "this is Omit" => "this..."

<p class="text">{{msg1|Omit(3)}}</p>
// "这是Omit" => "这是O..."

<p class="text">{{msg1|Omit(0)}}</p>
// "这是Omit" => ""
new Vue({
    data:{
         msg:'this is Omit',
         msg1:'这是Omit',
         omit：4
    }
})
```


#### _Hidden_

省略字符，接收一个字符串或者数组，单个或多个字符串隐藏。

```javascript
<p class="text">{{msg|Hidden(hidden)}}</p>
// 'this is Hidden' =>'this is '

<p class="text">{{msg1|Hidden('Hidden')}}</p>
//'这是Hidden' => '这是'

<p class="text">{{msg2|Hidden(['们','天'])}}</p>
//'你们他们，今天明天' =>'你他，今明'

new Vue({
    data:{
         hidden:'Hidden'
         msg:'this is Omit',
         msg1:'这是Hidden',
         msg2:' 你们他们，今天明天'
    }
})
```
