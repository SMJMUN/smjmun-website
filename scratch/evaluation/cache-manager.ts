import * as fs from "fs";
import * as path from "path";

export class EvalCacheManager {
  private cachePath = path.join(__dirname, "llm-cache.json");
  private cache: Record<string, any> = {};

  constructor() {
    if (fs.existsSync(this.cachePath)) {
      this.cache = JSON.parse(fs.readFileSync(this.cachePath, "utf-8"));
    }
  }

  get(query: string): any | null {
    return this.cache[query] || null;
  }

  set(query: string, response: any) {
    this.cache[query] = response;
    this.save();
  }

  private save() {
    fs.writeFileSync(this.cachePath, JSON.stringify(this.cache, null, 2));
  }
}
