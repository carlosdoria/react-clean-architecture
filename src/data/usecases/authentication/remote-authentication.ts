import { type HttpPostClient } from "data/protocols/http/http-post-client";
import { type AuthenticationParams } from "domain/usecases/authentication";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const data = {
      url: this.url,
      body: params,
    };

    await this.httpPostClient.post(data);
  }
}
