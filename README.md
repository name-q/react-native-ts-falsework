# react-native-ts-falsework

## Determine the Java path

android/gradle.properties

`org.gradle.java.home=`

Windows system \Change to//

## react-native-config

Global variableal variable

## babel-plugin-module-resolver

Absolute path

## react-native-vector-icons

https://oblador.github.io/react-native-vector-icons/

## react-navigation  stack & bottom-tabs & material-top-tabs

index --> 

stack1:

​    { 

​           bottomTabs1 :{

​                       topTabs1,  topTabs2,  topTabs3,  topTabs4

​             }

​	   ,bottomTabs2

​	   ,bottomTabs3

​	   ,bottomTabs4

​       }

 , stack2

 , stack3:

​    {

​	<!--Warning: debug cannot be turned on when using drawer-->

​	  drawer:{

​		  drawer1,drawer2,drawer3 

​	  }        

​    }  



## redux + action.commonChange

action.commonChange   change  store  

> main:{params1,params2,params3...}

​     action.commonChange([

​            { paths: 'main.params1', value: 1 },

​            { paths: 'main.params2', value: [2] },

​            { paths: 'main.params3', value: 'value3' }

​      ])

​     action.commonChange('main.params1', 'value1');