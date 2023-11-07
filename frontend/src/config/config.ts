import { type ConfigType } from '../types/config';

export default class Config {
  private static instance: Config;

  public params: ConfigType;

  private constructor() {
    const env = import.meta.env;

    this.params = {
      apiUrl:
        env.VITE_APP_STATUS === 'dev'
          ? env.VITE_APP_DEV_API_URL
            ? env.VITE_APP_DEV_API_URL
            : ''
          : env.VITE_APP_PROD_API_URL
          ? env.VITE_APP_PROD_API_URL
          : '',
    };
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Config();
    }
    return this.instance;
  }
}
