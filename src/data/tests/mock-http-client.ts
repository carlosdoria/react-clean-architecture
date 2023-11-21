import {
  type HttpPostClient,
  type HttpPostClientParams,
} from "@/data/protocols/http/http-post-client";
import {
  type HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http/http-response";

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent,
  };

  async post(params: HttpPostClientParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;

    return await Promise.resolve(this.response);
  }
}
