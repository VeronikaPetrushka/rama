import { View } from "react-native"
import Book from "../components/Book"

const BookScreen = () => {
    return (
        <View style={styles.container}>
            <Book />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default BookScreen;