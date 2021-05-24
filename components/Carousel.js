import React from "react"
import Carousel from "react-native-snap-carousel"
import { StyleSheet, View, Text, ImageBackground } from "react-native"
import { useState } from "react"

const CarouselComponent = ()=>{

    const [ data, setData ] = useState([ {
        title:"Sydney",
        img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    },
    {
        title:"New york",
        img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
        title:"Las Vegas",
        img: "https://images.unsplash.com/photo-1470076892663-af684e5e15af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=617&q=80",
    },
    {
        title:"Paris",
        img: "https://images.unsplash.com/photo-1509299349698-dd22323b5963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    }])

    const _renderItem = ({item}) => {
        return (
          <ImageBackground  source={{ uri:item.img }} style={ styles.slide }>
              <Text style={ styles.slideText } >{ item.title }</Text>
          </ImageBackground>
        )
    }
   
return (
        <Carousel 
        autoplay={ true }
        loop={ true }
        layout={'stack'} layoutCardOffset={18}
        data={data}
        sliderWidth={ 600 }
        sliderHeight={ 600 }
        itemWidth={ 590 }
        itemHeight={ 590 }
        renderItem={_renderItem} />
    )
}

export default CarouselComponent 

const styles = StyleSheet.create({
    slide:{
        width:400,
        height:200,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginBottom:25
    },
    slideText:{
        fontSize:25,
        color:"white"
    }
})