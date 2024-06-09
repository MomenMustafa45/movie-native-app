import CarouselContainer from "@/components/CarouselContainer";
import ScreenBar from "@/components/ScreenBar";
import { useState } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";

interface DataItem {
  title: string;
  body: string;
  imgUrl: string;
}

const DUMMY_DATA: DataItem[] = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "../assests/images/moviesImage.jpeg",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "../assests/images/moviesImage.jpeg",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "../assests/images/moviesImage.jpeg",
  },
];

let widthScreen = Dimensions.get("window").width;
let heightScreen = Dimensions.get("window").height;

export default function Index() {
  return (
    <View className="bg-black flex-1 mt-5 pt-3">
      <ScreenBar />
      <ScrollView>
        {/* Trending slide */}
        <CarouselContainer data={DUMMY_DATA} title="Trending" />

        {/* Upcoming */}
        <CarouselContainer data={DUMMY_DATA} title="Upcoming" />

        {/* Top rated */}
        <CarouselContainer data={DUMMY_DATA} title="Top Rated" />
      </ScrollView>
    </View>
  );
}
