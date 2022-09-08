const App: () => Node = () => {

    const isDarkMode = useColorScheme() === ‘dark’;
    
      const backgroundStyle = {
    
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    
      };
    
      startConversation = () => {
    
        let conversationObject = {
    
          ‘appId’: ‘eb775c44211eb7719203f5664b27b59f’ // The [est-cio-jogos-digitais-novdo](https://dashboard.kommunicate.io/settings/install) obtained from kommunicate dashboard.
    
        }
    
        RNKommunicateChat.buildConversation(conversationObject, (response, responseMessage) => {
    
          if (response == “Success”) {
    
            console.log(“Conversation Successfully with id:” + responseMessage);
    
          }
    
        });
    
      }
    
      return (
    
        <SafeAreaView style={styles.con}>
    
          <StatusBar barStyle={isDarkMode ? ‘light-content’ : ‘dark-content’} />
    
          <ScrollView
    
            contentInsetAdjustmentBehavior=”automatic”
    
            style={backgroundStyle}>
    
            <Header />
    
            <View
    
              style={{
    
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
    
              }}>
    
              <Text style={styles.title}></Text>
    
              <Text style={styles.title}>Here you can talk with our customer support.</Text>
    
              <View style={styles.container}>
    
                <Button
    
                  title=”Start conversation”
    
                  onPress={() => startConversation()}
    
                />
    
              </View>
    
            </View>
    
          </ScrollView>
    
        </SafeAreaView>
    
      );
    
    };