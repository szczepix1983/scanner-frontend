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
 * Facade Controller
 */
@Injectable({
  providedIn: 'root',
})
export class FacadeControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getByFacadeUsingGet2
   */
  static readonly GetByFacadeUsingGet2Path = '/facade/find/{facade}';

  /**
   * getByFacade.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByFacadeUsingGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByFacadeUsingGet2$Response(params: {

    /**
     * facade
     */
    facade: any;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FacadeControllerService.GetByFacadeUsingGet2Path, 'get');
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
   * To access the full response (for headers, for example), `getByFacadeUsingGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByFacadeUsingGet2(params: {

    /**
     * facade
     */
    facade: any;
  }): Observable<void> {

    return this.getByFacadeUsingGet2$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
