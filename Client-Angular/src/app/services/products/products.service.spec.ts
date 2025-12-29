import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from '../../interfaces/products.interface';
import { PRODUCTS_MOCK } from '../../mocks/products.mocks';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllProducts', () => {
  
    it('debería realizar una petición GET y retornar una lista de productos', () => {
      const countProducts = 5;
      const mockProducts: Product[] = PRODUCTS_MOCK;

      service.getAllProducts(countProducts).subscribe((productos) => {
        expect(productos).toEqual(mockProducts);
        expect(productos.length).toBe(mockProducts.length);
      });

      const req = httpMock.expectOne(`api/products/${countProducts}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockProducts);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countProducts = 3;

      service.getAllProducts(countProducts).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/products/${countProducts}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  
  });

});
