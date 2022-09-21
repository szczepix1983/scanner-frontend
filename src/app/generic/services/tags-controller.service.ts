/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



/**
 * Tags Controller
 */
@Injectable({
  providedIn: 'root',
})
export class TagsControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation processUsingGet3
   */
  static readonly ProcessUsingGet3Path = '/tags/process';

  /**
   * process.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processUsingGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  processUsingGet3$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TagsControllerService.ProcessUsingGet3Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * process.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `processUsingGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processUsingGet3(params?: {
  }): Observable<void> {

    return this.processUsingGet3$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
