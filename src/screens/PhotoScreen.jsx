import { View } from "react-native"
import Photo from "../components/Photo"

const PhotoScreen = () => {
    return (
        <View style={styles.container}>
            <Photo />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default PhotoScreen;