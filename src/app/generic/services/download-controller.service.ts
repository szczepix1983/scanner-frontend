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
 * Download Controller
 */
@Injectable({
  providedIn: 'root',
})
export class DownloadControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation processUsingGet
   */
  static readonly ProcessUsingGetPath = '/download/process';

  /**
   * process.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  processUsingGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadControllerService.ProcessUsingGetPath, 'get');
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
   * To access the full response (for headers, for example), `processUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processUsingGet(params?: {
  }): Observable<void> {

    return this.processUsingGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getByFacadeUsingGet
   */
  static readonly GetByFacadeUsingGetPath = '/download/process/{facade}';

  /**
   * getByFacade.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByFacadeUsingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByFacadeUsingGet$Response(params: {

    /**
     * facade
     */
    facade: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadControllerService.GetByFacadeUsingGetPath, 'get');
    if (params) {
      rb.path('facade', params.facade, {});
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
   * getByFacade.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getByFacadeUsingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByFacadeUsingGet(params: {

    /**
     * facade
     */
    facade: any;
  }): Observable<void> {

    return this.getByFacadeUsingGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
