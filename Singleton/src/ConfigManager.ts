export class ConfigManager {
  private url: string;
  private db: string;
  private static ConfigMgr: ConfigManager;

  public static getConfigurador(url: string, db: string): ConfigManager {
    if (ConfigManager.ConfigMgr === undefined) {
      ConfigManager.ConfigMgr = new ConfigManager(url, db);
    }
    return ConfigManager.ConfigMgr;
  }

  private constructor(url: string, db: string) {
    this.url = url;
    this.db = db;
  }

  public getUrl(): string {
    return this.url;
  }

  public getDb(): string {
    return this.db;
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public setDb(db: string) {
    this.db = db;
  }
}
