import { TestBed } from '@angular/core/testing';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { clientAngularInterceptor } from './client-angular.interceptor';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

describe('clientAngularInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => clientAngularInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('deberia crear el interceptor', () => {
    expect(interceptor).toBeTruthy();
  });

  it('debería concatenar el baseUrl a la URL de la petición', () => {
    const requestMock = new HttpRequest('GET', 'test');

    const next: HttpHandlerFn = (req) => {
      expect(req.url).toBe(`${environment.baseUrl}/test`);
      return of(new HttpResponse({ status: 200 }));
    };

    interceptor(requestMock, next).subscribe();
  });

});
