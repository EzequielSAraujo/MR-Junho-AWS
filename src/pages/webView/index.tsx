import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

interface WebViewPageProps {}

const WebViewPage: React.FC<WebViewPageProps> = () => {
  const websiteURL = 'https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade/en/';

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: websiteURL }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default WebViewPage;