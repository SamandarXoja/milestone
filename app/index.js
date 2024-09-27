import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { router, Stack, useRouter } from "expo-router";
import { COLORS, icons } from "../constants";
import { ScreenHeaderBtn, ScreenHeaderBtnRight, Searchs } from "../components";
import Banners from "../components/home/banner/Banners";

import styles from "../styles/global";
import Audiolearn from "../components/home/learnAudio/Audiolearn";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import PracticeBlock from "../components/home/practiceBlock/practiceBlock";
import PracticeBlock from "../components/home/practiceBlock/Practice.jsx";
import Instruction from "../components/home/Instruction/Instruction.jsx";



const Home = () => {

    let title1 = 'Аудио для Изучение';
    let title2 = 'Аудио для Проверки';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen options={{
                headerTitle: "",
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtnRight dimension="100%" />
                )
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View>
                        <Searchs />
                        <Banners />
                    </View>
                    <View>
                        <Text style={styles.title}>Выберите свое обучение</Text>
                        <GestureHandlerRootView>
                            <Audiolearn title={title1} />
                            <Audiolearn title={title2} />
                            <PracticeBlock />
                            <Instruction />
                        </GestureHandlerRootView>

                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home