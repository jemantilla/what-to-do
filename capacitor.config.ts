import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'what-to-do',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
