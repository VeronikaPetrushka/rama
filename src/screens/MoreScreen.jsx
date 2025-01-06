import { View } from "react-native"
import More from "../components/More"

const MoreScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <More item={item} />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default MoreScreen;