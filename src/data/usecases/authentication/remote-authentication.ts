import { type HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credential-error";
import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { type AuthenticationParams } from "@/domain/usecases/authentication";

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

    const httpResponse = await this.httpPostClient.post(data);

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;

      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();

      case HttpStatusCode.badRequest:
        throw new UnexpectedError();

      default: {
        await Promise.resolve();
      }
    }
  }
}
