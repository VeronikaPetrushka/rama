import { View } from "react-native"
import Achieves from "../components/Achieves"

const AchievesScreen = () => {
    return (
        <View style={styles.container}>
            <Achieves />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default AchievesScreen;