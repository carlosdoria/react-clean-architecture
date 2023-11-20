import { type HttpPostClient } from "data/protocols/http/http-post-client";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    const params = {
      url: this.url,
    };

    await this.httpPostClient.post(params);
  }
}
