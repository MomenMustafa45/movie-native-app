import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

interface DataItem {
  title: string;
  body: string;
  imgUrl: string;
}

interface Props {
  data: DataItem[];
  title: string;
}

let widthScreen = Dimensions.get("window").width;
let heightScreen = Dimensions.get("window").height;

const CarouselContainer = ({ data, title }: Props) => {
  return (
    <View className="bg-black">
      <Text className="text-white my-5 font-bold">{title}</Text>
      <View className="flex items-center justify-center">
        <Carousel
          activeSlideAlignment="center"
          vertical={false}
          data={data}
          renderItem={({ item }) => (
            <>
              <View className="flex items-center justify-center">
                <Image
                  style={{
                    width: widthScreen * 0.9,
                    height: heightScreen * 0.5,
                    // resizeMode: "center",
                  }}
                  className="rounded w-full"
                  source={require("../assets/images/moviesImage.jpeg")}
                />
              </View>
            </>
          )}
          sliderWidth={widthScreen + 80}
          itemWidth={Math.round(widthScreen + 80 * 0.7)}
        />
      </View>
    </View>
  );
};

export default CarouselContainer;
