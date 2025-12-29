import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PRODUCTS_MOCK } from '../../mocks/products.mocks';
import { ProductsTableComponent } from './products-table.component';

describe('ProductsTableComponent', () => {
  let component: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada producto', () => {
    component.products = PRODUCTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.products.length);
  });

  it('debería mostrar los datos del producto en cada columna', () => {
    component.products = PRODUCTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const product = component.products[index];
      const productPrice = new CurrencyPipe('en-US').transform(product.price);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(product.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(product.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(productPrice);
      expect(columns[3].nativeElement.textContent.trim()).toBe(product.category);
    });
  });

  it('debería mapear cada ingeniería a su BadgeType correcto', () => {
    expect(component.categoryMap['Carnes']).toBe('danger');
    expect(component.categoryMap['Frutas']).toBe('warning');
    expect(component.categoryMap['Lacteos']).toBe('primary');
    expect(component.categoryMap['Verduras']).toBe('success');
  });
});
