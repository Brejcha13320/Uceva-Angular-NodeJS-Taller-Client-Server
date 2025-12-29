import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPage } from './products.page';
import { provideHttpClient } from '@angular/common/http';
import { ProductsService } from '../../services/products/products.service';
import { ProductsTableComponent } from '../../components/products-table/products-table.component';
import { of, throwError } from 'rxjs';
import { PRODUCTS_MOCK } from '../../mocks/products.mocks';
import { By } from '@angular/platform-browser';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;
  let productsService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPage, ProductsTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllProducts al iniciar', () => {
    const spyGetAllProducts = jest.spyOn(productsService, 'getAllProducts').mockReturnValue(of(PRODUCTS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllProducts).toHaveBeenCalled();
  });

  it('debería asignar los productos recibidos del servicio', () => {
    jest.spyOn(productsService, 'getAllProducts').mockReturnValue(of(PRODUCTS_MOCK));
    fixture.detectChanges();
    expect(component.products).toEqual(PRODUCTS_MOCK);
  });

  it('debería pasar los productos al componente products-table', () => {
    jest.spyOn(productsService, 'getAllProducts').mockReturnValue(of(PRODUCTS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(ProductsTableComponent))
      .componentInstance;
    expect(tableComponent.products).toEqual(PRODUCTS_MOCK);
  });

  it('debería manejar el error cuando falla getAllProducts', () => {
    component.products = [];
    const errorResponse = new Error('Error al cargar productos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(productsService, 'getAllProducts').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(productsService.getAllProducts).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.products.length).toBe(0);
  });
});
