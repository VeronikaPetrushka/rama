import { View } from "react-native"
import SingleMap from "../components/SingleMap"

const MapScreen = ({ route }) => {
    const { place } = route.params;

    return (
        <View style={styles.container}>
            <SingleMap place={place} />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default MapScreen;